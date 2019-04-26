/**
 * 返回文档中匹配指定 CSS 选择器的第一个元素
 *
 * @function
 * @memberof Fx
 * @param {String} selector CSS 选择器
 * @param {Element} context 检索的上下文
 * @returns {Element | null}
 * @example
 *
 * Fx.query('div.container');
 * Fx.query('#container');
 */
const query = (
  selector: string,
  context: Element | Document = document
): Element | null => {
  return context.querySelector(selector);
};
export default query;
