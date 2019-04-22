/**
 * 生成随机的GUID
 *
 * @function
 * @see https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
 * @returns {String}
 */
const guid = (): string => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    // tslint:disable-next-line
    const r = (Math.random() * 16) | 0;
    // tslint:disable-next-line
    const v = c === 'x' ? r : (r & 0x3) | 0x8; // tslint:disable-line
    return v.toString(16);
  });
};

export default guid;
