/**
 * 判断当前参数是否为 string
 *
 * @function
 * @memberof Fx
 * @param {Any} obj 任意类型的数据
 * @returns {Boolean}
 * @example
 *
 * // -> true
 * Fx.isString('2019');
 *
 * // -> false
 * Fx.isString(function() {});
 *
 * // -> false
 * Fx.isString(2019);
 */
const isString = (obj: any): boolean => {
  return typeof obj === 'string';
};
export default isString;
