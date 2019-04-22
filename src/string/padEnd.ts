/**
 * 用一个字符串填充当前字符串（如果需要的话则重复填充），返回填充后达到指定长度的字符串。从当前字符串的末尾（右侧）开始填充。
 *
 * @function
 * @param {String} str 待操作的字符串
 * @param {Number} targetLength 增加长度
 * @param {String} padString? 填充字符串
 * @returns {String}
 */
const padEnd = (
  str: string,
  targetLength: number,
  padString?: string
): string => {
  const length = str.length;
  // floor if number or convert non-number to 0;
  if (!padString) {
    return str;
  }

  if (length > targetLength) {
    return str;
  }
  targetLength = targetLength - length;
  if (targetLength > padString.length) {
    // append to original to ensure we are longer than needed
    padString += new Array(Math.floor(targetLength / padString.length)).join(
      padString
    );
  }
  return str + padString.slice(0, targetLength);
};

export default padEnd;
