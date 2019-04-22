/**
 * 判断一个数组是否包含一个指定的值
 *
 * @function
 * @param  {*[]} arr 被循环遍历的数组
 * @param  {any} search 需要查找的元素值
 * @param  {number} start? 从该索引处开始查找 search,默认为 0
 * @returns {Boolean} 包含则返回 true，否则返回false
 */
const includes = (arr: any[], search: any, start?: number): boolean => {
  const l = arr.length;
  let i = start || 0;

  if (!l) {
    return false;
  }
  i = Math.max(i >= 0 ? i : l - Math.abs(i), 0);
  while (i < l) {
    if (arr[i] === search) {
      return true;
    }
    i++;
  }
  return false;
};
export default includes;
