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
});