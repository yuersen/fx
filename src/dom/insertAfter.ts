import insertNode from './insertNode';

/**
 * 在当前结点后(外部)插入新的节点或者 html 片段
 *
 * @function
 * @memberof Fx
 * @param {Element} element 待插入的 html 片段或者 Node 节点的元素
 * @param {Element | String} node html 片段或 Node 节点
 * @returns {Element}
 * @example
 *
 * const container = document.getElementById('container');
 * const htmlFragment = `<div>html fragment</div>`;
 * Fx.insertAfter(container, htmlFragment);
 *
 * const div = document.createElement('div');
 * Fx.insertAfter(container, div);
 */
const insertAfter = (element: Element, node: Element | string): Element => {
  return insertNode(element, node, 'afterend');
};
export default insertAfter;
