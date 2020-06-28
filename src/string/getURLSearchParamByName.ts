/**
 * 解析URL中的参数
 *
 * @function
 * @memberof Fx
 * @param {string} name - 获取参数的名
 * @param {string} url - 待解析的URL
 * @returns {string|null}
 * @example
 *
 * // -> true
 * Fx.getURLSearchParamByName('name');
 * // -> false
 * Fx.checkIdCard('220582197507240885');
 */

const getURLSearchParamByName = (name: string, url?: string): string | null => {
  name = name.replace(/[\[]/, '\\\[').replace(/[\]]/, '\\\]');
  url = url || window.location.href;
  const results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(url);
  return results == null ? null : decodeURIComponent(results[1]);
};
export default getURLSearchParamByName;
