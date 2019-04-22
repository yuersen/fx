/**
 * 如果 object 是一个对象，返回 true
 *
 * @function
 * @param {*} obj 待处理对象
 * @returns {Boolean}
 */
const isObject = (obj: any): boolean => {
  const type = typeof obj;
  return type === 'function' || (type === 'object' && !!obj);
};
export default isObject;
