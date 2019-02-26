/**
 * DOM extension tool
 * @author pxyamos
 */

/**
 * 伪数组转换成数组
 * @param  {any[]} arr 伪数组
 * @returns any
 */
function toArray(arr: any): any[] {
  return [].slice.call(arr, 0);
}

/**
 * 判断当前是否是 Node 节点
 * @param  {Node} el Node节点
 * @returns boolean
 */
function isNode(el: Node): boolean {
  let t: number;
  return (
    el && typeof el === 'object' && (t = el.nodeType) && (t === 1 || t === 9)
  );
}

/**
 * 删除数组中重复元素。只处理删除DOM元素数组，而不能处理字符串或者数字数组
 * @param  {Element[]} els
 * @returns Element
 */
function unique(els: Element[]): Element[] {
  const duplicates = [];

  // 先排序，再进行重复移除
  els.sort((fel: Element, sel: Element) => {
    if (fel === sel) {
      return 0;
    }
  });

  // 标记重复元素
  for (let i = 0, l = els.length; i < l; i++) {
    if (els[i] === els[i - 1]) {
      duplicates.push(i);
    }
  }

  // 移除重复元素
  let k = duplicates.length;
  while (k--) {
    els.splice(duplicates[k], 1);
  }
  return els;
}

/**
 * 获取所有的同辈节点，包含自身
 * @returns Node
 */
function sibling(el: Node, elem?: Element): Element[] {
  const els: Element[] = [];
  for (; el; el = el.nextSibling) {
    if (el.nodeType === 1 && el !== elem) {
      els.push(el as Element);
    }
  }
  return unique(els);
}
class DOMUtil {
  el: Element[];
  length: number;
  ctx: any;
  constructor(selector: Node | string, context?: Node | string) {
    const doc = window.document;
    // normalize context
    let ctx: any;
    if (isNode(context as Node)) {
      ctx = context;
    } else if (typeof context === 'string') {
      ctx = doc.querySelector(context) || doc;
    } else {
      ctx = doc;
    }
    this.ctx = ctx;

    // normalize selector
    let el: Element[];
    if (isNode(selector as Node)) {
      el = [<Element>selector];
    } else if (typeof selector === 'string') {
      el = toArray(ctx.querySelectorAll(selector) || []);
    }
    this.el = el;
    this.length = el.length;
    return this;
  }

  /**
   * 循环遍历元素并执行指定的 callback
   * @param  {(el:Element,index?:number)=>void} callback 遍历元素执行的回调
   * @returns DOMUtil
   */
  forEach(callback: (el: Element, index?: number) => void): DOMUtil {
    for (let i = 0; i < this.length; i++) {
      if (callback.call(this, this.el[i], i) === !1) {
        break;
      }
    }
    return this;
  }

  /**
   * 搜索所有与指定表达式匹配的元素，
   * 这个函数是找出正在处理的元素的后代元素的好方法。
   * @param  {string} selector 用于查找的选择器
   * @returns Element[]
   */
  find(selector: string): Element[] {
    let els: Element[] = [];
    this.forEach(el => {
      els = els.concat(toArray(el.querySelectorAll(selector) || []));
    });
    return unique(els);
  }

  /**
   * 父元素的元素集合
   * @returns Element[]
   */
  parent(): Element[] {
    const els: Element[] = [];
    this.forEach(el => {
      if (el.parentNode) {
        els.push(el.parentNode as Element);
      }
    });
    return unique(els);
  }

  /**
   * 查找相关元素的前一个兄弟元素的方法,Internet Explorer 会忽略节点之间生成的空白文本节点（比如换行字符），而 Mozilla 不这么做
   * @returns Element[]
   */
  prev(): Element[] {
    const els: Element[] = [];
    this.forEach((el: Node) => {
      do {
        el = el.previousSibling;
      } while (el && el.nodeType !== 1);

      if (el && (el.nodeType === 1 || el.nodeType === 9)) {
        els.push(el as Element);
      }
    });
    return unique(els);
  }

  /**
   * 查找相关元素的下一个兄弟元素的方法
   * @returns Element[]
   */
  next(): Element[] {
    const els: Element[] = [];
    this.forEach((el: Node) => {
      do {
        el = el.nextSibling;
      } while (el && el.nodeType !== 1);

      if (el && (el.nodeType === 1 || el.nodeType === 9)) {
        els.push(el as Element);
      }
    });
    return unique(els);
  }

  siblings(): Element[] {
    let els: Element[] = [];
    this.forEach(el => {
      if (el.parentNode) {
        els = els.concat(sibling(el.parentNode.firstChild, el));
      }
    });
    return unique(els);
  }

