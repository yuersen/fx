/**
 * URLSearchParams 接口定义了一些实用的方法来处理 URL 的查询字符串。
 * URLSearchParams Polyfill
 * @see https://github.com/WebReflection/url-search-params/blob/master/src/url-search-params.js
 * @see https://url.spec.whatwg.org/#dom-url-searchparams
 *
 * https://developer.mozilla.org/zh-CN/docs/Web/API/URLSearchParams
 */
export default class URLSearchParams {
  private secret: { [key: string]: string[] } = {};

  constructor(query: string | object | string[]) {
    if (!query) {
      throw new Error('A query param is required');
    }

    const type = {}.toString.call(query);
    if (type === '[object String]') {
      // 'search=pxy'
      if ((query as string).charAt(0) === '?') {
        (query as string) = (query as string).slice(1);
      }
      const pairs = (query as string).split('&');
      for (const pair of pairs) {
        const split = pair.split('=');
        // decodeURIComponent/encodeURIComponent
        this.append(split[0], split[1] || '');
      }
    } else if (type === '[object Array]') {
      // [['search', 'pxy'], ['age', 20]]
      for (const vals of query as string[]) {
        this.append(vals[0], vals[1]);
      }
    } else if (type === '[object Object]') {
      // {search: 'pxy', age: 20}
      for (const key in query as { [key: string]: string }) {
        if (query.hasOwnProperty(key)) {
          this.append(key, (query as any)[key]);
        }
      }
    }
  }

  /**
   * 在查询字符串之中，追加一个键值对
   * @param  {string} name 查询字段名称
   * @param  {string|string[]} values 查询字段对应的值
   * @returns URLSearchParamsUtil
   */
  append(name: string, values: string | string[]): URLSearchParams {
    if (!name || !values) {
      return this;
    }

    if (!this.secret[name]) {
      this.secret[name] = [];
    }
    const vals = typeof values === 'string' ? [values] : values;
    for (const val of vals) {
      this.secret[name].push(decodeURIComponent((val + '').replace(/\+/g, '')));
    }
  }

  /**
   * 从搜索参数里删除所有指定的搜索参数,同时删除其对应的值。
   * @param  {string} name 待删除查询字段名称
   * @returns URLSearchParamsUtil
   */
  delete(name: string): URLSearchParams {
    delete this.secret[name];
    return this;
  }

  /**
   * 获取指定搜索参数的第一个值
   * @param  {string} name 待获取值的查询字段名称
   * @returns string
   */
  get(name: string): string | null {
    return name in this.secret ? this.secret[name][0] : null;
  }

  /**
   * 获取指定搜索参数的所有值，返回是一个数组
   * @param  {string} name 待获取值的查询字段名称
   * @returns string
   */
  getAll(name: string): string[] {
    return name in this.secret ? this.secret[name].slice(0) : [];
  }

  /**
   * 判断是否存在此搜索参数
   * @param {string} name 待判断是否存在的查询字段名称
   * @returns boolean
   */
  has(name: string): boolean {
    return name in this.secret;
  }

  /**
   * 设置一个搜索参数的新值，假如原来有多个值将全部删除
   * @param {string} name 待设置值的查询字段名称
   * @param {string} value 待设置的新值
   * @returns URLSearchParamsUtil
   */
  set(name: string, value: string): URLSearchParams {
    this.secret[name] = ['' + value];
    return this;
  }

  /**
   * 返回iterator 此对象包含了键/值对的所有键名
   * @returns string[]
   */
  keys(): string[] {
    const names: string[] = [];

    for (const name in this.secret) {
      if (this.secret.hasOwnProperty(name)) {
        names.push(name);
      }
    }
    return names;
  }

  /**
   * 返回iterator 此对象包含了键/值对的所有值
   * @returns any[]
   */
  values(): any[] {
    const values: any[] = [];

    for (const name in this.secret) {
      if (this.secret.hasOwnProperty(name)) {
        values.push(this.secret[name]);
      }
    }
    return values;
  }

  /**
   * 返回一个iterator可以遍历所有键/值对的对象
   * @returns string
   */
  entries(): { [key: string]: string[] } {
    return this.secret;
  }

  /**
   * 返回搜索参数组成的字符串，可直接使用在URL上
   * @returns string
   */
  toString(): string {
    const query: string[] = [];

    for (const name in this.secret) {
      if (this.secret.hasOwnProperty(name)) {
        const values = this.secret[name];
        for (const val of values) {
          query.push(this.encodeURI(name) + '=' + this.encodeURI(val));
        }
      }
    }
    return query.join('&');
  }

  /**
   * 对参数解码
   * @private
   * @param {string} str - 待解码参数
   */
  private encodeURI(str: string) {
    const replacePairs: { [key: string]: string } = {
      '!': '%21',
      "'": '%27',
      '(': '%28',
      ')': '%29',
      '~': '%7E',
      '%20': '+',
      '%00': '\x00'
    };
    return encodeURIComponent(str).replace(/[!'\(\)~]|%20|%00/g, match => {
      return replacePairs[match];
    });
  }
}
