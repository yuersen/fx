/**
 * find method callback
 *
 * @function FindCallback
 * @param {*} element 当前遍历的数组元素
 * @param {Number} index 当前元素的所在数组中的索引
 * @param {*[]} array 数组本身
 * @returns {Boolean}
 */

/**
 * 返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined
 *
 * @function
 * @param  {*[]} arr 待测试的数组
 * @param  {FindCallback} callback 用来测试每个元素的函数
 * @param  {*} thisArg? 执行 callback 时使用的 this 值
 * @returns {*[]}
 */
const find = (
  arr: any[],
  callback: (element: any, index: number, arr: any[]) => any,
  thisArg?: any
): any[] => {
  const l = arr.length;
  for (let i = 0; i < l; i++) {
    if (i in arr && callback.call(thisArg, arr[i], i, arr)) {
      return arr[i];
    }
  }
  return void 0;
};

export default find;
