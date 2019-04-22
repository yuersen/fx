import type from './type';

/**
 * 测试对象是否为数组
 *
 * @function
 * @param  {*} o 用于测试是否为数组的对象
 * @return {Boolean}  若是数组对象，返回true
 */
const isArray = (o: any): boolean => {
  return type(o) === 'array';
};

export default isArray;
