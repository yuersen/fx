import 'mocha';
import { expect } from 'chai';
import checkIdCard from '@/string/checkIdCard';

describe('checkIdCard', () => {
  it(`returns false when the length of input is less than 15`, () => {
    expect(checkIdCard('32010419771011')).to.equal(false);
  });

  it(`returns false when the length of input is large than 18`, () => {
    expect(checkIdCard('32010419771011712109')).to.equal(false);
  });

  it(`returns false when the input contains undefind province`, () => {
    expect(checkIdCard('190104197710117121')).to.equal(false);
  });

  it(`returns false when the input contains error year, month and date`, () => {
    expect(checkIdCard('320311791706001')).to.equal(false);
  });

  it(`returns false when the input contains error year, month and date`, () => {
    expect(checkIdCard('320104194710117121')).to.equal(false);
  });

  it(`returns true when the length is 15 and contains right information`, () => {
    expect(checkIdCard('220582197507240826')).to.equal(true);
  });

  it(`returns true when the length is 18 and contains right information`, () => {
    expect(checkIdCard('64052119940907454X')).to.equal(true);
  });
})