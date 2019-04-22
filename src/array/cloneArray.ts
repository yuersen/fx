/**
 * 克隆数组
 *
 * @function
 * @param {*[]} arr 待操作数组
 * @returns {*[]}
 */
const cloneArray = (arr: any[]): any[] => {
  return [].slice.call(arr || [], 0);
};
export default cloneArray;
