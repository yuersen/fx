/**
 * 判断指定Element是否正在滚动
 *
 * @function
 * @memberof Fx
 * @param {Element} elem - 待操作的元素
 * @param {Function} scrolling - 滚动中回调函数
 * @param {Function} afterScrolling - 滚动结束回调函数
 * @example
 *
 * Fx.bindScroll(elem, function scrolling() {}, function afterScrolling() {});
 */
 
const bindScroll = (elem: Element, scrolling: () => void, afterScrolling: () => void): void => {
  let currentScrollTop = null;
  let interval = null;
  elem.addEventListener('scroll', function scroll() {
    if (!interval) {
      interval = setInterval(function() {
        if (elem.scrollTop === currentScrollTop) {
          afterScrolling && afterScrolling();
          clearInterval(interval);
          return (interval = null);
        }
      });
    }
    scrolling && scrolling();
    currentScrollTop = elem.scrollTop;
  })
};
export default bindScroll;
