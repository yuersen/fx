/**
 * 创建一个会缓存 func 结果的函数,如果提供了 resolver ，就用 resolver 的返回值作为 key 缓存函数的结果。
 *
 * @function
 * @memberof Fx
 * @see https://en.wikipedia.org/wiki/Memoization
 * @param {function} func 需要缓存化的函数
 * @param {function} resolver 返回值作为缓存的 key
 * @returns {function}
 * @example
 *
 * const add = Fx.memoize((x, y) => {
 *  return x + y;
 * });
 * add(1, 2);
 */
const memoize = (
  func: (...args: any[]) => any,
  resolver?: (...args: any[]) => any
): (() => any) => {
  if (typeof func !== 'function') {
    throw new TypeError('Expected a function');
  }

  const memoized = (...args: any[]): any => {
    const key = '' + (resolver ? resolver.apply(this, args) : args[0]);
    const cache: any = memoized.cache;

    if (cache.hasOwnProperty(key)) {
      return cache[key];
    }
    const result = func.apply(this, args);
    cache[key] = result;
    return result;
  };

  memoized.cache = {};
  return memoized;
};

export default memoize;
