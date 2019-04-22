/**
 * 获取所有的 className
 *
 * @function
 * @param element 获取的 className 的 DOM
 * @returns {String[]} 返回包含所有 className 的数组
 */
const getClassName = (element: Element): string[] => {
  return element.className.match(/\S+/g) || [];
};

export default getClassName;
