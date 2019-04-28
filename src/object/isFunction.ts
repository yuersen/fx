import type from './type';
/**
 * 检测当前参数是否为函数
 *
 * @function
 * @memberof Fx
 * @param  {Any} obj 任意类型的数据
 * @returns {Boolean}
 * @example
 *
 * // -> true
 * Fx.isFunction(function test() {});
 *
 * // -> false
 * Fx.isFunction({});
 *
 * // -> false
 * Fx.isFunction(2019);
 */
const isFunction = (obj: any): boolean => {
  return type(obj) === 'function';
};
export default isFunction;