  /**
   * 获取所有的子节点，不包含曾节点
   * @returns Element[]
   */
  children(): Element[] {
    let els: Element[] = [];
    this.forEach((el: Node) => {
      if (el.firstChild) {
        els = els.concat(sibling(el.firstChild));
      }
    });
    return unique(els);
  }

  /**
   * 获取第一个元素
   * @returns Element
   */
  first(): Element {
    return this.el[0];
  }

  /**
   * 获取最后个元素
   * @returns Element
   */
  last(): Element {
    return this.el[this.length - 1];
  }

  /**
   * 返回第一个匹配元素用于定位的父节点
   * @returns Element[]
   */
  offsetParent(): Element[] {
    const els: Element[] = [];
    this.forEach((el: HTMLElement) => {
      els.push(el.offsetParent || document.documentElement);
    });
    return els;
  }

  /**
   * 获取第一个匹配元素在当前视口的相对偏移
   * @returns number
   */
  offset(): { top: number; left: number } {
    const rect = this.first().getBoundingClientRect();
    const body = document.body;
    return {
      top: rect.top + body.scrollTop,
      left: rect.left + body.scrollLeft
    };
  }

  /**
   * 获取第一个匹配元素外部高度（默认包括补白和边框）
   * @param  {boolean=false} opt 设置为 true 时，计算边距在内
   * @returns number
   */
  outerHeight(opt: boolean = false): number {
    const el: any = this.first();
    const height = el.offsetHeight;

    if (!opt) {
      return height;
    }
    const style = window.getComputedStyle(el);
    return (
      height + parseInt(style.marginTop, 10) + parseInt(style.marginBottom, 10)
    );
  }

  /**
   * 获取第一个匹配元素外部宽度（默认包括补白和边框）
   * @param  {boolean=false} opt 设置为 true 时，计算边距在内
   * @returns number
   */
  outerWidth(opt: boolean = false): number {
    const el: any = this.first();
    const width = el.offsetWidth;

    if (!opt) {
      return width;
    }
    const style = window.getComputedStyle(el);
    return (
      width + parseInt(style.marginLeft, 10) + parseInt(style.marginRight, 10)
    );
  }

  /**
   * 克隆节点
   * @returns Element[]
   */
  clone(): Element[] {
    const els: Element[] = [];
    this.forEach((el: Node) => {
      els.push(el.cloneNode(true) as Element);
    });
    return els;
  }

  /**
   * 是否包含另一个DOM节点
   * @param  {Node} el DOM节点，可能被其他元素所包含
   * @returns boolean
   */
  contains(el: Node): boolean {
    let flag: boolean = false;
    this.forEach((elem: Node) => {
      if (elem !== el && elem.contains(el)) {
        flag = true;
        return false;
      }
    });
    return flag;
  }

  /**
   * 删除elem节点函数
   * @returns DOMUtil
   */
  remove(): DOMUtil {
    return this.forEach((el: Node) => {
      el.parentNode.removeChild(el);
    });
  }

  /**
   * 从一个元素中删除所有子节点的函数
   * @returns DOMUtil
   */
  empty(): DOMUtil {
    this.forEach((el: Node) => {
      while (el.firstChild) {
        el.removeChild(el.firstChild);
      }
    });
    return this;
  }
  /**
   * 在指定位置插入节点或 html 片段，相关位置如下：
   * 'beforebegin'：元素自身的前面
   * 'afterbegin'：插入元素内部的第一个子节点之前
   * 'beforeend'：插入元素内部的最后一个子节点之后
   * 'afterend'：元素自身的后面。
   * @param  {string} position 相对于元素的位置
   * @param  {Node|string} tnode 插入的节点或者 html 片段
   * @returns DOMUtil
   */
  insert(position: string, tnode: Node | string): DOMUtil {
    this.forEach((el: Element) => {
      const nodeType: number = el.nodeType;
      // 1.元素, 9.代表整个文档（根节点）,11.代表轻量级的 Document 对象，能够容纳文档的某个部分
      if (nodeType === 1 || nodeType === 11 || nodeType === 9) {
        if (typeof tnode === 'string') {
          el.insertAdjacentHTML(position as any, tnode as string);
        } else {
          switch (position) {
            case 'beforebegin': // 外部插入：在当前结点前插入新的节点
              el.parentNode.insertBefore(tnode, el);
              break;
            case 'afterbegin': // 内部插入：向已有子节点之前插入新的子节点
              el.insertBefore(tnode, el.firstChild);
              break;
            case 'beforeend': // 内部插入：向节点的子节点列表的末尾添加新的子节点
              el.appendChild(tnode);
              break;
            case 'afterend': // 外部插入：在当前结点后插入新的节点
              el.parentNode.insertBefore(tnode, el.nextSibling);
              break;
            default:
              throw new SyntaxError('Illegal insertion position of nodes.');
          }
        }
      }
    });
    return this;
  }

