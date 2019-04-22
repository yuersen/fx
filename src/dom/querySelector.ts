/**
 * 返回文档中匹配指定 CSS 选择器的所有元素。
 *
 * @function
 * @param {String} selector CSS 选择器
 * @param {Element} context 检索的上下文
 * @returns {NodeList}
 */
const querySelector = (selector: string, context?: Element): Element => {
  return (context || document).querySelector(selector);
};
export default querySelector;
