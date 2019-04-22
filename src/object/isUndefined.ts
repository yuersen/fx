/**
 * 判断当前参数是否为 undefined
 *
 * @function
 * @param {*} obj 任意类型的数据
 * @returns {Boolean}
 */
const isUndefined = (obj: any): boolean => {
  return obj === void 0;
};
export default isUndefined;
