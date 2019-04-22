/**
 * 判断是否是合理的IP地址
 *
 * @function
 * @param {String} str 表示 IP 的字符串
 * @returns {Boolean}
 */
const checkIP = (str: string): boolean => {
  return /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(str);
};
export default checkIP;