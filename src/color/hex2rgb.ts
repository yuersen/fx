/**
 * HEX 到 RGB的装换
 * 16进制 转 RGB
 * RGB的数值是16乘以HEX的第一位加上HEX的第二位，数字10以下的RGB和HEX都是相同的，
 * 但需要在前面补0成两位数，10对应A，11对应B，12对应C，13对应D，14对应E，15对应F。
 * 例如：
 * #A9F508=RGB(16*10+9，16*15+5,16*0+8)=RGB(169,245,8)
 *
 * @function
 * @param {String} hex 表示 HEX 的字符串
 * @returns {Number[]}
 */
const hex2rgb = (hex: string): number[] => {
  hex = '0x' + hex.slice(1).replace(hex.length > 4 ? hex : /./g, '$&$&');
  // tslint:disable-next-line:no-bitwise
  const rgb: number = (hex as any) | 0;
  // tslint:disable-next-line:no-bitwise
  return [rgb >> 16, (rgb >> 8) & 255, rgb & 255];
};
export default hex2rgb;
