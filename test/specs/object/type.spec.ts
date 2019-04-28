import 'mocha';
import { expect } from 'chai';
import type from '@/object/type';

describe('type', () => {
  it(`returns 'string'`, () => {
    expect(type('Fx')).to.equal('string');
  });
  
  it(`returns 'number'`, () => {
    expect(type(2019)).to.equal('number');
  });
  
  it(`returns 'boolean'`, () => {
    expect(type(true)).to.equal('boolean');
  });

  it(`returns 'null'`, () => {
    expect(type(null)).to.equal('null');
  });

  it(`returns 'undefined'`, () => {
    expect(type(undefined)).to.equal('undefined');
  });
  
  it(`returns 'object'`, () => {
    expect(type({})).to.equal('object');
  });
  
  it(`returns 'function'`, () => {
    expect(type(function test() {})).to.equal('function');
  });
  
  it(`returns 'array'`, () => {
    expect(type([])).to.equal('array');
  });

  it(`returns 'date'`, () => {
    expect(type(new Date())).to.equal('date');
  });

  it(`returns 'regexp'`, () => {
    expect(type(/^fx/g)).to.equal('regexp');
  });
});