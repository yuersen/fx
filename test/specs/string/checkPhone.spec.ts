import 'mocha';
import { expect } from 'chai';
import checkPhone from '@/string/checkPhone';

describe('checkPhone', () => {
  it('returns true', () => {
    expect(checkPhone('15209862528')).to.equal(true);
  });

  it('returns false', () => {
    expect(checkPhone('19062653230')).to.equal(false);
  });
});
