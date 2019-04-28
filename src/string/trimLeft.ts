/**
 * 移除字符串左侧的空格
 *
 * @function
 * @memberof Fx
 * @param {String} str 待移除左空格的字符串
 * @returns {String}
 * @example
 * 
 * // -> Fx
 * Fx.trimLeft(' Fx');
 */
const trimLeft = (str: string): string => {
  return str.replace(/^\s*/, '');
};
export default trimLeft;
