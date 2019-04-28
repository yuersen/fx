import 'mocha';
import { expect } from 'chai';
import checkURL from '@/string/checkURL';

describe('checkURL', () => {
  it('returns true', () => {
    expect(checkURL('http://www.fx.com')).to.equal(true);
  });

  it('returns false', () => {
    expect(checkURL('htp://www.fx.com')).to.equal(false);
  });
});
