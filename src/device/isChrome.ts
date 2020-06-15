  
/**
 * 检测当前浏览器是否是Chrome
 *
 * @function
 * @memberof Fx
 * @returns {Boolean}
 * @example
 * 
 * // -> false/true
 * console.log(Fx.isChrome());
 */
const isChrome = () => {
  return navigator.userAgent.indexOf('Chrome) !== -1;
};
export default isChrome;
