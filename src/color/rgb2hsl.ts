/**
 * Color Convert
 *  RGB 到 HSL转换
 * 设 (r, g, b) 分别是一个颜色的红、绿和蓝坐标，它们的值是在 0 到 1 之间的实数。设 max 等价于 r, g 和 b 中的最大者。设 min 等于这些值中的最小者。
 * 要找到在 HSL 空间中的 (h, s, l) 值，这里的 h ∈ [0, 360）是角度的色相角，而 s, l ∈ [0,1] 是饱和度和亮度，计算为：
 * h = 0, if max = min
 * h = 60 * (g - b) / (max - min) + 0, if max = r and g >= b
 * h = 60 * (g - b) / (max - min) + 360, if max = r and g < b
 * h = 60 * (g - b) / (max - min) + 120, if max = g
 * h = 60 * (g - b) / (max - min) + 240, if max = b
 *
 * l = (max + min) / 2
 *
 * s = 0, if l = 0 or max = min
 * s = (max -min) / (max + min) = (max -min) / 2l, if 0 < l < 1/2
 * s = (max - min) / (2 - (max + min)) = (max - min) / (2 - 2l), if l > 1/2
 *
 * @see http://blog.csdn.net/idfaya/article/details/6770414
 * @see https://github.com/harthur/color-convert/blob/master/conversions.js
 * @function
 * @param {Number[]} rgb 表示 RGB 的数组
 * @returns {Number[]}
 */
const rgb2hsl = (rgb: number[]): number[] => {
  const r = rgb[0] / 255;
  const g = rgb[1] / 255;
  const b = rgb[2] / 255;
  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);
  const delta = max - min;
  let h;
  let s;
  let l;

  if (max === min) {
    h = 0;
  } else if (r === max) {
    h = (g - b) / delta;
  } else if (g === max) {
    h = 2 + (b - r) / delta;
  } else if (b === max) {
    h = 4 + (r - g) / delta;
  }
  h = Math.min(h * 60, 360);
  if (h < 0) {
    h += 360;
  }
  l = (min + max) / 2;

  if (max === min) {
    s = 0;
  } else if (l <= 0.5) {
    s = delta / (max + min);
  } else {
    s = delta / (2 - max - min);
  }

  return [
    Math.round(h * 100) / 100,
    Math.round(s * 100 * 100) / 100,
    Math.round(l * 100 * 100) / 100
  ];
};
export default rgb2hsl;
