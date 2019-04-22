import recursivelyCollect from './recursivelyCollect';

/**
 * 收集元素之前的所有同级，并将它们作为元素数组返回。
 * @param {Element} element 待收集所有之前的同级节点的元素
 * @returns {Element[]}
 */
const previousSiblings = (element: Element): Element[] => {
  return recursivelyCollect(element, 'previousSibling');
};
export default previousSiblings;
