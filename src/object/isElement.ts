/**
 * 判断当前参数是否为 Element
 *
 * @function
 * @param {*} obj 任意类型的数据
 * @returns {Boolean}
 */
const isElement = (obj: any): boolean => {
  return !!(obj && obj.nodeType === 1);
};
export default isElement;
