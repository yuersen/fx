/**
 * 判断当前是否是 Node 节点
 *
 * @function
 * @param  {Node} element 待检测的 DOM
 * @returns {Boolean}
 */
const isNode = (element: Node): boolean => {
  let t: number;
  return (
    element &&
    typeof element === 'object' &&
    (t = element.nodeType) &&
    (t === 1 || t === 9)
  );
};
export default isNode;
