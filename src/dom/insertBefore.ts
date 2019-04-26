import insertNode from './insertNode';

/**
 * 在当前结点前(外部)插入新的节点或者 html 片段
 *
 * @function
 * @memberof Fx
 * @param {Element} element 待插入的 html 片段或者 Node 节点的元素
 * @param {Element | String} node html 片段或 Node 节点
 * @returns {Element}
 * @example
 *
 * const container = document.getElementById('container');
 * Fx.insertBefore(container, '<div id="outerBefore"></div>');
 *
 * const before = document.getElementById('before');
 * Fx.insertBefore(container, before);
 */
const insertBefore = (element: Element, node: Element | string): Element => {
  return insertNode(element, node, 'beforebegin');
};
export default insertBefore;
