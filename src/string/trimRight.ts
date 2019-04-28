/**
 * 移除字符串右侧的空格
 *
 * @function
 * @memberof Fx
 * @param {String} str 待移除右空格的字符串
 * @returns {String}
 * @example
 * 
 * // -> Fx
 * Fx.trimRight('Fx ');
 */
const trimRight = (str: string): string => {
  return str.replace(/\s*$/, '');
};
export default trimRight;
