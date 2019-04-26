import previous from './previous';
import next from './next';

/**
 * 收集元素所有同级，并将它们作为元素数组返回。
 *
 * @function
 * @memberof Fx
 * @param {Element} element 待收集所有同级节点的元素
 * @returns {Element[]}
 * @example
 * // <ul>
 * //   <li class="name">name</li>
 * //   <li class="age">age</li>
 * //   <li class="sex">sex</li>
 * // </ul>
 * // -> [HTMLLIElement {}, HTMLLIElement {}]
 * console.log(Fx.siblings(document.querySelector('li.age')));
 */
const siblings = (element: Element): Element[] => {
  return previous(element)
    .reverse()
    .concat(next(element));
};
export default siblings;
