/**
 * 控制元素显示
 *
 * @function
 * @param {Element} element 待显示的元素
 * @returns {Element}
 */
const show = (element: Element): Element => {
  (element as any).style.display = '';
  return element;
};
export default show;
