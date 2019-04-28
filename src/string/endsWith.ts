/**
 * 判断当前字符串是否是以另外一个给定的子字符串“结尾”的，根据判断结果返回 true 或 false
 *
 * @function
 * @memberof Fx
 * @param {String} str 待检测字符串
 * @param {String} search 要搜索的子字符串
 * @param {Number} position? 检索开始的位置，默认值为 str.length
 * @returns {Boolean}
 * @example
 *
 * // -> true
 * Fx.endsWith('testfx', 'fx');
 * // -> false
 * Fx.endsWith('testfx', 'Fx');
 */
const endsWith = (str: string, search: string, position?: number): boolean => {
  if (position === void 0 || position > str.length) {
    position = str.length;
  }
  return str.substring(position - search.length, position) === search;
};

export default endsWith;
