import hasClassName from './hasClassName';
import addClassName from './addClassName';
import removeClassName from './removeClassName';

/**
 * 在元素上切换类名。
 *
 * @function
 * @memberof Fx
 * @param {element} element 待检测 className 的 DOM
 * @param {string} className className 类名
 * @returns {element}
 * @example
 * 
 * const wrap = document.getElementById('wrap');
 * Fx.toggleClassName(wrap, 'selected');
 */
const toggleClassName = (element: Element, className: string): Element => {
  if (hasClassName(element, className)) {
    removeClassName(element, className);
  } else {
    addClassName(element, className);
  }
  return element;
};
export default toggleClassName;
