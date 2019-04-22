import type from './type';
/**
 * 检测当前参数是否为函数
 *
 * @function
 * @param  {*} obj 任意类型的数据
 * @returns {Boolean}
 */
const isFunction = (obj: any): boolean => {
  return type(obj) === 'function';
};
export default isFunction;