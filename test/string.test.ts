import Fx from '../src/fx';
import 'mocha';
import { expect } from 'chai';

describe('Operate String method', () => {
  describe('Fx(str: string).byte(fix: number): number', () => {
    const str = '测试Fx.byte';
    it(`Input: ${str}, Output: 11`, () => {
      expect(Fx(str).byte()).to.equal(11);
    });
    it(`Input: ${str}, Output: 15`, () => {
      expect(Fx(str).byte(4)).to.equal(15);
    });
  });

  describe('Fx(str: string).camelize(): string', () => {
    const strikethrough = 'fx-utils';
    const underline = 'fx_utils';
    const result = 'fxUtils';

    it(`Input: ${strikethrough}, Output: fxUtils`, () => {
      expect(Fx(strikethrough).camelize()).to.equal(result);
    });
    it(`Input: ${underline}, Output: fxUtils`, () => {
      expect(Fx(underline).camelize()).to.equal(result);
    });
  });

  describe('Fx(str: string).capitalize(): string', () => {
    const str = 'fxUtils';
    const result = 'FxUtils';

    it(`Input: ${str}, Output: ${result}`, () => {
      expect(Fx(str).capitalize()).to.equal(result);
    });
  });

  describe('Fx(str: string).encodeHtml(): string', () => {
    const str = '<div>Fx</div>';
    const result = '&lt;div&gt;Fx&lt;&#x2F;div&gt;';

    it(`Input: ${str}, Output: ${result}`, () => {
      expect(Fx(str).encodeHtml()).to.equal(result);
    });
  });

  describe('Fx(str: string).decodeHtml(): string', () => {
    const str = '&lt;div&gt;Fx&lt;&#x2F;div&gt;';
    const result = '<div>Fx</div>';

    it(`Input: ${str}, Output: ${result}`, () => {
      expect(Fx(str).decodeHtml()).to.equal(result);
    });
  });

  describe('Fx(str: string).startsWith(search: string, position?: number): boolean', () => {
    const str = 'Fx.startsWith';

    it(`Input: ${str}, 'Fx', Output: true`, () => {
      expect(Fx(str).startsWith('Fx')).to.equal(true);
    });

    it(`Input: ${str}, 'Fx', 3, Output: true`, () => {
      expect(Fx(str).startsWith('start', 3)).to.equal(true);
    });

    it(`Input: ${str}, 'Fx.starsWith.method', Output: false`, () => {
      expect(Fx(str).startsWith('Fx.starsWith.method')).to.equal(false);
    });
  });

  describe('Fx(str: string).endsWith(search: string, position?: string): boolean', () => {
    const str = 'endsWith';

    it(`Input: ${str}, 'With', Output: true`, () => {
      expect(Fx(str).endsWith('With')).to.equal(true);
    });

    it(`Input: ${str}, 'ends', 4, Output: true`, () => {
      expect(Fx(str).endsWith('ends', 4)).to.equal(true);
    });

    it(`Input: ${str}, 'Fx.endsWith.method', Output: false`, () => {
      expect(Fx(str).endsWith('Fx.endsWith.method')).to.equal(false);
    });
  });

  describe('Fx(str: string).hasChinese(): boolean', () => {
    const str = 'Fx.startsWith';
    const chinese = '你好，Fx';

    it(`Input: ${str}, Output: false`, () => {
      expect(Fx(str).hasChinese()).to.equal(false);
    });

    it(`Input: ${chinese}, Output: true`, () => {
      expect(Fx(chinese).hasChinese()).to.equal(true);
    });
  });

  describe('Fx(str: string).repeat(count: number): string', () => {
    const str = 'Fx';

    it(`Input: ${str}, Output: 'Fx'`, () => {
      expect(Fx(str).repeat()).to.equal('Fx');
    });

    it(`Input: ${str}, 2, Output: 'FxFx'`, () => {
      expect(Fx(str).repeat(2)).to.equal('FxFx');
    });
  });

  describe('Fx(str: string).padEnd(targetLength: number, padString: string): string', () => {
    const str = 'Fx';

    it(`Input: ${str}, Output: 'Fx'`, () => {
      expect(Fx(str).padEnd(10)).to.equal('Fx');
    });

    it(`Input: ${str}, 2, '0', Output: 'Fx'`, () => {
      expect(Fx(str).padEnd(2, '0')).to.equal('Fx');
    });

    it(`Input: ${str}, 4, '0', Output: 'Fx00'`, () => {
      expect(Fx(str).padEnd(4, '0')).to.equal('Fx00');
    });

    it(`Input: 'Fxoop', 4, '0', Output: 'Fx00'`, () => {
      expect(Fx('Fxoop').padEnd(4, '0')).to.equal('Fxoop');
    });
  });

  describe('Fx(str: string).padStart(targetLength: number, padString: string): string', () => {
    const str = 'Fx';

    it(`Input: ${str}, Output: 'Fx'`, () => {
      expect(Fx(str).padStart(10)).to.equal('Fx');
    });

    it(`Input: ${str}, 2, '0', Output: 'Fx'`, () => {
      expect(Fx(str).padStart(2, '0')).to.equal('Fx');
    });

    it(`Input: ${str}, 4, '0', Output: '00Fx'`, () => {
      expect(Fx(str).padStart(4, '0')).to.equal('00Fx');
    });

    it(`Input: 'Fx000', 4, '0', Output: '00Fx'`, () => {
      expect(Fx('Fx000').padStart(4, '0')).to.equal('Fx000');
    });
  });

  describe('Fx(str: string).stripTag(): string', () => {
    const str = '<div><strong>Fx</strong></div>';

    it(`Input: ${str}, Output: 'Fx'`, () => {
      expect(Fx(str).stripTag()).to.equal('Fx');
    });

    it(`Input: Fx, Output: 'Fx'`, () => {
      expect(Fx(str).stripTag()).to.equal('Fx');
    });
  });

  describe('Fx(str: string).trim(): string', () => {
    it(`Input: 'Fx ', Output: 'Fx'`, () => {
      expect(Fx('Fx ').trim()).to.equal('Fx');
    });

    it(`Input: ' Fx ', Output: 'Fx'`, () => {
      expect(Fx(' Fx ').trim()).to.equal('Fx');
    });

    it(`Input: ' Fx', Output: 'Fx'`, () => {
      expect(Fx(' Fx').trim()).to.equal('Fx');
    });
  });

  describe('Fx(str: string).trimLeft(): string', () => {
    it(`Input: 'Fx ', Output: 'Fx'`, () => {
      expect(Fx('Fx ').trimLeft()).to.equal('Fx ');
    });

    it(`Input: ' Fx ', Output: 'Fx'`, () => {
      expect(Fx(' Fx ').trimLeft()).to.equal('Fx ');
    });

    it(`Input: ' Fx', Output: 'Fx'`, () => {
      expect(Fx(' Fx').trimLeft()).to.equal('Fx');
    });
  });

  describe('Fx(str: string).trimRight(): string', () => {
    it(`Input: 'Fx ', Output: 'Fx'`, () => {
      expect(Fx('Fx ').trimRight()).to.equal('Fx');
    });

    it(`Input: ' Fx ', Output: 'Fx'`, () => {
      expect(Fx(' Fx ').trimRight()).to.equal(' Fx');
    });

    it(`Input: ' Fx', Output: 'Fx'`, () => {
      expect(Fx(' Fx').trimRight()).to.equal(' Fx');
    });
  });

  describe('Fx(str: string).chars(): string[]', () => {
    it(`Input: 'Fx', Output: ['F', 'x']`, () => {
      expect(
        Fx('Fx')
          .chars()
          .join('-')
      ).to.equal('F-x');
    });
  });

  describe('Fx(str: string).reverse(): string', () => {
    it(`Input: 'Fx', Output: 'xF'`, () => {
      expect(Fx('Fx').reverse()).to.equal('xF');
    });
  });

  describe('Fx(str: string).contains(): boolean', () => {
    it(`Input: 'Fx', 'Fx', Output: true`, () => {
      expect(Fx('Fx').contains('Fx')).to.equal(true);
    });
    it(`Input: 'Fx', 'Fy', Output: false`, () => {
      expect(Fx('Fx').contains('Fy')).to.equal(false);
    });
  });

  describe('Fx(str: string).verifyBankCardNumber(): boolean', () => {
    it(`Input: '6222600260001072444', Output: true`, () => {
      expect(Fx('6222600260001072444').verifyBankCardNumber()).to.equal(true);
    });

    // bankNo < 16
    it(`Input: '622260026000107', Output: false`, () => {
      expect(Fx('622260026000107').verifyBankCardNumber()).to.equal(false);
    });

    // bankNo > 19
    it(`Input: '622260026000107240923', Output: false`, () => {
      expect(Fx('622260026000107240923').verifyBankCardNumber()).to.equal(false);
    });

    it(`Input: '6228480402564890018', Output: false`, () => {
      expect(Fx('6228480402564890018').verifyBankCardNumber()).to.equal(false);
    });

    it(`Input: '62284804025648900', Output: false`, () => {
      expect(Fx('62284804025648900').verifyBankCardNumber()).to.equal(false);
    });

    it(`Input: '622848040256489001812', Output: false`, () => {
      expect(Fx('6228480402564890018').verifyBankCardNumber()).to.equal(false);
    });
  });

  describe('Fx(str: string).isIP(): boolean', () => {
    it(`Input: '10.5.126.35', Output: true`, () => {
      expect(Fx('10.5.126.35').isIP()).to.equal(true);
    });

    it(`Input: '10.265.265.10', Output: false`, () => {
      expect(Fx('10.265.265.10').isIP()).to.equal(false);
    });
  });

  describe('Fx(str: string).isURL(): boolean', () => {
    it(`Input: 'http://fx.com', Output: true`, () => {
      expect(Fx('http://fx.com').isURL()).to.equal(true);
    });

    it(`Input: 'htp://fx.com', Output: false`, () => {
      expect(Fx('htp://fx.com').isURL()).to.equal(false);
    });
  });

  describe('Fx(str: string).isPhone(): boolean', () => {
    it(`Input: '15209862528', Output: true`, () => {
      expect(Fx('15209862528').isPhone()).to.equal(true);
    });

    it(`Input: '12025586569', Output: false`, () => {
      expect(Fx('12025586569').isPhone()).to.equal(false);
    });
  });

  describe('Fx(str: string).isEmail(): boolean', () => {
    it(`Input: 'pxyamos@163.com', Output: true`, () => {
      expect(Fx('pxyamos@163.com').isEmail()).to.equal(true);
    });

    it(`Input: 'pxyamos@20190101', Output: false`, () => {
      expect(Fx('pxyamos@20190101').isEmail()).to.equal(false);
    });
  });

  describe('Fx(str: string).isAvaiableLength(max: number, min: number): boolean', () => {
    it(`Input: 'Fx', 10, 1, Output: true`, () => {
      expect(Fx('Fx').isAvaiableLength(10, 1)).to.equal(true);
    });

    it(`Input: 'Fx', 10, 5, Output: false`, () => {
      expect(Fx('Fx').isAvaiableLength(10, 5)).to.equal(false);
    });
  });

  describe('Fx(str: string).isIdCard(): boolean', () => {
    // 身份证号码 < 15
    it(`Input: '32010419771011', Output: false`, () => {
      expect(Fx('32010419771011').isIdCard()).to.equal(false);
    });

    // 身份证号码 > 18
    it(`Input: '32010419771011712109', Output: false`, () => {
      expect(Fx('32010419771011712109').isIdCard()).to.equal(false);
    });

    // 校验省份
    it(`Input: '190104197710117121', Output: false`, () => {
      expect(Fx('190104197710117121').isIdCard()).to.equal(false);
    });

    // 15位 年月日
    it(`Input: '320311791706001', Output: false`, () => {
      expect(Fx('320311791706001').isIdCard()).to.equal(false);
    });

    it(`Input: '522422701104245', Output: true`, () => {
      expect(Fx('522422701104245').isIdCard()).to.equal(true);
    });

    // 18位 年月日
    it(`Input: '320104194710117121', Output: false`, () => {
      expect(Fx('320104194710117121').isIdCard()).to.equal(false);
    });

    it(`Input: '220582197517240826', Output: false`, () => {
      expect(Fx('220582197517240826').isIdCard()).to.equal(false);
    });

    it(`Input: '220582197507240826', Output: true`, () => {
      expect(Fx('220582197507240826').isIdCard()).to.equal(true);
    });

    it(`Input: '64052119940907454X', Output: true`, () => {
      expect(Fx('64052119940907454X').isIdCard()).to.equal(true);
    });
  });
});
