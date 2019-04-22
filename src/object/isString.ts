/**
 * 判断当前参数是否为 string
 *
 * @function
 * @param {*} obj 任意类型的数据
 * @returns {Boolean}
 */
const isString = (obj: any): boolean => {
  return typeof obj === 'string';
};
export default isString;
