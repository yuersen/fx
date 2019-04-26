import 'mocha';
import { expect } from 'chai';
import every from '@/array/every';

describe('every', () => {
  const list = [10, 20, 30, 40, 50];
  it(`returns false`, () => {
    expect(every(list, item => item > 20)).to.equal(false);
  });

  it(`returns true`, () => {
    expect(every(list, item => item >= 10)).to.equal(true);
  });
});
