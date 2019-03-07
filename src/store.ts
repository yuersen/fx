/**
 * localStorage packaging
 * @author pxy0809
 */

/**
 * JSON 对象字符串化
 * @param  {any} val
 */
function stringify(val: any) {
  try {
    return JSON.stringify(val);
  } catch (e) {
    throw new Error('JSON.stringify does not support');
  }
}

/**
 * 解析 JSON 字符串
 * @param  {string} val
 */
function parseJSON(val: string) {
  try {
    return JSON.parse(val);
  } catch (e) {
    throw new Error('JSON.parse does not support');
  }
}

// 存储对象
const store: { [key: string]: any } = {};

/**
 * cookies extension tool
 * @see https://developer.mozilla.org/en-US/docs/Web/API/document.cookie
 * @see https://github.com/madmurphy/cookies.js
 */
store.cookieStore = {
  /**
   * 检查当前环境是否支持 cookie
   * @returns boolean
   */
  check(): boolean {
    return !document.cookie || !navigator.cookieEnabled;
  },

  /**
   * 读取一个cookie
   * @param  {string} key 读取的cookie名
   * @returns string
   */
  getItem(key: string): string | null {
    if (!key) {
      return null;
    }
    return (
      parseJSON(decodeURIComponent(
        document.cookie.replace(
          new RegExp(
            '(?:(?:^|.*;)\\s*' +
              encodeURIComponent(key).replace(
                /[\-\.\+\*]/g,
                '\\$&'
              ) +
              '\\s*\\=\\s*([^;]*).*$)|^.*$'
          ),
          '$1'
        )
      )) || null
    );
  },

  /**
   * 创建或覆盖一个cookie
   * @param  {string} key 要创建或覆盖的cookie的名字
   * @param  {any} value 存储的值
   * @param  {string|number|Date} end 有效最大日期
   * @param  {string} path? 指向的路径，默认为当前文档位置的路径
   * @param  {string} domain? 有效域名，默认为当前文档位置的路径的域名部分
   * @param  {string} secure? cookie只会被https传输 (boolean或null)
   * @returns boolean
   */
  setItem(
    key: string,
    value: any,
    end?: string | number | Date,
    path?: string,
    domain?: string,
    secure?: string
  ) {
    if (!key || /^(?:expires|max\-age|path|domain|secure)$/i.test(key)) {
      return this;
    }
    let expires = '';
    if (end) {
      switch (end.constructor) {
        case Number:
          expires =
            end === Infinity
              ? '; expires=Fri, 31 Dec 9999 23:59:59 GMT'
              : '; max-age=' + end;
          /*
					Note: Despite officially defined in RFC 6265, the use of `max-age` is not compatible with any
					version of Internet Explorer, Edge and some mobile browsers. Therefore passing a number to
					the end parameter might not work as expected. A possible solution might be to convert the the
					relative time to an absolute time. For instance, replacing the previous line with:
					*/
          /*
					expires = end === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; expires=" + (new Date(end * 1e3 + Date.now())).toUTCString();
					*/
          break;
        case String:
          expires = '; expires=' + end;
          break;
        case Date:
          expires = '; expires=' + (end as Date).toUTCString();
          break;
      }
    }
    document.cookie =
      encodeURIComponent(key) +
      '=' +
      encodeURIComponent(stringify(value)) +
      expires +
      (domain ? '; domain=' + domain : '') +
      (path ? '; path=' + path : '') +
      (secure ? '; secure' : '');
    return true;
  },

  /**
   * 删除一个cookie
   * @param  {string} key 要移除的cookie名
   * @param  {string} path? 如果没有定义，默认为当前文档位置的路径
   * @param  {string} domain? 默认为当前文档位置的路径的域名部分
   */
  removeItem(key: string, path?: string, domain?: string) {
    key = key;
    if (this.hasItem(key)) {
      document.cookie =
        encodeURIComponent(key) +
        '=; expires=Thu, 01 Jan 1970 00:00:00 GMT' +
        (domain ? '; domain=' + domain : '') +
        (path ? '; path=' + path : '');
    }
    return this;
  },

  /**
   * 检查一个cookie是否存在
   * @param {string} key 要检查的cookie名
   * @returns boolean
   */
  hasItem(key: string): boolean {
    if (!key || /^(?:expires|max\-age|path|domain|secure)$/i.test(key)) {
      return false;
    }
    return new RegExp(
      '(?:^|;\\s*)' +
        encodeURIComponent(key).replace(/[\-\.\+\*]/g, '\\$&') +
        '\\s*\\='
    ).test(document.cookie);
  },

  /**
   * 返回一个这个路径所有可读的cookie的数组
   * @returns string[]
   */
  keys(): string[] {
    const keys = document.cookie
      .replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, '')
      .split(/\s*(?:\=[^;]*)?;\s*/);
    for (let l = keys.length, i = 0; i < l; i++) {
      keys[i] = decodeURIComponent(keys[i]);
    }
    return keys;
  },

  /**
   * 清空 cookies
   * @param  {string} path? 如果没有定义，默认为当前文档位置的路径
   * @param  {string} domain? 默认为当前文档位置的路径的域名部分
   */
  clear(path?: string, domain?: string) {
    const keys = this.keys();
    for (let l = keys.length, i = 0; i < l; i++) {
      this.removeItem(keys[i], path, domain);
    }
  }
};

