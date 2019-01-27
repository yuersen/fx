/**
 * @file 数组操作
 */
export default class ArrayUtil {
  private length: number;
  constructor(public arr: any[]) {
    this.arr = arr;
    this.length = arr.length;
  }

  /**
   * 测试数组的所有元素是否都通过了指定函数的测试
   * @param  {Function} callback - 用来测试每个元素的函数
   * @param  {Object} thisArg - 执行 callback 时使用的 this 值
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
   * @return {Boolean} 满足函数返回true
   */
  every(
    handler: (item: any, i: number, arr: any[]) => boolean,
    thisArg?: any
  ): boolean {
    return this.decorate((cb, that) => {
      const arr = this.arr;
      for (let i = 0; i < this.length; i++) {
        if (i in arr && !cb.call(that, arr[i], i, arr)) {
          return false;
        }
      }
      return true;
    }).call(this, handler, thisArg);
  }

  /**
   * 创建一个新数组, 其包含通过所提供函数实现的测试的所有元素
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
   * @param {Function} callback - 用来测试数组的每个元素的函数。调用时使用参数 (element, index, array)
   * @param {Object} thisArg - 执行 callback 时使用的 this 值
   * @return {Array}
   */
  filter(
    callback: (item: any, i: number, arr: any[]) => boolean,
    thisArg?: any
  ): any[] {
    return this.decorate((cb, that) => {
      const arr = this.arr;
      const result = [];

      for (let i = 0; i < this.length; i++) {
        if (i in arr && cb.call(that, arr[i], i, arr)) {
          result.push(arr[i]);
        }
      }
      return result;
    }).call(this, callback, thisArg);
  }

  /**
   * forEach 方法按升序为数组中含有效值的每一项执行一次callback 函数，
   * 那些已删除（使用delete方法等情况）或者未初始化的项将被跳过。
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
   * @param {Array} arr - 待操作的数组
   * @param {Function} callback - 用来测试数组的每个元素的函数。调用时使用参数 (element, index, array)
   * @param {Object} thisArg - 执行 callback 时使用的 this 值
   */
  forEach(
    callback: (item: any, i: number, arr: any[]) => boolean,
    thisArg?: any
  ): void {
    return this.decorate((cb, that) => {
      const arr = this.arr;

      for (let i = 0; i < this.length; i++) {
        if (i in arr && cb.call(that, arr[i], i, arr)) {
          return; // 回调返回 false 结束循环
        }
      }
    }).call(this, callback, thisArg);
  }

  /**
   * 测试数组中的某些元素是否通过由提供的函数实现的测试
   * @param  {Function} callback - 用来测试每个元素的函数, callback(element, index, array)
   * @param  {Object} thisArg - 执行 callback 时使用的 this 值
   * @return {Boolean} 如果回调函数返回任何数组元素的truthy值，则返回true；否则为false
   */
  some(
    callback: (item: any, i: number, arr: any[]) => boolean,
    thisArg?: any
  ): boolean {
    return this.decorate((cb, that) => {
      const arr = this.arr;
      for (let i = 0; i < this.length; i++) {
        if (i in arr && cb.call(that, arr[i], i, arr)) {
          return true;
        }
      }
      return false;
    }).call(this, callback, thisArg);
  }

  /**
   * 给原数组中的每个元素都按顺序调用一次  callback 函数。callback 每次执行后的返回值（包括 undefined）组合起来形成一个新数组。
   * callback 函数只会在有值的索引上被调用；那些从来没被赋过值或者使用 delete 删除的索引则不会被调用。
   * 如果存在原生的map方法，就用原生map方法来代替。如果list是个JavaScript对象，
   * iteratee的参数是(value, key, list)。
   * @param {Function} callback - 生成新数组元素的函数, callback(elememtn, index,)
   * @param {Object} thisArg - 执行 callback 函数时使用的this 值
   * @return {Array} 经过迭代器函数处理list项的新数组
   */
  map(
    callback: (item: any, i: number, arr: any[]) => boolean,
    thisArg?: any
  ): any[] {
    return this.decorate((cb, that) => {
      const arr = this.arr;
      const result = [];

      for (let i = 0; i < this.length; i++) {
        result[i] = cb.call(that, arr[i], i, arr);
      }
      return result;
    }).call(this, callback, thisArg);
  }

