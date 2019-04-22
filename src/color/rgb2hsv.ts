/**
 * RGB 转化 HSV
 * h 的值通常规范化到位于 0 到 360°之间。而 h = 0 用于 max = min 的（就是灰色）时候而不是留下 h 未定义。
 * HSL 和 HSV 有同样的色相定义，但是其他分量不同。HSV 颜色的 s 和 v 的值定义如下：
 * s = 0, if max = 0
 * s = (max - min) / max = 1- min / max, toherwise
 * v = max
 * @param rgb
 */
const rgb2hsv = (rgb: number[]): number[] => {
  const r = rgb[0];
  const g = rgb[1];
  const b = rgb[2];
  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);
  const delta = max - min;

  let h;
  let s;
  let v;

  if (max === 0) {
    s = 0;
  } else {
    s = ((delta / max) * 1000) / 10;
  }

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

  v = ((max / 255) * 1000) / 10;
  return [
    Math.round(h * 100) / 100,
    Math.round(s * 100) / 100,
    Math.round(v * 100) / 100
  ];
};

export default rgb2hsv;
