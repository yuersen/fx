/**
 * 使用洗牌算法打乱数组的顺序，并输出新的数组
 *
 * @function
 * @memberof Fx
 * @see https://bost.ocks.org/mike/shuffle/
 * @see https://en.wikipedia.org/wiki/Fisher-Yates_shuffle
 * @param  {Any[]} arr 待打乱顺序的数组
 * @returns {Any[]}
 * @example
 * 
 * const list = [1, 2, 3, 4];
 * console.log(Fx.shuffle(list));
 * console.log(Fx.shuffle(list));
 */
const shuffle = (arr: any[]): any[] => {
  const length = arr == null ? 0 : arr.length;
  if (!length) {
    return [];
  }
  let index = -1;
  const lastIndex = length - 1;
  const result = [].slice.call(arr);
  while (++index < length) {
    const rand = index + Math.floor(Math.random() * (lastIndex - index + 1));
    const value = result[rand];
    result[rand] = result[index];
    result[index] = value;
  }
  return result;
};
export default shuffle;
