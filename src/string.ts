export default class StringUtil {
  length: number;
  constructor(public str: string) {
    this.str = '' + str;
    this.length = str.length;
  }
  /**
   * 获取字符串的字节数
   * @param {String} str - 待获取字节数的字符串
   * @param {(Number | undefined)} fix - 指定字符串与字节的转换位数
   * @return {Number}
   */
  byte(fix?: number): number {
    fix = fix ? fix : 2;
    return this.str.replace(/[^\x00-\xff]/g, new Array(fix + 1).join('-'))
      .length;
  }

  /**
   * 包含'-'或者'_'的字符串,转化为驼峰风格
   * @return {String} 驼峰风格的字符串
   */
  camelize(): string {
    return this.str.replace(/[-_][^-_]/g, match => {
      return match.charAt(1).toUpperCase();
    });
  }

  /**
   * 首字母大写
   * @return {String}
   */
  capitalize(): string {
    return this.str.charAt(0).toUpperCase() + this.str.substr(1);
  }

  /**
   * HTML片段编码转义
   * @return {String} 转义后的html片段
   * @see https://github.com/janl/mustache.js/blob/master/mustache.js#L60
   */
  encodeHtml(): string {
    const escapeMap = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
      '/': '&#x2F;',
      '`': '&#x60;',
      '=': '&#x3D;'
    };
    return this.str.replace(/[&<>"'`=\/]/g, (s: string) => {
      return (<any>escapeMap)[s];
    });
  }

  /**
   * HTML片段编码转义
   * @return {String} 转义后的html片段
   */
  decodeHtml(): string {
    const escapeMap = {
      '&amp;': '&',
      '&lt;': '<',
      '&gt;': '>',
      '&quot;': '"',
      '&#39;': "'",
      '&#x2F;': '/',
      '&#x60;': '`',
      '&#x3D;': '='
    };
    return this.str.replace(
      /(&amp;|&lt;|&gt;|&quot;|&#39;|&#x2F;|&#x60;|&#x3D;)/g,
      s => {
        return (<any>escapeMap)[s];
      }
    );
  }

  /**
   * 判断当前字符串是否是以另外一个给定的子字符串“开头”的，根据判断结果返回 true 或 false
   * @param {String} search - 要搜索的子字符串
   * @param {Boolean} position - 搜索开始位置，默认值为 0，也就是真正的字符串开头处
   * @return {Boolean}  若包含子项，返回 true.
   */
  startsWith(search: string, position?: string): boolean {
    const seaLen = search.length;
    let pos = position ? Number(position) : 0;
    if (pos !== pos) {
      // better `isNaN`
      pos = 0;
    }
    const start = Math.min(Math.max(pos, 0), this.length);
    // Avoid the `indexOf` call if no match is possible
    if (seaLen + start > this.length) {
      return false;
    }
    let index = -1;
    while (++index < seaLen) {
      if (this.str.charCodeAt(start + index) !== search.charCodeAt(index)) {
        return false;
      }
    }
    return true;
  }

  /**
   * 判断当前字符串是否是以另外一个给定的子字符串“结尾”的，根据判断结果返回 true 或 false
   * @param {String} search - 要搜索的子字符串
   * @param {Number|undefined} position - 作为str的长度，默认值为 str.length
   * @return {Boolean}  若包含子项，返回 true.
   */
  endsWith(search: string, position?: number): boolean {
    if (position === void 0 || position > this.length) {
      position = this.length;
    }
    return this.str.substring(position - search.length, position) === search;
  }

  /**
   * 判断字符串中是否包含汉字
   * @param {String} str - 待检测的对象
   * @return {Boolean}
   */
  hasChinese(): boolean {
    // [\u4E00-\u9FA5]表示汉字，[\uFE30-\uFFA0]表示全角
    // patrn=/[\u4E00-\u9FA5]|[\uFE30-\uFFA0]/gi,!patrn.exec(s)
    return /.*[\u4e00-\u9fa5]+.*$/.test(this.str);
  }

  /**
   * 返回一个新字符串，该字符串包含被连接在一起的指定数量的字符串的副本
   * @param count 介于0和正无穷大之间的整数 : [0, +∞) 。表示在新构造的字符串中重复了多少遍原字符串。
   */
  repeat(count: number): string {
    return new Array(Math.floor(count || 1) + 1).join(this.str);
  }

  /**
   * 用一个字符串填充当前字符串（如果需要的话则重复填充），
   * 返回填充后达到指定长度的字符串。从当前字符串的末尾（右侧）开始填充。
   * @param {Number} targetLength - 增加长度
   * @param {String} padString - 填充字符串
   * @return {String}
   */
  padEnd(targetLength: number, padString?: string): string {
    // floor if number or convert non-number to 0;
    if (!padString) {
      return this.str;
    }

    if (this.length > targetLength) {
      return this.str;
    }
    targetLength = targetLength - this.length;
    if (targetLength > padString.length) {
      // append to original to ensure we are longer than needed
      padString += new Array(Math.floor(targetLength / padString.length)).join(
        padString
      );
    }
    return this.str + padString.slice(0, targetLength);
  }

  /**
   * 用另一个字符串填充当前字符串(重复，如果需要的话)，以便产生的字符串达到给定的长度。
   * @param {Number} targetLength - 当前字符串需要填充到的目标长度
   * @param {String} padString - 填充字符串
   * @return {String}
   */
  padStart(targetLength: number, padString?: string): string {
    // floor if number or convert non-number to 0;
    if (!padString) {
      return this.str;
    }

    if (this.length > targetLength) {
      return this.str;
    }
    targetLength = targetLength - this.length;
    if (targetLength > padString.length) {
      // append to original to ensure we are longer than needed
      padString += new Array(Math.floor(targetLength / padString.length)).join(
        padString
      );
    }
    return padString.slice(0, targetLength) + this.str;
  }

  /**
   * 移除字符串中的html标签
   * 存在缺陷：如果有script标签，会把这些不该显示的脚本显示出来
   * @return {String}
   */
  stripTag(): string {
    return this.str.replace(/<[^>]+>/g, '');
  }

  /**
   * 移除字符串左右的空格
   * @param {String} str - String对象或者字符串
   * @return {String}
   */
  trim(): string {
    return this.str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
  }

  /**
   * 移除字符串左侧的空格
   * @return {String} String对象或者字符串
   */
  trimLeft(): string {
    return this.str.replace(/^\s*/, '');
  }

  /**
   * 移除字符串右侧的空格
   * @return {String} String对象或者字符串
   */
  trimRight(): string {
    return this.str.replace(/\s*$/, '');
  }

  /**
   * 将字符串进行切割
   * @return {Array}  包含切割字符串的数组
   */
  chars(): string[] {
    return this.str.split('');
  }

  /**
   * 对当前字符串进行反转操作
   * @return {String} 反转操作后的字符串
   */
  reverse(): string {
    return this.str
      .split('')
      .reverse()
      .join('');
  }

  /**
   * 判断指定字符串中是否包含某子字符串
   * @param  {String} str - 待检测字符串
   * @return {Boolean}  若包含子项，返回 true.
   */
  contains(substr: string): boolean {
    return this.str.indexOf(substr) !== -1;
  }

  /**
   * 银行卡号Luhm校验
   * Luhm校验规则：16位银行卡号（19位通用）:
   *   1.将未带校验位的 15（或18）位卡号从右依次编号 1 到 15（18），位于奇数位号上的数字乘以 2。
   *   2.将奇位乘积的个十位全部相加，再加上所有偶数位上的数字。
   *   3.将加法和加上校验位能被 10 整除。
   * bankCardNumber为银行卡号 banknoInfo 为显示提示信息的DIV或其他控件
   * @param {String} bankno - 银行卡号
   * @return {Boolean}
   */

  verifyBankCardNumber(): boolean {
    const bankCardNumber: string = this.str;
    const lastNumber: string = bankCardNumber.substr(
      bankCardNumber.length - 1,
      1
    ); // 取出最后一位（与luhm进行比较）
    const first15Or18Num: string = bankCardNumber.substr(
      0,
      bankCardNumber.length - 1
    ); // 前15或18位
    const cardNumber = [];
    const oddDigitsGreater9 = []; // 奇数位*2的积 <9
    const oddDigitsLess9 = []; // 奇数位*2的积 >9
    const oddDigitsGreater9ABits = []; // 奇数位*2 >9 的分割之后的数组个位数
    const oddDigitsGreater9TenBits = []; // 奇数位*2 >9 的分割之后的数组十位数
    const evenDigits = []; // 偶数位数组
    let oddDigitsLess9Total = 0; // 奇数位*2 < 9 的数组之和
    let evenTotal = 0; // 偶数位数组之和
    let oddDigitsGreater9ABitsTotal = 0; // 奇数位*2 >9 的分割之后的数组个位数之和
    let oddDigitsGreater9TenBitsTotal = 0; // 奇数位*2 >9 的分割之后的数组十位数之和
    let sumTotal = 0;
    let luhm;

    if (
      bankCardNumber.length < 16 ||
      bankCardNumber.length > 19 ||
      !/^\d*$/.test(bankCardNumber)
    ) {
      return false;
    }

    for (let i = first15Or18Num.length - 1; i > -1; i--) {
      // 前15或18位倒序存进数组
      cardNumber.push(first15Or18Num.substr(i, 1));
    }

    for (let j = 0; j < cardNumber.length; j++) {
      const item = cardNumber[j];

      if ((j + 1) % 2 === 1) {
        // 奇数位
        if (parseInt(item, 10) * 2 < 9) {
          oddDigitsLess9.push(parseInt(item, 10) * 2);
        } else {
          oddDigitsGreater9.push(parseInt(item, 10) * 2);
        }
      } else {
        // 偶数位
        evenDigits.push(item);
      }
    }

    // 奇数位*2 >9 的分割之后的数组个十位数
    for (const od9Value of oddDigitsGreater9) {
      oddDigitsGreater9ABits.push(od9Value % 10);
      oddDigitsGreater9TenBits.push(od9Value / 10);
    }

    // 奇数位*2 < 9 的数组之和
    for (const od9lValue of oddDigitsLess9) {
      oddDigitsLess9Total = oddDigitsLess9Total + od9lValue;
    }

    // 偶数位数组之和
    for (const edValue of evenDigits) {
      evenTotal = evenTotal + parseInt(edValue, 10);
    }

    // 奇数位*2 >9 的分割之后的数组个位数之和
    for (const odg9sValue of oddDigitsGreater9ABits) {
      oddDigitsGreater9ABitsTotal = oddDigitsGreater9ABitsTotal + odg9sValue;
    }

    // 奇数位*2 >9 的分割之后的数组十位数之和
    for (const odg9tValue of oddDigitsGreater9TenBits) {
      oddDigitsGreater9TenBitsTotal =
        oddDigitsGreater9TenBitsTotal + odg9tValue;
    }

    // 计算总和
    sumTotal =
      oddDigitsLess9Total +
      evenTotal +
      oddDigitsGreater9ABitsTotal +
      oddDigitsGreater9TenBitsTotal;

    // 计算Luhm值
    luhm = 10 - (sumTotal % 10 === 0 ? 10 : sumTotal % 10);

    if (lastNumber === luhm + '' && lastNumber.length !== 0) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * 判断是否是合理的IP地址
   * @param {String} ip - 待验证的IP地址
   * @return {Boolean} 若是合理的IP地址， 返回 true.
   */
  isIP(): boolean {
    return /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
      this.str
    );
  }

  /**
   * 判断输入的参数是否是个合格的URL
   * @param {String} url - 待判断的url参数
   * @return {Boolean}
   */
  isURL(): boolean {
    return new RegExp(
      '^((https|http|ftp|rtsp|mms)?://)' +
      "?(([0-9a-z_!~*'().&=+$%-]+: )?[0-9a-z_!~*'().&=+$%-]+@)?" + // ftp的user@
      '(([0-9]{1,3}.){3}[0-9]{1,3}' + // IP形式的URL- 199.194.52.184
      '|' + // 允许IP和DOMAIN（域名）
      "([0-9a-z_!~*'()-]+.)*" + // 域名- www.
      '([0-9a-z][0-9a-z-]{0,61})?[0-9a-z].' + // 二级域名
      '[a-z]{2,6})' + // first level domain- .com or .museum
      '(:[0-9]{1,4})?' + // 端口- :80
        '((/?)|' +
        "(/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+/?)$"
    ).test(this.str);
  }

  /**
   * 判断输入的参数是否是个合格的手机号码，不能判断号码的有效性，有效性可以通过运营商确定。
   * @param {String} phone - 待判断的手机号码
   * @return {Boolean} 合法的手机号码返回 true.
   */

  isPhone(): boolean {
    /*
     * 手机号码段规则
     * 13段：130、131、132、133、134、135、136、137、138、139
     * 14段：145、147
     * 15段：150、151、152、153、155、156、157、158、159
     * 17段：170、176、177、178
     * 18段：180、181、182、183、184、185、186、187、188、189
     */
    return /^(13[0-9]|14[57]|15[012356789]|17[0678]|18[0-9])\d{8}$/.test(
      this.str
    );
  }

  /**
   * 判断输入的参数是否是个合格标准的邮箱,并不能判断是否有效，有效只能通过邮箱提供商确定。
   * @return {Boolena} 合格的邮箱返回 true
   */
  isEmail(): boolean {
    /*
     * 邮箱规则
     * 1.邮箱以a-z、A-Z、0-9开头，最小长度为1.
     * 2.如果左侧部分包含-、_、.则这些特殊符号的前面必须包一位数字或字母。
     * 3.@符号是必填项
     * 4.右则部分可分为两部分，第一部分为邮件提供商域名地址，第二部分为域名后缀，现已知的最短为2位。最长的为6为。
     * 5.邮件提供商域可以包含特殊字符-、_、.
     */
    return /^([a-zA-Z0-9]+[-_.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[-_.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,6}$/.test(
      this.str
    );
  }

  /**
   * 判断传入的参数的长度是否在给定的有效范围内
   * @param {String} str - 待验证的参数
   * @param {Number} max - 给定的最大的长度
   * @param {Number} min - 给定的最小的长度
   * @return {Boolean} 验证通过返回 true.
   *
   */
  isAvaiableLength(max: number, min: number): boolean {
    const l = this.str.length;
    return l >= min && l <= max;
  }

  /**
   * 参数身份证号码是否合法，其身份证有效性无法判断
   * @param {String} idcard - 待验证的身份证
   * @return {Boolean} 若检验通过，返回 true
   */
  isIdCard(): boolean {
    const cityCode = {
      11: '北京',
      12: '天津',
      13: '河北',
      14: '山西',
      15: '内蒙古',
      21: '辽宁',
      22: '吉林',
      23: '黑龙江 ',
      31: '上海',
      32: '江苏',
      33: '浙江',
      34: '安徽',
      35: '福建',
      36: '江西',
      37: '山东',
      41: '河南',
      42: '湖北 ',
      43: '湖南',
      44: '广东',
      45: '广西',
      46: '海南',
      50: '重庆',
      51: '四川',
      52: '贵州',
      53: '云南',
      54: '西藏 ',
      61: '陕西',
      62: '甘肃',
      63: '青海',
      64: '宁夏',
      65: '新疆',
      71: '台湾',
      81: '香港',
      82: '澳门',
      91: '国外'
    };
    const Wi = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
    const valideCode = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];
    const idcard = this.str.toUpperCase();
    const idcards = idcard.split('');
    let year;
    let month;
    let day;
    let birthday;

    // 检查号码是否符合规范，包括长度，类型
    // 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X。
    if (!/(^\d{15}$)|(^\d{17}([0-9]|X|x)$)/.test(idcard)) {
      return false;
    }

    // 取身份证前两位,校验省份
    if (!(<any>cityCode)[idcard.substr(0, 2)]) {
      return false;
    }

    // 校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。
    // 下面分别分析出生日期和校验位
    const len = idcard.length;
    if (len === 15) {
      year = idcard.substring(6, 8);
      month = idcard.substring(8, 10);
      day = idcard.substring(10, 12);
      birthday = new Date(year + '/' + month + '/' + day);

      if (
        birthday.getFullYear() !== parseFloat(year) ||
        birthday.getMonth() !== parseFloat(month) - 1 ||
        birthday.getDate() !== parseFloat(day)
      ) {
        return false;
      } else {
        return true;
      }
    } else if (len === 18) {
      year = idcard.substring(6, 10);
      month = idcard.substring(10, 12);
      day = idcard.substring(12, 14);
      birthday = new Date(year + '/' + month + '/' + day);

      if (
        birthday.getFullYear() !== parseFloat(year) ||
        birthday.getMonth() !== parseFloat(month) - 1 ||
        birthday.getDate() !== parseFloat(day)
      ) {
        return false;
      } else {
        // 检验18位身份证的校验码是否正确。
        // 校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。
        let sum: number = 0;

        if (idcards[17] === 'x') {
          idcards[17] = '10';
        }

        for (let i = 0; i < 17; i++) {
          sum += Wi[i] * parseInt(idcards[i], 10); // 加权求和
        }
        if (idcards[17] === valideCode[sum % 11]) {
          return true;
        } else {
          return false;
        }
      }
    }
    return false;
  }
}
