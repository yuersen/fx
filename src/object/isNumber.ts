/**
 * 判断当前参数是否为 number
 *
 * @function
 * @memberof Fx
 * @param {Any} obj  任意类型的数据
 * @returns {Boolean}  如果 param 是 number，返回 true
 * @example
 *
 * // -> true
 * Fx.isNumber(2019);
 *
 * // -> false
 * Fx.isNumber({});
 *
 * // -> false
 * Fx.isNumber(true);
 */
const isNumber = (obj: any): boolean => {
  return typeof obj === 'number';
};
export default isNumber;
