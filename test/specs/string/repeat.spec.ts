import 'mocha';
import { expect } from 'chai';
import repeat from '@/string/repeat';

describe('repeat', () => {
  it(`returns 'Fx'`, () => {
    expect(repeat('Fx')).to.equal('Fx');
  });

  it(`returns 'FxFx'`, () => {
    expect(repeat('Fx', 2)).to.equal('FxFx');
  });

  it(`returns 'FxFxFx'`, () => {
    expect(repeat('Fx', 3)).to.equal('FxFxFx');
  });
});
