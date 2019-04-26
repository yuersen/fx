/**
 * 创建一个新数组, 给原数组中的每个元素都按顺序调用一次 callback 函数，已删除（使用delete方法等情况）或者未初始化的项将被跳过
 *
 * @function
 * @memberof Fx
 * @param  {Any[]} arr 待测试的数组
 * @param  {Function} callback 遍历数组的回调函数，接受三个参数：element -> 当前遍历的数组元素，index -> 当前元素的所在数组中的索引，array -> 数组本身
 * @param  {Any} thisArg? 执行 callback 时使用的 this 值
 * @returns {Any[]}
 * @example
 * 
 * const lists = [1, 2, 3];
 * // -> [2, 4, 6]
 * console.log(Fx.map(lists, item => item * 2));
 */
const map = (
  arr: any[],
  callback: (element: any, index: number, arr: any[]) => any,
  thisArg?: any
): any[] => {
  const l = arr.length;
  const result = [];

  for (let i = 0; i < l; i++) {
    result[i] = callback.call(thisArg, arr[i], i, arr);
  }
  return result;
};

export default map;
