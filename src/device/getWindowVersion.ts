/**
 * 获取window系统版本
 *
 * @function
 * @memberof Fx
 * @returns {number}
 * @example
 * 
 * // -> 10
 * console.log(Fx.getWindowVersion());
 */
const getWindowVersion = () => {
  const mapping = {
    'NT 5.1': 'XP',
    'NT 5.2': 'XP',
    'NT 6.0': 'Vista',
    'NT 6.1': '7',
    'NT 6.2': '8',
    'NT 6.3': '8.1',
    'NT 6.4': '10',
    'NT 10.0': '10'
  };
  const match = /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i.exec(navigator.userAgent);
  return mapping[match[2]] || 0;
};
export default getWindowVersion;
