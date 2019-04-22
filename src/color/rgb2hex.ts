/**
 * RGB 到 16进制(HEX)的装换
 * 16进制一个三原色数值等于相应RGB的三原色数值除以16，第一位是商，第二位是余数。
 * 超过9的用字母表示，10对应A，11对应B，12对应C，13对应D，14对应E，15对应F。
 * 例如：RGB(169,245,8)
 * 1. R: 169/16=10余9，而10对应A，即 A9
 * 2. G: 245/16=15余5, 而15对应F，即 F5
 * 3. B：8/16=0余8，即 08 所以 RGB(169,245,8)=#A9F508
 *
 * @see http://www.140byt.es/keywords/color
 * @function
 * @param {Number[]} rgb 表示 RGB 的数组
 * @returns {String}
 */
const rgb2hex = (rgb: number[]): string => {
  return (
    '#' +
    // tslint:disable-next-line:no-bitwise
    (((((256 + rgb[0]) << 8) | rgb[1]) << 8) | rgb[2]).toString(16).slice(1)
  );
};
export default rgb2hex;
