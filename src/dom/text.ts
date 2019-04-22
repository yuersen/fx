/**
 * 获取或设置所有匹配元素的内容
 *
 * @function
 * @param element 待获取或设置内容的元素
 * @param txt 设置的文本内容
 * @returns {String | Element}
 */
interface Element {
  innerText: any;
  textContent: any;
}
const text = (element: Element, txt?: string): string | Element => {
  if (txt === void 0) {
    return element.innerText || element.textContent;
  }
  try {
    element.innerText = txt;
  } catch (error) {
    element.textContent = txt;
  }
  return element;
};
export default text;
