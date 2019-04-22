import type from './type';

/**
 * 判断当前参数是否为 Date
 *
 * @function
 * @param {*} o 任意类型的数据
 * @returns {Boolean}
 */
const isDate = (obj: any): boolean => {
  return type(obj) === 'date';
};

export default isDate;
