/**
 * 判断当前参数是否为 undefined
 *
 * @function
 * @memberof Fx
 * @param {Any} obj 任意类型的数据
 * @returns {Boolean}
 * @example
 *
 * // -> true
 * Fx.isUndefined(undefined);
 *
 * // -> false
 * Fx.isUndefined(function() {});
 *
 * // -> false
 * Fx.isUndefined(2019);
 */
const isUndefined = (obj: any): boolean => {
  return obj === void 0;
};
export default isUndefined;
