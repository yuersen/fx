/**
 * 将字符串中的URL替换成超链
 *
 * @see https://blog.csdn.net/altaba/article/details/78539752?utm_medium=distribute.pc_relevant.none-task-blog-baidujs-1
 * @function
 * @memberof Fx
 * @param {string} str - 包含url的字符串
 * @returns {string}
 */
const replaceUrlToLink = (str: string): string => {
  let matched = {};
  // 1.收集需要替换的URL，并使用随机数替换
  str = str.replace(/((https?|http|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|])/g, (match, capture) => {
    const random = 'XYZ' + String(Math.random()).slice(2);
    matched[random] = capture;
    return match.replace(capture, random);
  });
  // 2.字符串转义
  str = str.replace(/[&<>"'`=\/]/g, capture => {
    return {'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;', '/': '&#x2F;', '`': '&#x60;', '=': '&#x3D;'}[capture];
  });
  // 3.将需要替换的URL还原
  Object.keys(matched).forEach(key => {
    const url = matched[key];
    str = str.replace(key, `<a href="${url}" target="_blank">${url}</a>`);
  });
  return str;
};
export default replaceUrlToLink;
