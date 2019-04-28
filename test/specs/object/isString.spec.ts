import 'mocha';
import { expect } from 'chai';
import isString from '@/object/isString';

describe('isString', () => {
  it('returns true when the parameter is String', () => {
    expect(isString('Fx')).to.equal(true);
  });

  it('returns false when the parameter is Number', () => {
    expect(isString(8090)).to.equal(false);
  });

  it('returns false when the parameter is Null', () => {
    expect(isString(null)).to.equal(false);
  });

  it('returns false when the parameter is Function', () => {
    expect(isString(function test() {})).to.equal(false);
  });

  it('returns false when the parameter is Date', () => {
    expect(isString(new Date())).to.equal(false);
  });

  it('returns false when the parameter is Boolean', () => {
    expect(isString(true)).to.equal(false);
  });

  it('returns false when the parameter is Array', () => {
    expect(isString([])).to.equal(false);
  });

  it('returns false when the parameter is Object', () => {
    expect(isString({})).to.equal(false);
  });

  it('returns false when the parameter is Undefined', () => {
    expect(isString(undefined)).to.equal(false);
  });

  it('returns false when the parameter is RegExp', () => {
    expect(isString(new RegExp('Fx'))).to.equal(false);
  });
});
