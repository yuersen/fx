import type from './type';

/**
 * 测试对象是否为数组
 *
 * @function
 * @memberof Fx
 * @param  {Any} obj 用于测试是否为数组的对象
 * @return {Boolean}  若是数组对象，返回true
 * @example
 *
 * // -> true
 * Fx.isArray([]);
 *
 * // -> false
 * Fx.isArray(1);
 *
 * // -> false
 * Fx.isArray({})
 */
const isArray = (o: any): boolean => {
  return type(o) === 'array';
};

export default isArray;
