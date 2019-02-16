/**
 * @file 模拟 Node 的 EventEmitter 事件发布处理机制
 * @author pxyamos
 */
export default class EventEmit {
  private events: { [key: string]: any[] };
  constructor() {
    this.events = {};
  }

  /**
   * 订阅事件
   * @param  {string} eventName 事件名
   * @param  {function} callback 回调函数
   * @param  {boolean} oneof 是否执行一次，默认 false
   * @returns EventEmit
   */
  on(
    eventName: string,
    callback: (...data: any[]) => void,
    oneof: boolean = false
  ): EventEmit {
    if (!this.include(eventName)) {
      this.events[eventName] = [];
    }
    if (typeof callback !== 'function') {
      throw new SyntaxError('Subscription events must be functions.');
    }
    (callback as any).oneof = oneof;
    this.events[eventName].push(callback);
    return this;
  }

  /**
   * 订阅一次性事件，执行即被销毁
   * @param  {string} eventName 事件名
   * @param  {function} callback 回调函数
   * @returns EventEmit
   */
  once(eventName: string, callback: (...data: any[]) => void): EventEmit {
    return this.on(eventName, callback, true);
  }

  /**
   * 是否已订阅指定事件
   * @param  {string} eventName 事件名
   * @returns boolean
   */
  include(eventName: string): boolean {
    return eventName in this.events;
  }

  /**
   * 返回指定事件列表
   * @param  {string} eventName 事件名
   * @returns any
   */
  listeners(eventName: string): any[] {
    return this.events[eventName] || [];
  }

  /**
   * 主动触发事件
   * @param  {string} eventName 事件名
   * @param  {any[]} ...data 触发事件回调的参数
   * @returns EventEmit
   */
  emit(eventName: string, ...data: any[]): EventEmit {
    const events = this.listeners(eventName);
    for (let i = 0, l = events.length; i < l; i += 1) {
      // event[i] 必然是函数，on 中已做过滤
      events[i].apply(this, data);
      if (events[i].oneof) {
        events.splice(i, 1);
      }
    }
    return this;
  }

  /**
   * 取消事件订阅
   * @param  {string} eventName 事件名
   * @param  {function} callback 回调函数
   * @returns EventEmit
   */
  off(eventName: string, callback?: (...data: any[]) => void): EventEmit {
    const events = this.listeners(eventName);
    if (typeof callback === 'function') {
      // 清除当前 eventName 类型事件下对应 callback方法
      for (let i = 0, l = events.length; i < l; i += 1) {
        if (events[i].toString() === callback.toString()) {
          this.events[eventName].splice(i, 1);
          break;
        }
      }
    } else {
      // 如果仅仅参数 eventName, 则所有相关事件清除
      delete this.events[eventName];
    }
    return this;
  }
}
