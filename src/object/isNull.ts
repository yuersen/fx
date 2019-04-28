/**
 * 判断当前参数是否为 null
 *
 * @function
 * @memberof Fx
 * @param {Any} o 任意类型的数据
 * @returns {Boolean}
 * @example
 *
 * // -> true
 * Fx.isNull(null);
 *
 * // -> false
 * Fx.isNull({});
 *
 * // -> false
 * Fx.isNull(2019);
 */
const isNull = (o: any): boolean => {
  return null === o;
};

export default isNull;
