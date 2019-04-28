import 'mocha';
import { expect } from 'chai';
import hasChinese from '@/string/hasChinese';

describe('hasChinese', () => {
  it('returns true', () => {
    expect(hasChinese('您好')).to.equal(true);
  });

  it('returns false', () => {
    expect(hasChinese('Fx')).to.equal(false);
  });
});
