/**
 * 以数组形式，返回所有的 className
 *
 * @function
 * @memberof Fx
 * @param {element} element 获取的 className 的 DOM
 * @returns {string[]} 返回包含所有 className 的数组
 * @example
 * 
 * const wrap = document.getElementById('wrap');
 * 
 * // -> [wrap, fx]
 * console.log(Fx.getClassName(wrap));
 */
const getClassName = (element: Element): string[] => {
  return element.className.match(/\S+/g) || [];
};

export default getClassName;