/**
 * 创建 webStore
 * @param  {any} $store 待创建的 web store
 */
function createWebStore($store: any) {
  return {
    /**
     * 检查当前环境是否支持 localStorage
     * @returns boolean
     */
    check(): boolean {
      try {
        $store.setItem('testLocal', 'testLocal');
        $store.removeItem('testLocal');
        return true;
      } catch (e) {
        return false;
      }
    },

    /**
     * 接受一个键名作为参数，返回键名对应的值
     * @param  {string} key 键名
     * @returns string
     */
    getItem(key: string): string | null {
      if (!key) {
        return null;
      }
      return parseJSON($store.getItem(key)) || null;
    },

    /**
     * 接受一个键名和值作为参数，将会把键值对添加到存储中，如果键名存在，则更新其对应的值。
     * @param  {string} key 键名
     * @param  {any} value 值
     * @returns localStore
     */
    setItem(key: string, value: any) {
      if (key && value) {
        $store.setItem(key, stringify(value));
      }
      return this;
    },

    /**
     * 接受一个键名作为参数，并把该键名从存储中删除。
     * @param  {string} key 键名
     * @returns localStore
     */
    removeItem(key: string) {
      $store.removeItem(key);
      return this;
    },

    /**
     * 接受一个键名作为参数，检测是否已经被添加到缓存中
     * @param {string} key 键名
     * @returns boolean
     */
    hasItem(key: string): boolean {
      return !!this.getItem(key);
    },

    /**
     * 接受一个数值 n 作为参数，返回存储对象第 n 个数据项的键名
     * @param  {number} n 一个整数，表示要获取的键名索引
     * @returns string
     */
    key(n: number): string {
      return $store.key(n);
    },

    /**
     * 返回所有键名
     * @returns string[]
     */
    keys(): string[] {
      const keys: string[] = [];
      for (let i = 0, l = $store.length(); i < l; i++) {
        keys.push('' + this.key(i));
      }
      return keys;
    },

    /**
     * 清空存储中的所有键名
     */
    clear() {
      $store.clear();
      return this;
    }
  };
}

// localStorage
store.localStore = createWebStore(window.localStorage || <any>{});

// localStorage
store.sessionStore = createWebStore(window.sessionStorage || <any>{});

// memory
store.memoryStore = {
  /**
   * 检查当前环境是否支持 localStorage
   * @returns boolean
   */
  check(): boolean {
    return true;
  },

  /**
   * 接受一个键名作为参数，返回键名对应的值
   * @param  {string} key 键名
   * @returns string
   */
  getItem(key: string): string | null {
    return this.cache[key] || null;
  },

  /**
   * 接受一个键名和值作为参数，将会把键值对添加到存储中，如果键名存在，则更新其对应的值。
   * @param  {string} key 键名
   * @param  {any} value 值
   * @returns localStore
   */
  setItem(key: string, value: any) {
    if (key && value) {
      this.cache[key] = value;
    }
    return this;
  },

  /**
   * 接受一个键名作为参数，并把该键名从存储中删除。
   * @param  {string} key 键名
   * @returns localStore
   */
  removeItem(key: string) {
    delete this.cache[key];
    return this;
  },

  /**
   * 接受一个键名作为参数，检测是否已经被添加到缓存中
   * @param {string} key 键名
   * @returns boolean
   */
  hasItem(key: string): boolean {
    return key in this.cache;
  },

  /**
   * 返回所有键名
   * @returns string[]
   */
  keys(): string[] {
    const keys: string[] = [];
    for(const key in this.cache) {
      if (this.cache.hasOwnProperty(key)) {
        keys.push(key);
      }
    }
    return keys;
  },

  /**
   * 清空存储中的所有键名
   */
  clear() {
    this.cache = {};
    return this;
  }
};

export const localStore = store.localStore;
export const sessionStore = store.sessionStore;
export const cookieStore = store.cookieStore;
export const memoryStore = store.memoryStore;
export default store;
