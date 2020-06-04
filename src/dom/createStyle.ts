/**
 * 创建 style 标签
 *
 * @function
 * @memberof Fx
 * @param {string} cssText - CSS 片段
 * @example
 *
 * Fx.createStyle(`.container { width: 100%; background: pink;}`)
 */
const createStyle = (cssText: string): void => {
 const style = document.createElement('style');
 style.setAttribute('type', 'text/css');
 
 if (style.styleSheet) { // IE
   style.styleSheet.cssText = cssText;
 } else { // W3C
    const textNode = document.createTextNode(cssText);
    style.appendChild(textNode);
 }
 const heads = document.getElementsByTagName('head');
 if (heads.length) {
   heads[0].appendChild(style);
 } else {
   document.documentElement.appendChild(style);
 }
};
export default createStyle;
