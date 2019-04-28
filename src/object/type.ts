/**
 * 输出当前参数类型
 *
 * @function
 * @memberof Fx
 * @param {Any} o 合法的javascript数据类型
 * @returns {String}
 * @example
 *
 * // -> string
 * Fx.type('2019');
 * // -> array
 * Fx.type([]);
 * // -> object
 * Fx.type({});
 * // -> boolean
 * Fx.type(true);
 * // -> number
 * Fx.type(2019);
 * // -> function
 * Fx.type(function test() {});
 * // -> date
 * Fx.type(new Date());
 * // -> regexp
 * Fx.type(new RegExp('fx'));
 * // -> null
 * Fx.type(null);
 * // -> undefined
 * Fx.type(undefined);
 */
const type = (obj: any): string => {
  return {}.toString
    .call(obj)
    .toLowerCase()
    .replace(/\[|\]/g, '')
    .substring(7);
};
export default type;
