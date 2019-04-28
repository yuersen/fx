import 'mocha';
import { expect } from 'chai';
import createRandomString from '@/string/createRandomString';

describe('createRandomString', () => {
  it('returns empty string', () => {
    expect(createRandomString()).to.equal('');
  });

  it('returns the specified length', () => {
    expect(createRandomString(5).length).to.equal(5);
  });

  it('retuns a different string', () => {
    expect(createRandomString(5) !== createRandomString(5)).to.equal(true);
  });
});
