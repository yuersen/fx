import 'mocha';
import { expect } from 'chai';
import isFunction from '@/object/isFunction';

describe('isFunction', () => {
  it('returns true when the parameter is Function', () => {
    expect(isFunction(function test() {})).to.equal(true);
  });

  it('returns false when the parameter is Date', () => {
    expect(isFunction(new Date())).to.equal(false);
  });

  it('returns false when the parameter is Boolean', () => {
    expect(isFunction(true)).to.equal(false);
  });

  it('returns false when the parameter is Array', () => {
    expect(isFunction([])).to.equal(false);
  });

  it('returns false when the parameter is Object', () => {
    expect(isFunction({})).to.equal(false);
  });

  it('returns false when the parameter is String', () => {
    expect(isFunction('Fx')).to.equal(false);
  });

  it('returns false when the parameter is Number', () => {
    expect(isFunction(8090)).to.equal(false);
  });

  it('returns false when the parameter is Null', () => {
    expect(isFunction(null)).to.equal(false);
  });

  it('returns false when the parameter is Undefined', () => {
    expect(isFunction(undefined)).to.equal(false);
  });

  it('returns false when the parameter is RegExp', () => {
    expect(isFunction(new RegExp('Fx'))).to.equal(false);
  });
});
