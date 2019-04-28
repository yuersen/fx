/**
 * 如果 object 是一个对象，返回 true
 *
 * @function
 * @memberof Fx
 * @param {Any} obj 待处理对象
 * @returns {Boolean}
 * @example
 *
 * // -> true
 * Fx.isObject({});
 *
 * // -> false
 * Fx.isObject(function() {});
 *
 * // -> false
 * Fx.isObject(2019);
 */
const isObject = (obj: any): boolean => {
  const type = typeof obj;
  return type === 'function' || (type === 'object' && !!obj);
};
export default isObject;
