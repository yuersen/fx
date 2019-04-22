/**
 * 首字母大写
 *
 * @function
 * @param {String} str 待操作的字符串
 * @returns {String}
 */
const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.substr(1);
};

export default capitalize;
