/**
 * HTML片段编码转义
 *
 * @function
 * @param {String} str 待转义的字符串
 * @returns {String}
 */
const decodeHtml = (str: string): string => {
  const escapeMap: { [key: string]: string } = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#39;': "'",
    '&#x2F;': '/',
    '&#x60;': '`',
    '&#x3D;': '='
  };
  return str.replace(
    /(&amp;|&lt;|&gt;|&quot;|&#39;|&#x2F;|&#x60;|&#x3D;)/g,
    (caputer: string) => {
      return escapeMap[caputer];
    }
  );
};
export default decodeHtml;
