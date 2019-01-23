import Fx from '../src/fx';
import 'mocha';
import { expect } from 'chai';
import { JSDOM } from 'jsdom';

describe('Fx static methods', () => {
  const dataInJs = [
    '2019',
    2019,
    true,
    null,
    void 0,
    {},
    new Date(),
    new RegExp(''),
    () => {
      // TODO
    },
    [2019]
  ];
  const dataTypes = [
    'string',
    'number',
    'boolean',
    'null',
    'undefined',
    'object',
    'date',
    'regexp',
    'function',
    'array'
  ];

  describe('Fx(): F', () => {
    it('Fx()', () => {
      expect(!Fx().type).to.equal(true);
    });
  });

  describe('Fx.type(o: any): string', () => {
    for (let i = 0; i < 10; i++) {
      const type = dataTypes[i];
      it(`Input: ${type}, Output: ${type}`, () => {
        expect(Fx.type(dataInJs[i])).to.equal(type);
      });
    }
  });

  describe('Fx.isBoolean(o: any): boolean', () => {
    for (let i = 0; i < 10; i++) {
      const type = dataTypes[i];
      it(`Input: ${type}, Output: ${type === 'boolean'}`, () => {
        expect(Fx.isBoolean(dataInJs[i])).to.equal(type === 'boolean');
      });
    }
  });

  describe('Fx.isString(o: any): boolean', () => {
    for (let i = 0; i < 10; i++) {
      const type = dataTypes[i];
      it(`Input: ${type}, Output: ${type === 'string'}`, () => {
        expect(Fx.isString(dataInJs[i])).to.equal(type === 'string');
      });
    }
  });

  describe('Fx.isUndefined(o: any): boolean', () => {
    for (let i = 0; i < 10; i++) {
      const type = dataTypes[i];
      it(`Input: ${type}, Output: ${type === 'undefined'}`, () => {
        expect(Fx.isUndefined(dataInJs[i])).to.equal(type === 'undefined');
      });
    }
  });

  describe('Fx.isNumber(o: any): boolean', () => {
    for (let i = 0; i < 10; i++) {
      const type = dataTypes[i];
      it(`Input: ${type}, Output: ${type === 'number'}`, () => {
        expect(Fx.isNumber(dataInJs[i])).to.equal(type === 'number');
      });
    }
  });

  describe('Fx.isNaN(o: any): boolean', () => {
    for (let i = 0; i < 10; i++) {
      const type = dataTypes[i];
      it(`Input: ${type}, Output: false`, () => {
        expect(Fx.isNaN(dataInJs[i])).to.equal(false);
      });
    }
  });

  describe('Fx.isDate(o: any): boolean', () => {
    for (let i = 0; i < 10; i++) {
      const type = dataTypes[i];
      const result = type === 'date';
      it(`Input: ${type}, Output: ${result}`, () => {
        expect(Fx.isDate(dataInJs[i])).to.equal(result);
      });
    }
  });

  describe('Fx.isFunction(o: any): boolean', () => {
    for (let i = 0; i < 10; i++) {
      const type = dataTypes[i];
      it(`Input: ${type}, Output: ${type === 'function'}`, () => {
        expect(Fx.isFunction(dataInJs[i])).to.equal(type === 'function');
      });
    }
  });

  describe('Fx.isNull(o: any): boolean', () => {
    for (let i = 0; i < 10; i++) {
      const type = dataTypes[i];
      const result = type === 'null';
      it(`Input: ${type}, Output: ${result}`, () => {
        expect(Fx.isNull(dataInJs[i])).to.equal(result);
      });
    }
  });

  describe('Fx.isObject(o: any): boolean', () => {
    for (let i = 0; i < 10; i++) {
      const type = dataTypes[i];
      const result = ['object', 'function', 'date', 'regexp', 'array'].indexOf(type) !== -1;
      it(`Input: ${type}, Output: ${result}`, () => {
        expect(Fx.isObject(dataInJs[i])).to.equal(result);
      });
    }
  });

  describe('Fx.isRegExp(o: any): boolean', () => {
    for (let i = 0; i < 10; i++) {
      const type = dataTypes[i];
      const result = type === 'regexp';
      it(`Input: ${type}, Output: ${result}`, () => {
        expect(Fx.isRegExp(dataInJs[i])).to.equal(result);
      });
    }
  });

  describe('Fx.isArray(o: any): boolean', () => {
    for (let i = 0; i < 10; i++) {
      const type = dataTypes[i];
      const result = type === 'array';
      it(`Input: ${type}, Output: ${result}`, () => {
        expect(Fx.isArray(dataInJs[i])).to.equal(result);
      });
    }
  });

  describe('Fx.guid(): string', () => {
    it(`Output: ${Fx.guid()}`, () => {
      expect(Fx.guid().length).to.equal(36);
    });
  });

  describe('Fx.isElement(o: any): boolean', () => {
    const { window } = new JSDOM(`<!DOCTYPE html><p id="word">Hello world</p>`);
    const $word = window.document.getElementById('word');

    for (let i = 0; i < 10; i++) {
      const type = dataTypes[i];
      const result = false;
      it(`Input: ${type}, Output: ${result}`, () => {
        expect(Fx.isElement(dataInJs[i])).to.equal(result);
      });
    }
    it(`Input: Element, Output: true`, () => {
      expect(Fx.isElement($word)).to.equal(true);
    });
  });

  describe('Fx.isWindow(o: any): boolean', () => {
    const { window } = new JSDOM(`<!DOCTYPE html><p id="word">Hello world</p>`);

    for (let i = 0; i < 10; i++) {
      const type = dataTypes[i];
      const result = false;
      it(`Input: ${type}, Output: ${result}`, () => {
        expect(Fx.isWindow(dataInJs[i])).to.equal(result);
      });
    }
    it(`Input: Element, Output: true`, () => {
      expect(Fx.isWindow(window)).to.equal(true);
    });
  });
});
