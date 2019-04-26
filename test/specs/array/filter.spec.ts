import 'mocha';
import { expect } from 'chai';
import filter from '@/array/filter';

describe('filter', () => {
  const ages = [10, 20, 30];
  it(`returns a list that all element greater than 15`, () => {
    expect(filter(ages, age => age > 15).join('')).to.equal('2030');
  });

  it(`returns a empty list`, () => {
    expect(filter(ages, age => age > 30).join('')).to.equal('');
  });
});
