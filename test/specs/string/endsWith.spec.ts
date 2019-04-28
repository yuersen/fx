import 'mocha';
import { expect } from 'chai';
import endsWith from '@/string/endsWith';

describe('endsWith', () => {
  it('returns true when has captures', () => {
    expect(endsWith('testfx', 'fx')).to.equal(true);
  });

  it('returns true when the starts large than the input length', () => {
    expect(endsWith('testfx', 'fx', 10)).to.equal(true);
  });

  it('returns false when the starts less than the input length', () => {
    expect(endsWith('testfx', 'fx', 1)).to.equal(false);
  });

  it('returns false when no captures', () => {
    expect(endsWith('testfx', 'Fx')).to.equal(false);
  });

  it('returns false the starts large than the input length', () => {
    expect(endsWith('testfx', 'Fx')).to.equal(false);
  });
});
