/**
 * 判断是否是合理的IP地址
 *
 * @function
 * @memberof Fx
 * @param {String} str 表示 IP 的字符串
 * @returns {Boolean}
 * @example
 *
 * // -> true
 * Fx.checkIP('127.0.0.0.1');
 * // -> false
 * Fx.checkIP('265.265.265.265');
 */
const checkIP = (str: string): boolean => {
  return /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
    str
  );
};
export default checkIP;
