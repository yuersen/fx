/**
 * 设置指定元数 display 为 none 控制元素隐藏
 *
 * @function
 * @memberof Fx
 * @param {Element} element - 待操作的 DOM
 * @returns {Element}
 * @example
 * 
 * const wrap = document.getElementById('wrap');
 * Fx.hide(wrap);
 * 
 * // -> none
 * console.log(wrap.style.display);
 */
interface Element {
  style: any;
}
const hide = (element: Element): Element => {
  element.style.display = 'none';
  return element;
};
export default hide;
