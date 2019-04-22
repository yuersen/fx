/**
 * some method callback
 *
 * @function SomeCallback
 * @param {*} element 当前遍历的数组元素
 * @param {Number} index 当前元素的所在数组中的索引
 * @param {*[]} array 数组本身
 * @returns {Boolean} 返回真值或者假值
 */

/**
 * 测试数组中的某些元素是否通过由提供的函数实现的测试
 *
 * @function
 * @param {*[]} arr 待测试的数组
 * @param  {SomeCallback} callback 用来测试每个元素的函数
 * @param  {*} thisArg? 执行 callback 时使用的 this 值
 * @returns boolean
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
