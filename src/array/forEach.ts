/**
 * 按升序为数组中含有效值的每一项执行一次callback 函数，已删除（使用delete方法等情况）或者未初始化的项将被跳过。
 *
 * @function
 * @memberof Fx
 * @param  {Any[]} arr 待测试的数组
 * @param  {Function} callback 用来测试每个元素的函数，接受三个参数：element -> 当前遍历的数组元素，index -> 当前元素的所在数组中的索引，array -> 数组本身
 * @param  {Any} thisArg? 执行 callback 时使用的 this 值
 * @example
 * 
 * Fx.forEach(['F', 'x'], (item, index, arr) => {
 *  // -> 'F', 0, ['F', 'x']
 *  // -> 'x', 1, ['F', 'x']
 *  console.log(item, index, arr);
 * });
 */
const forEach = (
  arr: any[],
  callback: (element: any, index: number, arr: any[]) => void | boolean,
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
