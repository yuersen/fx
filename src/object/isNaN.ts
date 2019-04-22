import isNumber from './isNumber';

/**
 * 判断当前参数是否为 NaN
 *
 * @function
 * @param {*} obj 任意类型的数据
 * @returns {Boolean}
 */
const isNaN = (obj: any): boolean => {
  return isNumber(obj) && obj !== +obj;
};
export default isNaN;
