import 'mocha';
import { expect } from 'chai';
import padEnd from '@/string/padEnd';

describe('padEnd', () => {
  it(`returns 'Fx00'`, () => {
    expect(padEnd('Fx', 4, '0')).to.equal('Fx00');
  });

  it(`returns 'Fx$$$$'`, () => {
    expect(padEnd('Fx', 6, '$')).to.equal('Fx$$$$');
  });

  it('retuns original input when the pad string empty', () => {
    expect(padEnd('fx', 10)).to.equal('fx');
  });
});
