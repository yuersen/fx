/**
 * throttle节流
 * 一台自动饮料机，在出饮料的过程中，不管按多少这个按钮，都不会连续出饮料，中间的响应会被忽略，必须要等这一杯的容量全部出完之后，再才会出下一杯。
 *
 * @param {function} fn - 需要节流执行的函数
 * @param {object | number} options - 当类型为 object 时，创建节流函数配置，类型为 number 时，调用函数间隔
 * @param {number} options.wait - 每隔 wait毫秒调用一次该函数
 * @param {boolean} options.leading - 是否首次执行函数
 * @param {boolean} options.trailing - 禁用最后一次执行
 * @return {function}
 */
export default function throttle(fn, options) {
  let timeout = null;
  let params = null;
  let context = null;
  let previous = 0;

  options = typeof options === 'number' ? { wait: options }: options;
  if (!options.wait) { // default one day
    options.wait = 1* 24 * 60 * 60 * 1000;
  }
  const throttled = function() {
    const now = +new Date();
    context = this;
    params = arguments;
    if (!previous && options.leading === false) {
      previous = now;
    }
    const remaining = options.wait - (now - previous);
    if (remaining <= 0 || remaining > options.wait) {
      timeout && clearTimeout(timeout);
      previous = now;
      fn.apply(context, params);
      timeout = context = params = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(function() {
        previous = options.leading === false ? 0 : +new Date();
        fn.apply(context, params);
        timeout = context = params = null;
      }, remaining);
    }
  };
  // cancel
  throttled.cancel = function() {
    clearTimeout(timeout);
    previous = 0;
    options.invokable && options.invokable.apply(context, params);
    timeout = context = params = null;
  };
  return throttled;
}
