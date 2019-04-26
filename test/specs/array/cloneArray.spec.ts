import 'mocha';
import { expect } from 'chai';
import cloneArray from '@/array/cloneArray';

describe('cloneArray', () => {
  it(`Clone a empty array`, () => {
    expect(cloneArray([]).join('')).to.equal('');
  });

  it(`Clone a new array`, () => {
    expect(cloneArray([1, 3]).join('')).to.equal('13');
  });
});
