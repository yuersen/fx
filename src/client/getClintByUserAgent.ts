import memoize from '../function/memoize';

/**
 * 获取客户端相关信息
 * 
 * @function
 * @memberof Fx
 * @returns {Object} client 客户端信息
 * @example
 * 
 * console.log(Fx.getClintByUserAgent());
 */
const getClintByUserAgent = memoize(() => {
  const userAgent = window.navigator.userAgent.toLowerCase();
  const userAgentExecCapture: string[] =
    /(chrome)[ \/]([\w.]+)/.exec(userAgent) || // Chrome
    /(firefox)[ \/]([\w.]+)/.exec(userAgent) || // Firefox
    /(webkit)[ \/]([\w.]+)/.exec(userAgent) || // Safari
    /(opera)(?:.*version)?[ \/]([\w.]+)/.exec(userAgent) || // Opera
    /(trident).+rv:(\w.)+/.exec(userAgent) || // IE8+
    /(msie) ([\w.]+)/.exec(userAgent) || // IE6~7
    /(iphone|ipad|ipod)(?:.*version)?[ \/]([\w.]+)/.exec(userAgent) || // Mobile IOS
    /(android)(?:.*version)?[ \/]([\w.]+)/.exec(userAgent) || // Mobile Webkit
    /(bidubrowser|baiduboxapp)[ \/]([\w.]+)/.exec(userAgent) || // 百度浏览器
    /(maxthon)[ \/]([\w.]+)/.exec(userAgent) || // 傲游浏览器
    /(qqbrowser)[ \/]([\w.]+)/.exec(userAgent) || // QQ浏览器
    /(ubrowser)[ \/]([\w.]+)/.exec(userAgent) || // UC浏览器
    [];

  return {
    userAgent,
    browser: userAgentExecCapture[1],
    version: userAgentExecCapture[2]
  };
}, () => {
  return '_client_info'
});
export default getClintByUserAgent;
