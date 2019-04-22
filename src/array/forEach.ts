/**
 * some method callback
 *
 * @function ForEachCallback
 * @param {*} element 当前遍历的数组元素
 * @param {Number} index 当前元素的所在数组中的索引
 * @param {*[]} array 数组本身
 * @returns {Boolean} 返回真值或者假值
 */

/**
 * 按升序为数组中含有效值的每一项执行一次callback 函数，已删除（使用delete方法等情况）或者未初始化的项将被跳过。
 *
 * @function
 * @param  {*[]} arr 待测试的数组
 * @param  {ForEachCallback} callback 用来测试数组的每个元素的函数
 * @param  {*} thisArg? 执行 callback 时使用的 this 值
 */
const forEach = (
  arr: any[],
  callback: (element: any, index: number, arr: any[]) => boolean,
  thisArg?: any
): void => {
  const l = arr.length;
  for (let i = 0; i < l; i++) {
    if (i in arr && callback.call(thisArg, arr[i], i, arr)) {
      return; // 回调返回 false 结束循环
    }
  }
};

export default forEach;
