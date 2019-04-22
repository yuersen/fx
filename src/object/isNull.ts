/**
 * 判断当前参数是否为 null
 *
 * @function
 * @param {*} o 任意类型的数据
 * @returns {Boolean}
 */
const isNull = (o: any): boolean => {
  return null === o;
};

export default isNull;
