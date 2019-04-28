import 'mocha';
import { expect } from 'chai';
import getByte from '@/string/getByte';

describe('getByte', () => {
  it('returns 4', () => {
    expect(getByte('fxly')).to.equal(4);
  });

  it('returns 6', () => {
    expect(getByte('您好Fx')).to.equal(6);
  });

  it('returns 8', () => {
    expect(getByte('您好Fx', 3)).to.equal(8);
  });
});
