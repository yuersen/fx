import 'mocha';
import { expect } from 'chai';
import some from '@/array/some';

describe('some', () => {
  const list = [1, 2, 4, 5];

  it('returns false when no element pass the test', () => {
    expect(some(list, item => item > 6)).to.equal(false);
  });

  it('returns true when a element pass the test', () => {
    expect(some(list, item => item > 2)).to.equal(true);
  });
});
