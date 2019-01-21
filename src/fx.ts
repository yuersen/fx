import StringUtil from './string';

/**
 * 基类方法
 * @param {any} param - 待处理合法的 javascript 数据类型
 */
export default function Fx(param: any) {
  return new Fx.prototype.init(param);
}
Fx.prototype = {
  constructor: Fx,
  version: '1.0.0',
  init(param: any) {
    if (!param) {
      return this;
    }
    switch (Fx.type(param)) {
      case 'string':
        return new StringUtil(param);
    }
  }
};

/**
 * 输出当前参数类型
 * @param {any} o 合法的javascript数据类型
 * @returns {string}
 */
Fx.type = (o: any): string => {
  return {}.toString
    .call(o)
    .toLowerCase()
    .replace(/\[|\]/g, '')
    .substring(7);
};

/**
 * 判断当前对象是否是 Arguments
 * @param {any} o - 待检测的 object
 * @returns {boolean}
 */
Fx.isArguments = (o: any): boolean => {
  return {}.hasOwnProperty.call(o, 'callee');
};

/**
 * 判断当前参数是否为 Boolean
 * @param {any} o 任意类型的数据
 * @returns {boolean}
 */
Fx.isBoolean = (o: any): boolean => {
  return o === true || o === false || Fx.type(o) === 'boolean';
};

/**
 * 判断当前参数是否为 Date
 * @param {any} o 任意类型的数据
 * @returns {boolean}
 */
Fx.isDate = (o: any): boolean => {
  return Fx.type(o) === 'date';
};

/**
 * 判断当前参数是否为 Element
 * @param {any} o 任意类型的数据
 * @returns {boolean}
 */
Fx.isElement = (o: any): boolean => {
  return !!(o && o.nodeType === 1);
};

/**
 * 测试对象是否为函数
 * @param  {any}  o 任意类型的数据
 * @returns {boolean}
 */
Fx.isFunction = (o: any): boolean => {
  return Fx.type(o) === 'function';
};

/**
 * 判断当前参数是否为 number
 * @param {any} o  任意类型的数据
 * @returns {boolean}  如果 param 是 number，返回 true
 */
Fx.isNumber = (o: any): boolean => {
  return typeof o === 'number';
};

/**
 * 判断当前参数是否为 NaN
 * @param {any} o 任意类型的数据
 * @returns {boolean}
 */
Fx.isNaN = (o: any): boolean => {
  return Fx.isNumber(o) && o !== +o;
};

/**
 * 判断当前参数是否为 null
 * @param {any} o 任意类型的数据
 * @returns {boolean}
 */
Fx.isNull = (o: any): boolean => {
  return null === o;
};

/**
 * 如果 object 是一个对象，返回 true,
 * 需要注意的是 JavaScript 数组和函数是对象，字符串和数字不是.
 * @param {Object} o 待处理对象
 * @returns {boolean}
 */
Fx.isObject = (o: any): boolean => {
  const type = typeof o;
  return type === 'function' || (type === 'object' && !!o);
};

/**
 * 判断当前参数是否为 RegExp
 * @param {any} o 任意类型的数据
 * @returns {boo}
 */
Fx.isRegExp = (o: any): boolean => {
  return Fx.type(o) === 'regexp';
};

/**
 * 判断当前参数是否为 string
 * @param {any} o 任意类型的数据
 * @returns {boolean}  如果 param 是 string，返回 true
 */
Fx.isString = (o: any): boolean => {
  return typeof o === 'string';
};

/**
 * 判断当前参数是否为 undefined
 * @param {any} o 任意类型的数据
 * @returns {boolean}
 */
Fx.isUndefined = (o: any): boolean => {
  return o === void 0;
};

/**
 * 测试对象是否是窗口（有可能是Frame）
 * @param  {any} o 用于测试是否为窗口的对象
 * @returns {boolean}  若是窗口对象，返回true
 */
Fx.isWindow = (o: any): boolean => {
  return o != null && o === o.window;
};

/**
 * 测试对象是否为数组
 * @param  {any} param - 用于测试是否为数组的对象
 * @return {boolean}  若是数组对象，返回true
 */
Fx.isArray = (o: any): boolean => {
  return Fx.type(o) === 'array';
};

/**
 * 判断当前集合是否是伪数组
 * @param {any} o - 待检测对象
 * @returns {boolean}  若是伪数组，返回true
 */
Fx.isArrayLike = (o: any[]): boolean => {
  const l = o.length;
  return typeof l === 'number' && l >= 0 && l <= Math.pow(2, 53) - 1;
};

/**
 * 生成随机的GUID
 * @see https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
 * @return {string}
 */
Fx.guid = (): string => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};
