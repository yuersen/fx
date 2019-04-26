/**
 * 返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined
 *
 * @function
 * @memberof Fx
 * @param  {Any[]} arr 待测试的数组
 * @param  {Function} callback 用来测试每个元素的函数，接受三个参数：element -> 当前遍历的数组元素，index -> 当前元素的所在数组中的索引，array -> 数组本身
 * @param  {Any} thisArg? 执行 callback 时使用的 this 值
 * @returns {Any|Undefined}
 * @example
 * 
 * const name = Fx.find(['fxyu', 'fiyu', 'ftyu'], (name, index, arr) => {
 *  return name.indexOf('fiy') !== -1;
 * });
 * // -> fiyu
 * console.log(name);
 */
const find = (
  arr: any[],
  callback: (element: any, index: number, arr: any[]) => any,
  thisArg?: any
): any | undefined => {
  const l = arr.length;
  for (let i = 0; i < l; i++) {
    if (i in arr && callback.call(thisArg, arr[i], i, arr)) {
      return arr[i];
    }
  }
  return void 0;
};

export default find;
