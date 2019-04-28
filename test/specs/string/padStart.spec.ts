import 'mocha';
import { expect } from 'chai';
import padStart from '@/string/padStart';

describe('padStart', () => {
  it(`returns '00Fx'`, () => {
    expect(padStart('Fx', 4, '0')).to.equal('00Fx');
  });

  it(`returns '$$$Fx'`, () => {
    expect(padStart('Fx', 5, '$')).to.equal('$$$Fx');
  });

  it('retuns original input when the pad string empty', () => {
    expect(padStart('fx', 10)).to.equal('fx');
  });
});
