import 'mocha';
import { expect } from 'chai';
import camelize from '@/string/camelize';

describe('camelize', () => {
  it(`returns 'fxString'`, () => {
    expect(camelize('fx-string')).to.equal('fxString');
  });

  it(`returns 'getName'`, () => {
    expect(camelize('get_name')).to.equal('getName');
  });
});
