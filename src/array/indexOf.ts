/**
 * 返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1
 *
 * @function
 * @memberof Fx
 * @param  {Any[]} arr 被循环遍历的数组
 * @param  {Any} search 任意类型的待检索的参数
 * @param  {Number} start 开始检索位置，默认从 0 开始遍历
 * @returns {Number}
 * @example
 * 
 * const list = [10, 20, 10, 30];
 * // -> -1
 * console.log(Fx.indexOf(list, 15));
 * // -> 1
 * console.log(Fx.indexOf(list, 20));
 * 
 * // -> 2
 * console.log(Fx.indexOf(list, 10, 1));
 * // -> 2
 * console.log(Fx.indexOf(list, 10, -3));
 */
const indexOf = (arr: any[], search: any, start: number = 0): number => {
  const l = arr.length;

  if (l === 0 || start >= l) {
    return -1;
  }
  start = Math.max(start >= 0 ? start : l + start, 0);

  for (; start < l; start++) {
    if (arr[start] === search) {
      return start;
    }
  }
  return -1;
};

export default indexOf;
