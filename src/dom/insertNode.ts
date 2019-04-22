/**
 * 在指定位置插入节点或 html 片段，相关位置如下：
 * 'beforebegin'：元素自身的前面
 * 'afterbegin'：插入元素内部的第一个子节点之前
 * 'beforeend'：插入元素内部的最后一个子节点之后
 * 'afterend'：元素自身的后面。
 *
 * @function
 * @param {Element} element 待插入的 html 片段或者 Node 节点的元素
 * @param {Element | String} node html 片段或 Node 节点
 * @param {String} position 插入的位置
 * @returns {Element}
 */
const insertNode = (
  element: Element,
  node: Node | string,
  position: string
): Element => {
  const nodeType: number = element.nodeType;
  // 1.元素, 9.代表整个文档（根节点）,11.代表轻量级的 Document 对象，能够容纳文档的某个部分
  if (nodeType === 1 || nodeType === 11 || nodeType === 9) {
    if (typeof node === 'string') {
      element.insertAdjacentHTML(position as any, node as string);
    } else {
      switch (position) {
        case 'beforebegin': // 外部插入：在当前结点前插入新的节点
          element.parentNode.insertBefore(node, element);
          break;
        case 'afterbegin': // 内部插入：向已有子节点之前插入新的子节点
          element.insertBefore(node, element.firstChild);
          break;
        case 'beforeend': // 内部插入：向节点的子节点列表的末尾添加新的子节点
          element.appendChild(node);
          break;
        case 'afterend': // 外部插入：在当前结点后插入新的节点
          element.parentNode.insertBefore(node, element.nextSibling);
          break;
        default:
          throw new SyntaxError('Illegal insertion position of nodes.');
      }
    }
  }
  return element;
};
export default insertNode;
