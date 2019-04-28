import 'mocha';
import { expect } from 'chai';
import trimLeft from '@/string/trimLeft';

describe('trimLeft', () => {
  it('remove the left and right whitespace', () => {
    expect(trimLeft(' Fx ')).to.equal('Fx ');
  });

  it('remove the left whitespace', () => {
    expect(trimLeft(' Fx')).to.equal('Fx');
  });

  it('returns original input', () => {
    expect(trimLeft('Fx')).to.equal('Fx');
  });
});
