/**
 * 测试数组中的某些元素是否通过由提供的函数实现的测试
 *
 * @function
 * @memberof Fx
 * @param {Any[]} arr 待测试的数组
 * @param {Function} callback 遍历数组的回调函数，接受三个参数：element -> 当前遍历的数组元素，index -> 当前元素的所在数组中的索引，array -> 数组本身
 * @param  {Any} thisArg? 执行 callback 时使用的 this 值
 * @returns {Boolean}
 * @example
 *
 * const list = [1, 2, 4, 5];
 *
 * // -> false
 * console.log(Fx.some(list, item => item > 6));
 *
 * // -> true
 * console.log(Fx.some(list, item => item > 4));
 */
const some = (
  arr: any[],
  callback: (element: any, index: number, arr: any[]) => boolean,
  thisArg?: any
): boolean => {
  const l = arr.length;
  for (let i = 0; i < l; i++) {
    if (i in arr && callback.call(thisArg, arr[i], i, arr)) {
      return true;
    }
  }
  return false;
};

export default some;
