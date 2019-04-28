/**
 * 生成随机的字符串
 *
 * @function
 * @memberof Fx
 * @param {Number} len - 生存随机字符串的长度
 * @return {String}
 * @example
 *
 * Fx.createRandomString();
 * Fx.createRandomString(5);
 */
const createRandomString = (length: number = 0): string => {
  let str: string = '';
  // toSting接受的参数表示进制，默认为10进制。36进制为0-9 a-z
  while (str.length < length) {
    str += Math.random()
      .toString(36)
      .substr(2);
  }
  return str.substr(0, length);
};
export default createRandomString;
