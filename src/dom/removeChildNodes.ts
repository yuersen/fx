/**
 * 删除指定元素的所有子节点
 *
 * @function
 * @param {Element} element 删除所遇子节点的元素
 * @returns {Element}
 */
const removeChildNodes = (element: Element): Element => {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
  return element;
};
export default removeChildNodes;
