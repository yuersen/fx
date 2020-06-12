/**
 * 检测当前系统是否是window系统
 *
 * @function
 * @memberof Fx
 * @returns {Boolean}
 * @example
 * 
 * // -> false
 * console.log(Fx.isWindow());
 */
const isWindow = () => {
  return navigator.userAgent.indexOf('Windows) !== -1;
};
export default isWindow;
