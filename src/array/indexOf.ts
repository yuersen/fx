/**
 * 返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1
 *
 * @function
 * @param  {*[]} arr 被循环遍历的数组
 * @param  {*} search 任意类型的待检索的参数
 * @param  {Number} start? 开始检索位置
 * @returns {Number}
 */
const indexOf = (arr: any[], search: any, start?: number): number => {
  const l = arr.length;
  let i = start || 0;

  if (l === 0 || i >= l) {
    return -1;
  }
  i = Math.max(i >= 0 ? i : l - Math.abs(i), 0);

  for (; i < l; i++) {
    if (arr[i] === search) {
      return i;
    }
  }
  return -1;
};

export default indexOf;
