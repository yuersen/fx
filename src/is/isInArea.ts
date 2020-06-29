/**
 * 判断滚动条是否在指定区域，使用比例计算，滚动条高度和距离顶部位置不断变化
 *
 * @function
 * @memberof Fx
 * @param {Element} element - 待操作的 DOM
 * @param {number} range - 滚动条滑块所在比例区间
 * @returns {Element}
 * @example
 * 
 * const wrap = document.getElementById('wrap');
 * Fx.isInArea(wrap, 0.5);
 */
const isInArea = (elem: Element, range: number): boolean => {
  return (elem.scrollTop + elem.clientHeight) / elem.scrollHeight > range;
};
export default isInArea;
