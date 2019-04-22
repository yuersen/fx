/**
 * map method callback
 *
 * @function MapCallback
 * @param {*} element 当前遍历的数组元素
 * @param {Number} index 当前元素的所在数组中的索引
 * @param {*[]} array 数组本身
 * @returns {*}
 */

/**
 * 创建一个新数组, 给原数组中的每个元素都按顺序调用一次 callback 函数，已删除（使用delete方法等情况）或者未初始化的项将被跳过
 *
 * @function
 * @param  {*[]} arr 待测试的数组
 * @param  {MapCallback} callback 用来测试每个元素的函数
 * @param  {*} thisArg? 执行 callback 时使用的 this 值
 * @returns {*[]}
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
