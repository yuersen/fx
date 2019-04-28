/**
 * 移除字符串左右的空格
 *
 * @function
 * @memberof Fx
 * @param {String} str 待移除左右空格的字符串
 * @returns {String}
 * @example
 *
 * // -> 'Fx'
 * Fx.trim(' Fx ');
 * Fx.trim(' Fx');
 * Fx.trim('Fx ');
 */
const trim = (str: string): string => {
  return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
};

export default trim;
