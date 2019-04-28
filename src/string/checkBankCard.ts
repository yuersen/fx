/**
 * 银行卡号Luhm校验
 * Luhm校验规则：16位银行卡号（19位通用）:
 *   1.将未带校验位的 15（或18）位卡号从右依次编号 1 到 15（18），位于奇数位号上的数字乘以 2。
 *   2.将奇位乘积的个十位全部相加，再加上所有偶数位上的数字。
 *   3.将加法和加上校验位能被 10 整除。
 * bankno为银行卡号 banknoInfo 为显示提示信息的DIV或其他控件
 *
 * @function
 * @memberof Fx
 * @param {String} bankno 银行卡号
 * @returns {Boolean}
 * @example
 *
 * // -> true
 * Fx.checkBankCard('6222600260001072444');
 *
 * // -> false
 * Fx.checkBankCard('6222600261072420');
 */
const checkBankCard = (bankno: string): boolean => {
  const lastNumber: string = bankno.substr(bankno.length - 1, 1); // 取出最后一位（与luhm进行比较）
  const first15Or18Num: string = bankno.substr(0, bankno.length - 1); // 前15或18位
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

  if (bankno.length < 16 || bankno.length > 19 || !/^\d*$/.test(bankno)) {
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
    oddDigitsGreater9TenBitsTotal = oddDigitsGreater9TenBitsTotal + odg9tValue;
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
};
export default checkBankCard;
