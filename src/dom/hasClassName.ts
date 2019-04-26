/**
 * 判断指定的类名是否存在
 *
 * @function
 * @memberof Fx
 * @param {element} element 待检测 className 的 DOM
 * @param {string} className className 类名
 * @returns {boolean}  返回 true 元素包已经包含了该类名
 * 
 * @example
 * 
 * const wrap = document.getElementById('wrap');
 * 
 * // -> false
 * console.log(Fx.hasClassName(wrap, 'Fx'));
 * 
 * // -> true
 * console.log(Fx.hasClassName(wrap, 'wrap'));
 */
const hasClassName = (element: Element, className: string): boolean => {
  const elementClassName = element.className;
  return (
    elementClassName.length > 0 &&
    (elementClassName === className ||
      new RegExp('(^|\\s)' + className + '(\\s|$)').test(elementClassName))
  );
};

export default hasClassName;
