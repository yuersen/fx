import recursivelyCollect from './recursivelyCollect';

/**
 * 收集元素的所有祖先元素，并将其作为扩展元素数组返回。
 *
 * @function
 * @param {Element} element 待收集祖先节点的元素
 * @returns {Element[]}
 */
const ancestors = (element: Element): Element[] => {
  return recursivelyCollect(element, 'parentNode');
};
export default ancestors;
