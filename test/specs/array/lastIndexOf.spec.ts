import 'mocha';
import { expect } from 'chai';
import lastIndexOf from '@/array/lastIndexOf';

describe('lastIndexOf', () => {
  const list = [10, 20, 10, 30];

  it('retuns -1 when no element is matched', () => {
    expect(lastIndexOf(list, 15)).to.equal(-1);
  });

  it('returns index when element is matched', () => {
    expect(lastIndexOf(list, 20)).to.equal(1);
  });

  it('returns -1 when the list is empty', () => {
    expect(lastIndexOf([], 10)).to.equal(-1);
  });

  it('returns -1 when the start larger than the length of list', () => {
    expect(lastIndexOf(list, 10, 5)).to.equal(-1);
  });

  it('returns index when the start less than zero', () => {
    expect(lastIndexOf(list, 10, -3)).to.equal(0);
  });
});
