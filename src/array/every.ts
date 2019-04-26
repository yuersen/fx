/**
 * 测试数组的所有元素是否都通过了指定函数的测试
 *
 * @function
 * @memberof Fx
 * @param  {Any[]} arr 待测试的数组
 * @param  {Function(element: any, index: number, arr: any[]) => boolean} callback 用来测试每个元素的函数，接受三个参数：element -> 当前遍历的数组元素，index -> 当前元素的所在数组中的索引，array -> 数组本身
 * @param  {Any} thisArg? 执行 callback 时使用的 this 值
 * @returns {Boolean}
 * @example
 * 
 * const allAgeGT20 = Fx.every([12, 30, 40], (element, index, array) => {
 *  return element > 20;
 * });
 * // -> false
 * console.log(allAgeGT20);
 */
const every = (
  arr: any[],
  callback: (element: any, index: number, arr: any[]) => boolean,
  thisArg?: any
): boolean => {
  const l = arr.length;
  for (let i = 0; i < l; i++) {
    if (i in arr && !callback.call(thisArg, arr[i], i, arr)) {
      return false;
    }
  }
  return true;
};

export default every;
