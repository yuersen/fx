import isNumber from './isNumber';

/**
 * 判断当前参数是否为 NaN，通常用于检测 parseFloat() 和 parseInt() 的结果，以判断它们表示的是否是合法的数字。
 *
 * @function
 * @memberof Fx
 * @param {Any} obj 任意类型的数据
 * @returns {Boolean}
 * @example
 * 
 * // -> true
 * Fx.isNaN(parseInt('Fx'));
 *
 * // -> false
 * Fx.isNaN({});
 *
 * // -> false
 * Fx.isNaN(2019);
 */
const isNaN = (obj: any): boolean => {
  return isNumber(obj) && obj !== +obj;
};
export default isNaN;
