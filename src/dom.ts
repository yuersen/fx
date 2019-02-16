/**
 * DOM extension tool
 * @author pxyamos
 */

export default class DOMUtil {
  elem: Element;
  constructor(elem: Element) {
    this.elem = elem;
  }

  /**
   * 查询单个子节点
   * @param  {string} selector css 选择器
   * @returns Element
   */
  query(selector: string): Node {
    return this.elem.querySelector(selector);
  }

  /**
   * 查询多个子节点
   * @param  {string} selector css 选择器
   * @returns NodeListOf
   */
  queryAll(selector: string): NodeListOf<Element> {
    return this.elem.querySelectorAll(selector);
  }

  /**
   * 父元素的元素集合
   * @returns Node
   */
  parent(): Node {
    return this.elem.parentNode;
  }

  /**
   * 查找相关元素的前一个兄弟元素的方法,Internet Explorer 会忽略节点之间生成的空白文本节点（比如换行字符），而 Mozilla 不这么做
   * @returns Node
   */
  prev(): Node {
    let elem = this.elem as Node;
    do {
      elem = elem.previousSibling;
    } while (elem && elem.nodeType !== 1);

    return elem;
  }

  /**
   * 查找相关元素的下一个兄弟元素的方法
   * @returns Node
   */
  next(): Node {
    let elem = this.elem as Node;
    do {
      elem = elem.nextSibling;
    } while (elem && elem.nodeType !== 1);

    return elem;
  }

  /**
   * 获取所有的兄弟节点
   * @returns Node
   */
  sibling(elem?: Node): Node[] {
    const r = [];
    let el: any = elem || this.elem;
    for (; el; el = el.nextSibling) {
      if (el.nodeType === 1) {
        r.push(el);
      }
    }

    return r;
  }

  /**
   * 获取所有的子节点，不包含曾节点
   * @returns Node
   */
  children(): Node[] {
    return this.sibling(this.elem.firstChild);
  }

  /**
   * 返回第一个匹配元素用于定位的父节点
   * @returns Node
   */
  offsetParent(): Node {
    return (this.elem as any).offsetParent || document.documentElement;
  }

  /**
   * 获取匹配元素在当前视口的相对偏移
   * @returns number
   */
  offset(): { top: number; left: number } {
    const rect = this.elem.getBoundingClientRect();
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
    const el: any = this.elem;
    const height = el.offsetHeight;

    if (!opt) {
      return height;
    }
    const style = getComputedStyle(el);
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
    const el: any = this.elem;
    const width = el.offsetWidth;

    if (!opt) {
      return width;
    }
    const style = getComputedStyle(el);
    return (
      width + parseInt(style.marginLeft, 10) + parseInt(style.marginRight, 10)
    );
  }

  /**
   * 克隆节点
   * @returns Node
   */
  clone(): Node {
    return this.elem.cloneNode(true);
  }
  /**
   * 是否包含另一个DOM节点
   * @param  {Node} el DOM节点，可能被其他元素所包含
   * @returns boolean
   */
  contains(el: Node): boolean {
    return this.elem !== el && this.elem.contains(el);
  }

  /**
   * 删除elem节点函数
   * @returns DOMUtil
   */
  remove(): DOMUtil {
    const elem = this.elem as Node;
    if (elem) {
      elem.parentNode.removeChild(elem);
    }
    return this;
  }

  /**
   * 从一个元素中删除所有子节点的函数
   * @returns DOMUtil
   */
  empty(): DOMUtil {
    const elem = this.elem as Node;
    while (elem.firstChild) {
      elem.removeChild(elem.firstChild);
    }
    return this;
  }

  /**
   * 内部插入：向节点的子节点列表的末尾添加新的子节点
   * @param  {Node} elet 待插入的节点
   * @returns DOMUtil
   */
  append(elet: Node | string): DOMUtil {
    const elem = this.elem;
    // 1.元素, 9.代表整个文档（根节点）,11.代表轻量级的 Document 对象，能够容纳文档的某个部分
    if (elem.nodeType === 1 || elem.nodeType === 11 || elem.nodeType === 9) {
      if (typeof elet === 'string') {
        elem.insertAdjacentHTML('beforeend', elet as string);
      } else {
        elem.appendChild(elet as Node);
      }
    }
    return this;
  }

