import 'mocha';
import { expect } from 'chai';
import shuffle from '@/array/shuffle';

describe('shuffle', () => {
  const list = [1, 2, 3, 4, 5];

  it('returns a unequal list in every loop', () => {
    for (let i = 0; i < 3; i++) {
      expect(shuffle(list).join('')).not.to.equal(list.join(''));
    }
  });
});
