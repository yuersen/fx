/**
 * 返回文档中匹配指定 CSS 选择器的所有元素，返回 NodeList 对象。
 *
 * @function
 * @param {String} selector CSS 选择器
 * @param {Element} context 检索的上下文
 * @returns {NodeList}
 */
const querySelectorAll = (selector: string, context?: Element): NodeList => {
  return (context || document).querySelectorAll(selector);
};
export default querySelectorAll;
