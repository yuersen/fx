/**
 * 用另一个字符串填充当前字符串(重复，如果需要的话)，以便产生的字符串达到给定的长度。
 *
 * @function
 * @param {String} str 待操作的字符串
 * @param {Number} targetLength 当前字符串需要填充到的目标长度
 * @param {String} padString? 填充字符串
 * @returns {String}
 */
const padStart = (
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
  return padString.slice(0, targetLength) + str;
};
export default padStart;
