/**
 * 返回指定元素在数组中的最后一个的索引，如果不存在则返回 -1
 *
 * @function
 * @param  {*[]} arr 被循环遍历的数组
 * @param  {*} search 任意类型的待检索的参数
 * @param  {Number} start? 开始检索位置
 * @returns {Number}
 */
const lastIndexOf = (arr: any[], search: any, start?: number): number => {
  const l = arr.length;
  let i = start || l - 1;

  if (l === 0 || i >= l) {
    return -1;
  }
  i = Math.max(i >= 0 ? i : l + i, 0);
  for (; i >= 0; i--) {
    if (arr[i] === search) {
      return i;
    }
  }
  return -1;
};

export default lastIndexOf;
