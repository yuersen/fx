/**
 * 参数身份证号码是否合法，其身份证有效性无法判断
 *
 * @function
 * @memberof Fx
 * @param {String} str 表示身份ID的字符串
 * @returns {Boolean}
 * @example
 *
 * // -> true
 * Fx.checkIdCard('220582197507240826');
 * // -> false
 * Fx.checkIdCard('220582197507240885');
 */
const checkIdCard = (str: string): boolean => {
  const cityCode: { [key: string]: string } = {
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
  const parity = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];
  const idcard = str.toUpperCase();
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
  if (!cityCode[idcard.substr(0, 2)]) {
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

    return (
      (birthday as any).getYear() === parseFloat(year) &&
      birthday.getMonth() === parseFloat(month) - 1 &&
      birthday.getDate() === parseFloat(day)
    );
  }
  if (len === 18) {
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
    }
    // 检验18位身份证的校验码是否正确。
    // 校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。
    let sum: number = 0;

    for (let i = 0; i < 17; i++) {
      sum += Wi[i] * parseInt(idcards[i], 10); // 加权求和
    }
    if (idcards[17] === parity[sum % 11]) {
      return true;
    }
    return false;
  }
};

export default checkIdCard;
