/**
 * 通过设置 display 属性控制元素显示
 *
 * @function
 * @memberof Fx
 * @param {Element} element 待显示的元素
 * @returns {Element}
 * @example
 *
 * Fx.show(document.getElementById('container'));
 */
const show = (element: Element): Element => {
  (element as any).style.display = '';
  return element;
};
export default show;
