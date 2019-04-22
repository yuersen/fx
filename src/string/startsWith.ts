/**
 * 判断当前字符串是否是以另外一个给定的子字符串“开头”的，根据判断结果返回 true 或 false
 *
 * @function
 * @param {String} str 待检测字符串
 * @param {String} search 要搜索的子字符串
 * @param {Number} position? 搜索开始位置，默认值为 0
 * @returns {Boolean}
 */
const startsWith = (
  str: string,
  search: string,
  position?: number
): boolean => {
  if (position === void 0 || position > str.length) {
    position = 0;
  }
  return str.substr(position, search.length) === search;
};
export default startsWith;
