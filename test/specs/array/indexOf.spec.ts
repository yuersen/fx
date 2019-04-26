import 'mocha';
import { expect } from 'chai';
import indexOf from '@/array/indexOf';

describe('indexOf', () => {
  const list = [10, 20, 10, 30];

  it('retuns -1 when no element is matched', () => {
    expect(indexOf(list, 15)).to.equal(-1);
  });

  it('returns index when element is matched', () => {
    expect(indexOf(list, 20)).to.equal(1);
  });

  it('returns -1 when the list is empty', () => {
    expect(indexOf([], 10)).to.equal(-1);
  });

  it('returns -1 when the start larger than the length of list', () => {
    expect(indexOf(list, 10, 5)).to.equal(-1);
  });

  it('returns index when the start less than zero', () => {
    expect(indexOf(list, 10, -3)).to.equal(2);
  });
});
