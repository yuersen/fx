/**
 * debounce防抖
 * 一部电梯停在某一个楼层，当有一个人进来后，20秒后自动关门，这20秒的等待期间，又一个人按了电梯进来，这20秒又重新计算，直到电梯关门那一刻才算是响应了事件。
 *
 * @param {function} fn - 需要节流执行的函数
 * @param {object | number} options - 当类型为 object 时，创建节流函数配置，类型为 number 时，调用函数间隔
 * @param {number} options.wait - 每隔 wait毫秒调用一次该函数
 * @param {boolean} options.leading - 是否首次执行函数
 * @param {boolean} options.trailing - 禁用最后一次执行
 * @return {function}
 */
export default function debounce(fn, options) {
  let timeout = null;
  let params = null;
  let context = null;

  options = typeof options === 'number' ? { wait: options }: options;

  const fnApply = function() {
    fn.apply(context, params);
  };
  const reset = function() {
    timeout = context = params = null;
  };
  const debounced = function() {
    params = arguments;
    context = this;
    if (timeout) {
      clearTimeout(timeout);
    }
    if (options.immediate) {
      const invoked = !timeout;
      timeout = setTimeout(function() {
        fnApply();
        reset();
      }, options.wait);
      invoked && fnApply();
    } else {
      timeout = setTimeout(function() {
        fnApply();
        reset();
      }, options.wait);
    }
  };
  debounced.cancel = function() {
    clearTimeout(timeout);
    reset();
  };
  return debounced;
}
