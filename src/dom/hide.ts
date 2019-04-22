/**
 * 控制元素隐藏
 *
 * @function
 * @param {Element} element - 待操作的 DOM
 * @returns {Element}
 */
const hide = (element: Element): Element => {
  (element as any).style.display = 'none';
  return element;
};
export default hide;
