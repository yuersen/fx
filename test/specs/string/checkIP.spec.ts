import 'mocha';
import { expect } from 'chai';
import checkIP from '@/string/checkIP';

describe('checkIP', () => {
  it('returns true', () => {
    expect(checkIP('127.0.0.1')).to.equal(true);
  });

  it('returns false', () => {
    expect(checkIP('269.290.234.20')).to.equal(false);
  });
});
