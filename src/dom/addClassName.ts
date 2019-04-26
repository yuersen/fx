import hasClassName from './hasClassName';

/**
 * 在元素中添加一个或多个类名，如果指定的类名已存在，则不会添加
 *
 * @function
 * @memberof Fx
 * @param {Element} element 待检测 className 的 DOM
 * @param {String} className className 类名
 * @returns {Element}
 * @example
 *
 * const wrap = document.getElementById('wrap');
 * Fx.addClassName(wrap, 'fx');
 */
const addClassName = (element: Element, className: string): Element => {
  if (!hasClassName(element, className)) {
    element.className += (element.className ? ' ' : '') + className;
  }
  return element;
};
export default addClassName;
