import 'mocha';
import { expect } from 'chai';
import unique from '@/array/unique';

describe('unique', () => {
  it('returns a list', () => {
    expect(unique([1, 2, '1', '3', 4, 3]).join('')).to.equal('112334');
  });

  it('returns a list with no duplicate elements', () => {
    expect(unique([1, 2, 1, 3, 4, 3]).join('')).to.equal('1234');
  });
});
