/**
 * 判断字符串中是否包含汉字
 *
 * @function
 * @memberof Fx
 * @param {String} str 待检测字符串
 * @returns {Boolean}
 * @example
 *
 * // -> false
 * Fx.hasChinese('fx');
 *
 * // -> true
 * Fx.hasChinese('您好，Fx');
 */
const hasChinese = (str: string): boolean => {
  // [\u4E00-\u9FA5]表示汉字，[\uFE30-\uFFA0]表示全角
  // patrn=/[\u4E00-\u9FA5]|[\uFE30-\uFFA0]/gi,!patrn.exec(s)
  return /.*[\u4e00-\u9fa5]+.*$/.test(str);
};

export default hasChinese;
