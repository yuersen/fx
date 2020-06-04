/**
 * 返回的是一个布尔值，来表示传入的节点是否为该节点的后代节点
 *
 * @function
 * @memberof Fx
 * @param {Element} node - 父节点
 * @param {Element} subnode - 待检测的子节点
 * @returns {boolean}
 * @example
 *
 * // -> true/false
 * Fx.contains(node, subnode);
 *
 */
const contains = (node: Element, subnode: Element): boolean => {
  return node.contains(subnode);
};
export default contains;
