/**
 * 判断当前参数是否为 number
 *
 * @function
 * @param {*} obj  任意类型的数据
 * @returns {Boolean}  如果 param 是 number，返回 true
 */
const isNumber = (obj: any): boolean => {
  return typeof obj === 'number';
};
export default isNumber;
