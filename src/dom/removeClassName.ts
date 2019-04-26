/**
 * 移除元素中一个类名
 *
 * @function
 * @memberof Fx
 * @param {Element} element 待检测 className 的 DOM
 * @param {String} className className 类名
 * @param {Element}
 * @example
 *
 * const container = document.getElementById('container');
 * Fx.removeClassName(container, 'selected');
 */
const removeClassName = (element: Element, className: string): Element => {
  element.className = element.className.replace(
    new RegExp('(^|\\s+)' + className + '(\\s+|$)'),
    ' '
  );
  return element;
};

export default removeClassName;
