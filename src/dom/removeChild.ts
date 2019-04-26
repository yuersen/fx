/**
 * 删除指定元素的所有子节点
 *
 * @function
 * @memberof Fx
 * @param {Element} element 删除所遇子节点的元素
 * @returns {Element}
 * @example
 *
 * const container = document.getElementById('container');
 * Fx.removeChild(container);
 */
const removeChild = (element: Element): Element => {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
  return element;
};
export default removeChild;
