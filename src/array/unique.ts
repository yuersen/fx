/**
 * 移除数组中重复的元素
 *
 * @function
 * @memberof Fx
 * @param  {Any[]} arr 被循环遍历的数组
 * @returns {Any[]}
 * @example
 *
 * const list = [1, 2, 3, 1, 4];
 *
 * // -> [1, 2, 3, 4]
 * console.log(Fx.unique(list));
 */
const unique = (arr: any[]): any[] => {
  const l = arr.length;
  const result = [];

  arr.sort();

  for (let i = 0; i < l; i++) {
    if (arr[i] !== arr[i + 1]) {
      result.push(arr[i]);
    }
  }

  return result;
};

export default unique;
