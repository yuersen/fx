/**
 * 创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素
 *
 * @function
 * @memberof Fx
 * @param  {Any[]} arr 待测试的数组
 * @param  {Function} callback 用来测试每个元素的函数，接受三个参数：element -> 当前遍历的数组元素，index -> 当前元素的所在数组中的索引，array -> 数组本身
 * @param  {Any} thisArg? 执行 callback 时使用的 this 值
 * @returns {Any[]}
 * @example
 * 
 * const greaterAge = Fx.filter([10, 20, 15, 30], (age, index, arr) => {
 *  return age > 15;
 * });
 * // -> [20, 30]
 * console.log(greaterAge);
 */
const filter = (
  arr: any[],
  callback: (element: any, index: number, arr: any[]) => boolean,
  thisArg?: any
): any[] => {
  const l = arr.length;
  const result = [];

  for (let i = 0; i < l; i++) {
    if (i in arr && callback.call(thisArg, arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }
  return result;
};

export default filter;
