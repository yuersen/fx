import 'mocha';
import { expect } from 'chai';
import isUndefined from '@/object/isUndefined';

describe('isUndefined', () => {
  it('returns true when the parameter is Undefined', () => {
    expect(isUndefined(undefined)).to.equal(true);
  });

  it('returns false when the parameter is String', () => {
    expect(isUndefined('Fx')).to.equal(false);
  });

  it('returns false when the parameter is Number', () => {
    expect(isUndefined(8090)).to.equal(false);
  });

  it('returns false when the parameter is Null', () => {
    expect(isUndefined(null)).to.equal(false);
  });

  it('returns false when the parameter is Function', () => {
    expect(isUndefined(function test() {})).to.equal(false);
  });

  it('returns false when the parameter is Date', () => {
    expect(isUndefined(new Date())).to.equal(false);
  });

  it('returns false when the parameter is Boolean', () => {
    expect(isUndefined(true)).to.equal(false);
  });

  it('returns false when the parameter is Array', () => {
    expect(isUndefined([])).to.equal(false);
  });

  it('returns false when the parameter is Object', () => {
    expect(isUndefined({})).to.equal(false);
  });

  it('returns false when the parameter is RegExp', () => {
    expect(isUndefined(new RegExp('Fx'))).to.equal(false);
  });
});
