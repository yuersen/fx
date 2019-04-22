/**
 * 给定 HSL 空间中的 (h, s, l) 值定义的一个颜色，带有 h 在指示色相角度的值域 [0, 360）中，分别表示饱和度和亮度的s 和 l 在值域 [0, 1] 中，相应在 RGB 空间中的 (r, g, b) 三原色，
 * 带有分别对应于红色、绿色和蓝色的 r, g 和 b 也在值域 [0, 1] 中.
 *
 * @function
 * @param {Number[]} hsl 表示 HSL 的数组
 * @returns {Number[]}
 */
const hsl2rgb = (hsl: number[]): number[] => {
  const h = hsl[0] / 360;
  const s = hsl[1] / 100;
  const l = hsl[2] / 100;
  let rgb = [];
  let val;

  if (s === 0) {
    val = l * 255;
    return [val, val, val];
  }

  const t2 = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const t1 = 2 * l - t2;

  rgb = [0, 0, 0];
  for (let i = 0; i < 3; i++) {
    let t3 = h + (1 / 3) * -(i - 1);
    if (t3 < 0) {
      t3++;
    }
    if (t3 > 1) {
      t3--;
    }

    if (6 * t3 < 1) {
      val = t1 + (t2 - t1) * 6 * t3;
    } else if (2 * t3 < 1) {
      val = t2;
    } else if (3 * t3 < 2) {
      val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
    } else {
      val = t1;
    }

    rgb[i] = Math.round(val * 255 * 100) / 100;
  }
  return rgb;
};
export default hsl2rgb;
