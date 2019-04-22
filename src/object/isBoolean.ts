import type from './type';

/**
 * 判断当前参数是否为 Boolean
 *
 * @function
 * @param {*} o 任意类型的数据
 * @returns {Boolean}
 */
const isBoolean = (obj: any): boolean => {
  return obj === true || obj === false || type(obj) === 'boolean';
};
export default isBoolean;
