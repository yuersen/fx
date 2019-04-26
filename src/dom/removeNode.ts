/**
 * 删除指定的元素
 *
 * @function
 * @memberof Fx
 * @param {Element} element 待删除的元素
 * @example
 *
 * Fx.removeNode(document.getElementById('container'));
 */
const removeNode = (element: Element): void => {
  element.parentNode && element.parentNode.removeChild(element);
};
export default removeNode;
