import 'mocha';
import { expect } from 'chai';
import startsWith from '@/string/startsWith';

describe('startsWith', () => {
  it('returns true when has captures', () => {
    expect(startsWith('fxtest', 'fx')).to.equal(true);
  });

  it('returns true when the starts large than the input length', () => {
    expect(startsWith('fxtest', 'fx', 10)).to.equal(true);
  });

  it('returns false when the starts less than the input length', () => {
    expect(startsWith('fxtest', 'fx', 1)).to.equal(false);
  });

  it('returns false when no captures', () => {
    expect(startsWith('fxtest', 'Fx')).to.equal(false);
  });

  it('returns false the starts large than the input length', () => {
    expect(startsWith('fxtest', 'Fx', 10)).to.equal(false);
  });
});
