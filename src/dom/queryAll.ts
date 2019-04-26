/**
 * 返回文档中匹配指定 CSS 选择器的所有元素
 *
 * @function
 * @memberof Fx
 * @param {String} selector CSS 选择器
 * @param {Element} context 检索的上下文
 * @returns {NodeList | null}
 * @example
 *
 * Fx.queryAll('div.container');
 * Fx.queryAll('#container');
 */
const queryAll = (
  selector: string,
  context: Element | Document = document
): NodeList | null => {
  return context.querySelectorAll(selector);
};
export default queryAll;
