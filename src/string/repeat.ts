/**
 * 返回一个新字符串，该字符串包含被连接在一起的指定数量的字符串的副本
 *
 * @function
 * @memberof Fx
 * @param {String} str 待重复字符串
 * @param {Number} count 介于0和正无穷大之间的整数 : [0, +∞) 。表示在新构造的字符串中重复的次数。
 * @returns {String}
 * @example
 *
 * // -> fxfxfxfx
 * Fx.repeat('fx', 4);
 */
const repeat = (str: string, count: number = 1): string => {
  return new Array(Math.floor(count) + 1).join(str);
};
export default repeat;
