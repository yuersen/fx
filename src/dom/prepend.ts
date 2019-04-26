import insertNode from './insertNode';

/**
 * 在当前结点内部前面插入新的节点或者 html 片段
 *
 * @function
 * @memberof Fx
 * @param {Element} element 待插入的 html 片段或者 Node 节点的元素
 * @param {Element | String} node html 片段或 Node 节点
 * @returns {Element}
 * @example
 *
 * const content = document.querySelector('#content');
 * // add node
 * const div = document.createElement('div');
 * Fx.prepend(content, div);
 *
 * // add html fragment
 * Fx.prepend(content, '<div>information</div>')
 */
const prepend = (element: Element, node: Element | string): Element => {
  return insertNode(element, node, 'afterbegin');
};
export default prepend;
