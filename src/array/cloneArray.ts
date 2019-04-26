/**
 * 克隆数组
 *
 * @function
 * @memberof Fx
 * @param {Any[]} arr 待操作数组
 * @returns {Any[]}
 * @example
 *
 *  const arr = Fx.cloneArray([1, 2, 3]);
 *  // -> [1, 2, 3]
 *  console.log(arr);
 */
const cloneArray = (arr: any[]): any[] => {
  return [].slice.call(arr || [], 0);
};
export default cloneArray;
