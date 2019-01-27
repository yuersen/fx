/**
 * @file 数组操作
 * @author pxyamos
 */
export default class ArrayUtil {
  arr: any[];
  length: number;
  constructor(arr: any[]) {
    this.arr = arr;
    this.length = arr.length;
  }

  /**
   * 测试数组的所有元素是否都通过了指定函数的测试
   * @param  {(item:any,i:number,arr:any[])=>boolean} callback 用来测试每个元素的函数
   * @param  {any} thisArg? 执行 callback 时使用的 this 值
   * @returns boolean
   */
  every(
    callback: (item: any, i: number, arr: any[]) => boolean,
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
    }).call(this, callback, thisArg);
  }

  /**
   * 测试数组中的某些元素是否通过由提供的函数实现的测试
   * @param  {(item:any,i:number,arr:any[])=>boolean} callback 用来测试每个元素的函数
   * @param  {any} thisArg? 执行 callback 时使用的 this 值
   * @returns boolean 如果回调函数返回任何数组元素的truthy值，则返回true；否则为false
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
   * 创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素
   * @param  {(item:any,i:number,arr:any[])=>boolean} callback 用来测试数组的每个元素的函数
   * @param  {any} thisArg? 执行 callback 时使用的 this 值
   * @returns any
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
   * forEach 方法按升序为数组中含有效值的每一项执行一次callback 函数，已删除（使用delete方法等情况）或者未初始化的项将被跳过。
   * @param  {(item:any,i:number,arr:any[])=>boolean} callback 用来测试数组的每个元素的函数
   * @param  {any} thisArg? 执行 callback 时使用的 this 值
   * @returns void
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
   * 创建一个新数组, 给原数组中的每个元素都按顺序调用一次  callback 函数，已删除（使用delete方法等情况）或者未初始化的项将被跳过
   * @param  {(item:any,i:number,arr:any[])=>boolean} callback 用来测试数组的每个元素的函数
   * @param  {any} thisArg?
   * @returns any
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
   * @param  {(item:any,i:number,arr:any[])=>boolean} callback 在数组每一项上执行的函数
   * @param  {any} thisArg? 执行 callback 函数时使用的this 值
   * @returns any
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
   * @param  {any} search 任意类型的待检索的参数
   * @param  {number} start? 开始检索位置
   * @returns number
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
   * 返回指定元素在数组中的最后一个的索引，如果不存在则返回 -1
   * @param  {any} search 任意类型的待检索的参数
   * @param  {number} start? 开始检索位置
   * @returns number
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
   * @returns any
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
   * @returns any
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
   * @param  {any} search 需要查找的元素值
   * @param  {number} start? 从该索引处开始查找 search,默认为 0
   * @returns boolean
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
   * @returns any
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
