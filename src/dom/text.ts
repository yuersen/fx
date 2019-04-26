/**
 * 获取或设置所有匹配元素的内容
 *
 * @function
 * @memberof Fx
 * @param element 待获取或设置内容的元素
 * @param txt 设置的文本内容
 * @returns {String | Element}
 * @example
 * 
 * const container = document.getElementById('container');
 * // get text
 * const txt = Fx.text(container);
 * 
 * // set text
 * Fx.text(container, 'container');
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
