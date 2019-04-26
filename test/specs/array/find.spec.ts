import 'mocha';
import { expect } from 'chai';
import find from '@/array/find';

describe('find', () => {
  const names = ['fxyu', 'fiyu', 'ftyu'];
  it(`returns a value`, () => {
    expect(find(names, name => name.indexOf('fiy') !== -1)).to.equal('fiyu');
  });

  it(`returns a undefind`, () => {
    expect(find(names, name => name.indexOf('foy') !== -1)).to.equal(undefined);
  });
});
