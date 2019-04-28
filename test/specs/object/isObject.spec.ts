import 'mocha';
import { expect } from 'chai';
import isObject from '@/object/isObject';

describe('isObject', () => {
  it('returns false when the parameter is Number', () => {
    expect(isObject(8090)).to.equal(false);
  });

  it('returns false when the parameter is Null', () => {
    expect(isObject(null)).to.equal(false);
  });

  it('returns true when the parameter is Function', () => {
    expect(isObject(function test() {})).to.equal(true);
  });

  it('returns true when the parameter is Date', () => {
    expect(isObject(new Date())).to.equal(true);
  });

  it('returns false when the parameter is Boolean', () => {
    expect(isObject(true)).to.equal(false);
  });

  it('returns true when the parameter is Array', () => {
    expect(isObject([])).to.equal(true);
  });

  it('returns true when the parameter is Object', () => {
    expect(isObject({})).to.equal(true);
  });

  it('returns false when the parameter is String', () => {
    expect(isObject('Fx')).to.equal(false);
  });

  it('returns false when the parameter is Undefined', () => {
    expect(isObject(undefined)).to.equal(false);
  });

  it('returns true when the parameter is RegExp', () => {
    expect(isObject(new RegExp('Fx'))).to.equal(true);
  });
});
