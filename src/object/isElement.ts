/**
 * 判断当前参数是否为 Element
 *
 * @function
 * @memberof Fx
 * @param {Any} obj 任意类型的数据
 * @returns {Boolean}
 * @example
 * 
 * // -> true
 * Fx.isElement(document.querySelector('#app'));
 *
 * // -> false
 * Fx.isElement({});
 *
 * // -> false
 * Fx.isElement(2019);
 */
const isElement = (obj: any): boolean => {
  return !!(obj && obj.nodeType === 1);
};
export default isElement;
