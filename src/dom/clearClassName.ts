/**
 * 清空所有的 className
 *
 * @function
 * @memberof Fx
 * @param {element} element 待清除所有 className 的 DOM
 * @returns {element}
 * @example
 *
 * const wrap = document.getElementById('wrap');
 * const processed = Fx.clearClassName(wrap);
 *
 * // -> true
 * console.log(wrap == processed);
 */
const clearClassName = (element: Element): Element => {
  element.className = '';
  return element;
};
export default clearClassName;
