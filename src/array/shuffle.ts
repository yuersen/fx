/**
 * 打乱数组的顺序，并输出新的数组
 *
 * @function
 * @param  {*[]} arr 被循环遍历的数组
 * @returns {*[]}
 */
const shuffle = (arr: any[]): any[] => {
  const l = arr.length;
  const shuffled = new Array(l);

  for (let i = 0; i < l; i++) {
    const rand = Math.floor(Math.random() * i);

    if (rand !== i) {
      shuffled[i] = shuffled[rand];
    }
    shuffled[rand] = arr[i];
  }
  return shuffled;
};

export default shuffle;
