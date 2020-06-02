/**
 * 判断元素是否滚动到底部
 *
 * @function
 * @memberof Fx
 * @param {Element} element - 待操作的 DOM
 * @returns {boolean}
 * @example
 * 
 * const wrap = document.getElementById('wrap');
 * Fx.isAtBottom(wrap);
 * 
 * // -> true
 */
const isAtBottom = (elem: Element): boolean => {
  return elem.scrollHeight - elem.scrollTop === elem.clientHeight;
};
export default isAtBottom;