  /**
   * 返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined
   * @param {Function} callback - 在数组每一项上执行的函数, callback(element, index, array)
   * @param {Object} thisArg - 可选，指定 callback 的 this 参数
   * @returns {*} 当某个元素通过 callback 的测试时，返回数组中的一个值，否则返回 undefined
   */
  find(
    callback: (item: any, i: number, arr: any[]) => boolean,
    thisArg?: any
  ): any {
    return this.decorate((cb, that) => {
      const arr = this.arr;

      for (let i = 0; i < this.length; i++) {
        if (i in arr && cb.call(that, arr[i], i, arr)) {
          return arr[i];
        }
      }
      return void 0;
    }).call(this, callback, thisArg);
  }

  /**
   * 返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1
   * @param  {any} searchElement - 任意类型的待检索的参数
   * @param  {Number|Undefined} formIndex  - 开始检索位置
   * @return {Number} 如果没找到匹配的则返回 -1
   */
  indexOf(search: any, start?: number): number {
    const l = this.length;
    let idx = start || 0;

    if (l === 0 || idx >= l) {
      return -1;
    }
    idx = Math.max(idx >= 0 ? idx : l - Math.abs(idx), 0);

    for (; idx < l; idx++) {
      if (this.arr[idx] === search) {
        return idx;
      }
    }
    return -1;
  }

  /**
   * 返回指定元素（也即有效的 JavaScript 值或变量）在数组中的最后一个的索引，如果不存在则返回 -1
   * @param  {any} searchElement - 任意类型的待检索的参数
   * @param  {Number|Undefined} formIndex  - 开始检索位置
   * @return {Number} 如果没找到匹配的则返回 -1
   */
  lastIndexOf(search: any, start?: number): number {
    const l = this.length;
    let idx = start || l - 1;

    if (l === 0 || idx >= l) {
      return -1;
    }
    idx = Math.max(idx >= 0 ? idx : l + idx, 0);
    for (; idx >= 0; idx--) {
      if (this.arr[idx] === search) {
        return idx;
      }
    }
    return -1;
  }

  /**
   * 移除数组中重复的元素
   * @return {Array}
   */
  unique(): any[] {
    const tmp: { [key: string]: boolean } = {};
    const result = [];

    for (let i = 0; i < this.length; i++) {
      const item = this.arr[i];
      const key = {}.toString.call(item) + item;
      if (!tmp[key]) {
        tmp[key] = true;
        result.push(item);
      }
    }
    return result;
  }

  /**
   * 打乱数组的顺序，并输出新的数组
   * @return {Array}
   */
  shuffle(): any[] {
    const shuffled = new Array(this.length);

    for (let i = 0; i < this.length; i++) {
      const rand = Math.floor(Math.random() * i);

      if (rand !== i) {
        shuffled[i] = shuffled[rand];
      }
      shuffled[rand] = this.arr[i];
    }
    return shuffled;
  }

  /**
   * 判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回false
   * @param {*} searchElement - 需要查找的元素值
   * @param {Number|Undefined} fromIndex - 从该索引处开始查找 searchElement,默认为 0
   * @returns {Boolean}
   */
  includes(search: any, start?: number): boolean {
    const l = this.length;
    let idx = start || 0;

    if (!l) {
      return false;
    }
    idx = Math.max(idx >= 0 ? idx : l - Math.abs(idx), 0);
    while (idx < l) {
      if (this.arr[idx] === search) {
        return true;
      }
      idx++;
    }
    return false;
  }

  /**
   * 克隆数组
   * @returns {Array}
   */
  clone(): any[] {
    return [].slice.call(this.arr, 0);
  }

  /**
   * 装饰器
   * @param fn 数组操作方法
   */
  private decorate(
    fn: (
      callback: (item: any, idx: number, arr: any[]) => any,
      thisArg: any
    ) => any
  ) {
    const that = this;
    return (
      callback: (item: any, idx: number, arr: any[]) => any,
      thisArg: any
    ) => {
      if (typeof callback !== 'function') {
        throw new TypeError('The callback must be a function.');
      }
      return fn.call(that, callback, thisArg);
    };
  }
}
