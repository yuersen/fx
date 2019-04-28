import 'mocha';
import { expect } from 'chai';
import isNumber from '@/object/isNumber';

describe('isNumber', () => {
  it('returns true when the parameter is Number', () => {
    expect(isNumber(8090)).to.equal(true);
  });

  it('returns false when the parameter is Null', () => {
    expect(isNumber(null)).to.equal(false);
  });

  it('returns false when the parameter is Function', () => {
    expect(isNumber(function test() {})).to.equal(false);
  });

  it('returns false when the parameter is Date', () => {
    expect(isNumber(new Date())).to.equal(false);
  });

  it('returns false when the parameter is Boolean', () => {
    expect(isNumber(true)).to.equal(false);
  });

  it('returns false when the parameter is Array', () => {
    expect(isNumber([])).to.equal(false);
  });

  it('returns false when the parameter is Object', () => {
    expect(isNumber({})).to.equal(false);
  });

  it('returns false when the parameter is String', () => {
    expect(isNumber('Fx')).to.equal(false);
  });

  it('returns false when the parameter is Undefined', () => {
    expect(isNumber(undefined)).to.equal(false);
  });

  it('returns false when the parameter is RegExp', () => {
    expect(isNumber(new RegExp('Fx'))).to.equal(false);
  });
});
