/**
 * 获取字符串的字节数
 *
 * @function
 * @param {String} str 待操作的字符串
 * @param {Number} fix 指定字符串与字节的转换位数，默认是2
 * @returns {Number}
 */
const getByte = (str: string, fix: number = 2): number => {
  return str.replace(/[^\x00-\xff]/g, new Array(fix + 1).join('-')).length;
};
export default getByte;
