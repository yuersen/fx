/**
 * 包含'-'或者'_'的字符串,转化为驼峰风格
 *
 * @function
 * @memberof Fx
 * @param {String} str 待操作的字符串
 * @returns {String}
 * @example
 *
 * // -> fxString
 * Fx.camelize('fx-string');
 *
 * // -> fxString
 * Fx.camelize('fx_string');
 */
const camelize = (str: string): string => {
  return str.replace(/[-_][^-_]/g, (match: any) => {
    return match.charAt(1).toUpperCase();
  });
};
export default camelize;
