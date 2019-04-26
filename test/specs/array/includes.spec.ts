import 'mocha';
import { expect } from 'chai';
import includes from '@/array/includes';

describe('includes', () => {
  const list = [10, 20, 30];

  it('returns false when no element is searched', () => {
    expect(includes(list, 5)).to.equal(false);
  });

  it('returns true when element is searched', () => {
    expect(includes(list, 10)).to.equal(true);
  });

  it('returns false when list is empty', () => {
    expect(includes([], 10)).to.equal(false);
  });

  it('returns false when the start larger than the element index', () => {
    expect(includes(list, 10, 1)).to.equal(false);
  });

  it('returns false when the start larger than the list length', () => {
    expect(includes(list, 10, 4)).to.equal(false);
  });
});
