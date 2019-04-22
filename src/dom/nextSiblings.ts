import recursivelyCollect from './recursivelyCollect';

/**
 * 收集元素之后的所有同级，并将它们作为元素数组返回。
 *
 * @function
 * @param {Element} element 待收集所有之后的同级节点的元素
 * @returns {Element[]}
 */
const nextSiblings = (element: Element): Element[] => {
  return recursivelyCollect(element, 'nextSibling');
};
export default nextSiblings;
