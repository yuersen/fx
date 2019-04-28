import 'mocha';
import { expect } from 'chai';
import isArray from '@/object/isArray';

describe('isArray', () => {
  it('returns true when the parameter is Array', () => {
    expect(isArray([])).to.equal(true);
  });

  it('returns false when the parameter is Object', () => {
    expect(isArray({})).to.equal(false);
  });

  it('returns false when the parameter is String', () => {
    expect(isArray('Fx')).to.equal(false);
  });

  it('returns false when the parameter is Number', () => {
    expect(isArray(8090)).to.equal(false);
  });

  it('returns false when the parameter is Boolean', () => {
    expect(isArray(true)).to.equal(false);
  });

  it('returns false when the parameter is Null', () => {
    expect(isArray(null)).to.equal(false);
  });

  it('returns false when the parameter is Undefined', () => {
    expect(isArray(undefined)).to.equal(false);
  });

  it('returns false when the parameter is Function', () => {
    expect(isArray(function test() {})).to.equal(false);
  });

  it('returns false when the parameter is Date', () => {
    expect(isArray(new Date())).to.equal(false);
  });

  it('returns false when the parameter is RegExp', () => {
    expect(isArray(new RegExp('Fx'))).to.equal(false);
  });
});
