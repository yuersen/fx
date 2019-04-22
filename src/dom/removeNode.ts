/**
 * 删除元素
 *
 * @function
 * @param {Element} element 待删除的元素
 * @returns {Element}
 */
const removeNode = (element: Element): Element => {
  element.parentNode.removeChild(element);
  return element;
};
export default removeNode;
