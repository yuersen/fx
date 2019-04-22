/**
 * 判断指定的类名是否存在
 *
 * @function
 * @param {Element} element 待检测 className 的 DOM
 * @param {String} className className 类名
 * @returns {Boolean}  返回 true 元素包已经包含了该类名
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
