import 'mocha';
import { expect } from 'chai';
import trim from '@/string/trim';

describe('trim', () => {
  it('remove the left and right whitespace', () => {
    expect(trim(' Fx ')).to.equal('Fx');
  });

  it('remove the left whitespace', () => {
    expect(trim(' Fx')).to.equal('Fx');
  });

  it('remove the right whitespace', () => {
    expect(trim('Fx ')).to.equal('Fx');
  });
});
