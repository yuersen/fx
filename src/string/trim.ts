/**
 * 移除字符串左右的空格
 *
 * @function
 * @param {String} str 待移除左右空格的字符串
 * @returns {String}
 */
const trim = (str: string): string => {
  return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
};

export default trim;
