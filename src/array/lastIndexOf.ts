/**
 * 返回指定元素在数组中的最后一个的索引，如果不存在则返回 -1
 *
 * @function
 * @memberof Fx
 * @param  {Any[]} arr 被循环遍历的数组
 * @param  {Any} search 任意类型的待检索的参数
 * @param  {Number} start 开始检索位置，默认从 arr.length - 1 开始检索
 * @returns {Number}
 * @example
 * 
 * const list = [10, 20, 10, 30];
 * // -> -1
 * console.log(Fx.lastIndexOf(list, 15));
 * // -> 1
 * console.log(Fx.lastIndexOf(list, 20));
 * 
 * // -> -1
 * console.log(Fx.lastIndexOf(list, 10, 5));
 * // -> 0
 * console.log(Fx.lastIndexOf(list, 10, -3));
 */
const lastIndexOf = (arr: any[], search: any, start?: number): number => {
  const l = arr.length;

  start = start || l - 1;
  if (l === 0 || start >= l) {
    return -1;
  }
  start = Math.max(start >= 0 ? start : l + start, 0);
  while (start--) {
    if (arr[start] === search) {
      return start;
    }
  }
  return -1;
};

export default lastIndexOf;
