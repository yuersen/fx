import type from './type';

/**
 * 判断当前参数是否为 Date
 *
 * @function
 * @memberof Fx
 * @param {Any} obj 任意类型的数据
 * @returns {Boolean}
 * @example
 *
 * // -> true
 * Fx.isDate(new Date());
 *
 * // -> false
 * Fx.isDate({});
 *
 * // -> false
 * Fx.isDate(2019);
 */
const isDate = (obj: any): boolean => {
  return type(obj) === 'date';
};

export default isDate;
