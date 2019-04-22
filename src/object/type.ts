/**
 * 输出当前参数类型
 *
 * @function
 * @param {*} o 合法的javascript数据类型
 * @returns {string}
 */
const type = (obj: any): string => {
  return {}.toString
    .call(obj)
    .toLowerCase()
    .replace(/\[|\]/g, '')
    .substring(7);
};
export default type;
