/**
 * 判断输入的参数是否是个合格的 URL
 *
 * @function
 * @memberof Fx
 * @param {String} str 表示 URL 的字符串
 * @returns {Boolean}
 * @example
 * 
 * // -> true
 * Fx.checkURL('http://www.fx.com');
 * // -> false
 * Fx.checkURL('htp://fx.com');
 */
const checkURL = (str: string): boolean => {
  return new RegExp(
    '^((https|http|ftp|rtsp|mms)?://)' +
    "?(([0-9a-z_!~*'().&=+$%-]+: )?[0-9a-z_!~*'().&=+$%-]+@)?" + // ftp的user@
    '(([0-9]{1,3}.){3}[0-9]{1,3}' + // IP形式的URL- 199.194.52.184
    '|' + // 允许IP和DOMAIN（域名）
    "([0-9a-z_!~*'()-]+.)*" + // 域名- www.
    '([0-9a-z][0-9a-z-]{0,61})?[0-9a-z].' + // 二级域名
    '[a-z]{2,6})' + // first level domain- .com or .museum
    '(:[0-9]{1,4})?' + // 端口- :80
      '((/?)|' +
      "(/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+/?)$"
  ).test(str);
};

export default checkURL;
