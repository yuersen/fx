import insertNode from './insertNode';

/**
 * 在当前结点内部前面插入新的节点或者 html 片段
 *
 * @function
 * @param {Element} element 待插入的 html 片段或者 Node 节点的元素
 * @param {Element | String} node html 片段或 Node 节点
 * @returns {Element}
 */
const prepend = (element: Element, node: Element | string): Element => {
  return insertNode(element, node, 'afterbegin');
};
export default prepend;
