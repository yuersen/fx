/**
 * 判断一个数组是否包含一个指定的值
 *
 * @function
 * @memberof Fx
 * @param  {Any[]} arr 被循环遍历的数组
 * @param  {Any} search 需要查找的元素值
 * @param  {Number} start 从该索引处开始查找 search,默认为 0
 * @returns {Boolean} 包含则返回 true，否则返回 false
 * @example
 * 
 * const list = [10, 20, 30];
 * 
 * // -> false
 * console.log(Fx.includes(list, 5));
 * // -> true
 * console.log(Fx.includes(list, 10));
 * 
 * // -> true
 * console.log(Fx.includes(list, 20, 1));
 * // -> true
 * console.log(Fx.includes(list, 20, -3));
 */
const includes = (arr: any[], search: any, start: number = 0): boolean => {
  const l = arr.length;

  if (!l) {
    return false;
  }
  start = Math.max(start >= 0 ? start : l + start, 0);
  while (start < l) {
    if (arr[start] === search) {
      return true;
    }
    start++;
  }
  return false;
};
export default includes;
