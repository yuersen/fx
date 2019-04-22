/**
 * 清空所有的 className
 *
 * @function
 * @param {Element} element 待清除所有 className 的 DOM
 * @returns {Element}
 */
const cleanClassName = (element: Element): Element => {
  element.className = '';
  return element;
};
export default cleanClassName;
