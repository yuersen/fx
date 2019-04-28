/**
 * HTML片段编码转义
 *
 * @function
 * @memberof Fx
 * @see https://github.com/janl/mustache.js/blob/master/mustache.js#L60
 * @param {String} str 待转义的字符串
 * @returns {String}
 * @example
 * 
 * // -> '&lt;div&gt;Fx&lt;&#x2F;div&gt;'
 * Fx.encodeHtml('<div>Fx</div>');
 */
const encodeHtml = (str: string): string => {
  const escapeMap: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
    '/': '&#x2F;',
    '`': '&#x60;',
    '=': '&#x3D;'
  };
  return str.replace(/[&<>"'`=\/]/g, (capture: string) => {
    return escapeMap[capture];
  });
};
export default encodeHtml;
