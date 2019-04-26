/**
 * 对Date的扩展，将 Date 转化为指定格式的String
 * 月(M)、日(d)、12小时(h)、24小时(H)、分(m)、秒(s)、周(E)、季度(q) 可以用 1-2 个占位符
 * 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
 *
 * @function
 * @memberof Fx
 * @param {Date} date 待操作的 Date 对象
 * @param {String} format 指定格式化的字符串
 * @returns {String}
 * @example
 *
 * const current = new Date('2020/10/06 10:10:10');
 * // -> 2020-10-06 10:10:10'
 * console.log(Fx.formatDate(current, 'yyyy-MM-dd HH:mm:ss'));
 * // -> 2020年10月06日 10时10分10秒
 * console.log(Fx.formatDate(current, 'yyyy年MM月dd日 hh时mm分ss秒'));
 */
const formatDate = (
  date: Date,
  format: string = 'yyyy-MM-dd HH:mm:ss'
): string => {
  const o: { [key: string]: number } = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours() % 12 === 0 ? 12 : date.getHours() % 12, // 小时
    'H+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    S: date.getMilliseconds() // 毫秒
  };
  if (/(y+)/.test(format)) {
    format = format.replace(
      RegExp.$1,
      (date.getFullYear() + '').substr(4 - RegExp.$1.length)
    );
  }

  for (const k in o) {
    if (new RegExp('(' + k + ')').test(format)) {
      const temp = o[k] + '';
      format = format.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? temp : ('00' + temp).substr(temp.length)
      );
    }
  }
  return format;
};
export default formatDate;
