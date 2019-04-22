import hasClassName from './hasClassName';
import addClassName from './addClassName';
import removeClassName from './removeClassName';

/**
 * 在元素中切换类名。
 *
 * @function
 * @param {Element} element 待检测 className 的 DOM
 * @param {String} className className 类名
 * @returns {Element}
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
