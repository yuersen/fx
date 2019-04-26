import recursivelyCollect from './recursivelyCollect';

/**
 * 收集元素之后的所有同级，并将它们作为元素数组返回。
 *
 * @function
 * @memberof Fx
 * @param {Element} element 待收集所有之后的同级节点的元素
 * @returns {Element[]}
 * @example
 * // <ul>
 * //   <li class="name">name</li>
 * //   <li class="age">age</li>
 * //   <li class="sex">sex</li>
 * // </ul>
 * // -> [HTMLLIElement {}, HTMLLIElement {}]
 * console.log(Fx.next(document.querySelector('li.name')));
 */
const next = (element: Element): Element[] => {
  return recursivelyCollect(element, 'nextSibling');
};
export default next;
