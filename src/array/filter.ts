/**
 * filter method callback
 *
 * @function FilterCallback
 * @param {*} element 当前遍历的数组元素
 * @param {Number} index 当前元素的所在数组中的索引
 * @param {*[]} array 数组本身
 * @returns {Boolean} 返回真值或者假值
 */

/**
 * 创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素
 *
 * @function
 * @param  {*[]} arr 待测试的数组
 * @param  {FilterCallback} callback 用来测试每个元素的函数
 * @param  {*} thisArg? 执行 callback 时使用的 this 值
 * @returns {*[]}
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
