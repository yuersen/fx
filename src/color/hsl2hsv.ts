/**
 * HSL 到 HSV的装换
 *
 * @function
 * @param {Number[]} hsl 不表示 HSL 的字符串
 * @returns {Number[]}
 */
const hsl2hsv = (hsl: number[]): number[] => {
  const h = hsl[0];
  let s = hsl[1] / 100;
  let l = hsl[2] / 100;

  let sv;
  let v;

  l *= 2;
  s *= l <= 1 ? l : 2 - l;
  v = (l + s) / 2;
  sv = (2 * s) / (l + s);
  return [h, sv * 100, v * 100];
};
export default hsl2hsv;