  /**
   * 外部插入：在当前结点前插入新的节点
   * @param  {Node} tnode 待插入的节点
   * @returns DOMUtil
   */
  before(tnode: Node | string): DOMUtil {
    return this.insert('beforebegin', tnode);
  }

  /**
   * 内部插入：向已有子节点之前插入新的子节点
   * @param  {Node} tnode 待插入的节点
   * @returns DOMUtil
   */
  prepend(tnode: Node | string): DOMUtil {
    return this.insert('afterbegin', tnode);
  }

  /**
   * 内部插入：向节点的子节点列表的末尾添加新的子节点
   * @param  {Node} tnode 待插入的节点
   * @returns DOMUtil
   */
  append(tnode: Node | string): DOMUtil {
    return this.insert('beforeend', tnode);
  }

  /**
   * 外部插入：在当前结点后插入新的节点
   * @param  {Node} tnode 待插入的节点
   * @returns DOMUtil
   */
  after(tnode: Node | string): DOMUtil {
    return this.insert('afterend', tnode);
  }

  /**
   * 设置或返回被选元素的属性值
   * @param  {string} name 属性名称
   * @param  {string} val? 属性值
   * @returns DOMUtil | string[]
   */
  attr(name: string, val?: string): DOMUtil | string {
    if (val) {
      return this.forEach(el => {
        el.setAttribute(name, val);
      });
    }
    return this.first().getAttribute(name);
  }

  /**
   * 从每一个匹配的元素中删除一个属性
   * @param  {string} name 属性名称
   * @returns DOMUtil
   */
  removeAttr(name: string): DOMUtil {
    return this.forEach(el => {
      el.removeAttribute(name);
    });
  }

  /**
   * 获取/设置元素中的文本内容，使用 innerText 忽略隐藏节点和格式
   * @param  {string} str? 文本内容
   * @returns DOMUtil | string[]
   */
  text(value?: string): DOMUtil | string {
    if (!value) {
      return (this.first() as any).innerText || this.first().textContent;
    }
    return this.forEach((el: any) => {
      el.innerText = value;
    });
  }

  /**
   * 获取/设置html片段,IE下tbody、tr的innerHTML都是只读的，不允许写入，而在其他浏览器下则没问题
   * @param  {string} value? 带插入的 html 片段
   * @returns DOMUtil
   */
  html(value?: string): DOMUtil | string {
    if (!value) {
      return this.first().innerHTML;
    }
    const wrapMap: {[key: string]: any[]} = {
      option: [1, "<select multiple='multiple'>", '</select>'],
      legend: [1, '<fieldset>', '</fieldset>'],
      area: [1, '<map>', '</map>'],
      param: [1, '<object>', '</object>'],
      thead: [1, '<table>', '</table>'],
      tbody: [1, '<table>', '</table>'],
      tr: [2, '<table><tbody>', '</tbody></table>'],
      col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>'],
      td: [3, '<table><tbody><tr>', '</tr></tbody></table>']
    };
    return this.forEach(el => {
      try {
        el.innerHTML = value;
      } catch(e) {
        // IE 6-9 don't support setting innerHTML for
        // TABLE, TBODY, TFOOT, THEAD, and TR directly
        // const special = wrapMap[(/<([\w:]+)/.exec(value) || ['', ''])[1].toLowerCase()];
        const special = wrapMap[el.tagName.toLowerCase()];
        if (special) {
          // Create a new element and return the first child
          let vnode = document.createElement('div');
          vnode.innerHTML = special[1] + value + special[2];

          // 遍历获取当前待插入子节点
          for (let i = 0; i < special[0]; i++) {
            vnode = vnode.firstChild as any;
          }

          // Remove the old elements
          let l = el.children.length;
          for (let k = 0; k < l; k++) {
            el.removeChild(el.children[k]);
          }

          // Add the new elements
          l = vnode.children.length;
          for (let u = 0; u < l; u++) {
            el.appendChild(vnode.children[u]);
          }
        }
      }
    });
  }
}
export default function(selector: Node | string, context?: Node | string) {
  return new DOMUtil(selector, context);
}