  /**
   * 内部插入：向已有子节点之前插入新的子节点
   * @param  {Node} elet 待插入的节点
   * @returns DOMUtil
   */
  prepend(elet: Node | string): DOMUtil {
    const elem = this.elem;
    if (elem.nodeType === 1 || elem.nodeType === 11 || elem.nodeType === 9) {
      if (typeof elet === 'string') {
        elem.insertAdjacentHTML('afterbegin', elet as string);
      } else {
        elem.insertBefore(elet, elem.firstChild);
      }
    }
    return this;
  }

  /**
   * 外部插入：在当前结点前插入新的节点
   * @param  {Node} elet 待插入的节点
   * @returns DOMUtil
   */
  before(elet: Node | string): DOMUtil {
    const elem = this.elem;
    const parent = elem.parentNode;
    if (parent) {
      if (typeof elet === 'string') {
        elem.insertAdjacentHTML('beforebegin', elet as string);
      } else {
        parent.insertBefore(elet as Node, elem);
      }
    }
    return this;
  }

  /**
   * 外部插入：在当前结点后插入新的节点
   * @param  {Node} elet 待插入的节点
   * @returns DOMUtil
   */
  after(elet: Node | string): DOMUtil {
    const elem = this.elem;
    const parent = elem.parentNode;
    if (parent) {
      if (typeof elet === 'string') {
        elem.insertAdjacentHTML('afterend', elet as string);
      } else {
        parent.insertBefore(elet as Node, elem.nextSibling);
      }
    }
    return this;
  }
  /**
   * 设置或返回被选元素的属性值
   * @param  {string} name 属性名称
   * @param  {string} val? 属性值
   * @returns DOMUtil|string
   */
  attr(name: string, val?: string): DOMUtil | string {
    const el = this.elem;
    if (val) {
      el.setAttribute(name, val);
      return this;
    }
    return el.getAttribute(name);
  }

  /**
   * 获取/设置元素中的文本内容，使用 innerText 忽略隐藏节点和格式
   * @param  {string} str? 文本内容
   * @returns string
   */
  text(str?: string): string {
    const elem = this.elem as any;

    if (str) {
      elem.innerText = str;
    }
    return elem.innerText;
  }

  /**
   * 获取/设置html片段
   * IE下tbody、tr的innerHTML都是只读的，不允许写入，而在其他浏览器下则没问题
   */
  html(str?: string) {
    const elem = this.elem;

    if (!str) {
      return elem;
    }

    try {
      elem.innerHTML = str;
    } catch (e) {
      // IE 6-9 don't support setting innerHTML for
      // TABLE, TBODY, TFOOT, THEAD, and TR directly
      const getELementByFragment = (html: string) => {
        const div = document.createElement('div');
        div.innerHTML = html;
        return div.firstChild;
      };

      const replaceElement = (elms: any) => {
        // Remove the old elements from `elm`
        let child;
        for (let i = elem.children.length; i > 0; i--) {
          child = elem.children[i];
          if (child) {
            elem.removeChild(child);
          }
        }
        // Add the new elements from `elms` to `elm`
        for (let k = 0, l = elms.children.length; k < l; k++) {
          child = elms.children[k];
          if (child) {
            elem.appendChild(child);
          }
        }
      };

      const tagName = elem.tagName.toLowerCase();
      let processed;
      if (tagName === 'table') {
        processed = getELementByFragment('<table>' + str + '</table>');
      } else if (tagName in { tbody: 0, tfoot: 0, thead: 0 }) {
        processed = getELementByFragment(
          '<table><tbody>' + str + '</tbody></table>'
        ).firstChild;
      } else if (tagName === 'tr') {
        processed = getELementByFragment(
          '<table><tbody><tr>' + str + '</tr></tbody></table>'
        ).firstChild.firstChild;
      } else {
        throw e;
      }
      replaceElement(processed);
    }
  }
}
