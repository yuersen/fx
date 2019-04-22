/**
 * 递归地收集与属性指定的元素关系的元素
 *
 * @function
 * @param {Element} element 待递归地收集与属性指定的元素
 * @param {String} property 属性名称
 * @param {Number} maximumLength 最大的递归次数
 * @param {Node[]}
 */
const recursivelyCollect = (
  element: Element,
  property: string,
  maximumLength: number = -1
): Element[] => {
  const elements = [];

  // tslint:disable-next-line:no-conditional-assignment
  while ((element = (element as any)[property])) {
    if (element.nodeType === 1) {
      elements.push(element);
    }
    if (elements.length === maximumLength) {
      break;
    }
  }

  return elements;
};

export default recursivelyCollect;
