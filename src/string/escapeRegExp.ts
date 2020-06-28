/**
 * 将正则特殊符号进行转义替换
 * @see https://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
 * @function
 * @memberof Fx
 * @param {string} str - 包含正则特殊字符的字符串
 * @returns {string}
 * @example
 *
 * // -> fxString
 * Fx.camelize('fx-string');
 *
 * // -> fxString
 * Fx.camelize('fx_string');
 */
const escapeRegExp = (str: string): string => {
  return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
};
export default escapeRegExp;
