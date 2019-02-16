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
   * 删除elem节点函数
   * @returns void
   */
  remove(): void {
    const elem = this.elem as Node;
    if (elem) {
      elem.parentNode.removeChild(elem);
    }
  }

  /**
   * 从一个元素中删除所有子节点的函数
   * @returns void
   */
  empty(): void {
    const elem = this.elem as Node;
    while (elem.firstChild) {
      elem.removeChild(elem.firstChild);
    }
  }

  /**
   * 向节点的子节点列表的末尾添加新的子节点
   * @param  {Node} child 带插入的节点
   * @returns void
   */
  append(child: Node): void {
    const elem = this.elem;
    // 1.元素, 9.代表整个文档（根节点）,11.代表轻量级的 Document 对象，能够容纳文档的某个部分
    if (elem.nodeType === 1 || elem.nodeType === 11 || elem.nodeType === 9) {
      elem.appendChild(child);
    }
  }

  /**
   * 向已有子节点之前插入新的子节点
   * @param  {Node} child 带插入的节点
   * @returns void
   */
  prepend(child: Node): void {
    const elem = this.elem;
    if (elem.nodeType === 1 || elem.nodeType === 11 || elem.nodeType === 9) {
      elem.insertBefore(child, elem.firstChild);
    }
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
