import 'mocha';
import { expect } from 'chai';
import trimRight from '@/string/trimRight';

describe('trimRight', () => {
  it('remove right whitespace', () => {
    expect(trimRight(' Fx ')).to.equal(' Fx');
  });

  it('remove right whitespace', () => {
    expect(trimRight(' Fx')).to.equal(' Fx');
  });

  it('returns original input', () => {
    expect(trimRight('Fx')).to.equal('Fx');
  });
});
