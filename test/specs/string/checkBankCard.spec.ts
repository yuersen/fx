import 'mocha';
import { expect } from 'chai';
import checkBankCard from '@/string/checkBankCard';

describe('checkBankCard', () => {
  it('returns true', () => {
    expect(checkBankCard('6222600260001072444')).to.equal(true);
  });

  it('returns false when the length of parameter is less than 16', () => {
    expect(checkBankCard('622260026000107')).to.equal(false);
  });
  
  it('returns false when the length of parameter is large than 19', () => {
    expect(checkBankCard('622260026000107240923')).to.equal(false);
  });

  it('returns false when the parameter contains non-numerals', () => {
    expect(checkBankCard('6222600260001072444abc')).to.equal(false);
  });
});
