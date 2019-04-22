import previousSiblings from './previousSiblings';
import nextSiblings from './nextSiblings';

/**
 * 收集元素所有同级，并将它们作为元素数组返回。
 *
 * @function
 * @param {Element} element 待收集所有同级节点的元素
 * @returns {Element[]}
 */
const siblings = (element: Element): Element[] => {
  return previousSiblings(element)
    .reverse()
    .concat(nextSiblings(element));
};
export default siblings;
