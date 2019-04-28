import 'mocha';
import { expect } from 'chai';
import isBoolean from '@/object/isBoolean';

describe('isBoolean', () => {
  it('returns true when the parameter is Boolean', () => {
    expect(isBoolean(true)).to.equal(true);
  });

  it('returns false when the parameter is Array', () => {
    expect(isBoolean([])).to.equal(false);
  });

  it('returns false when the parameter is Object', () => {
    expect(isBoolean({})).to.equal(false);
  });

  it('returns false when the parameter is String', () => {
    expect(isBoolean('Fx')).to.equal(false);
  });

  it('returns false when the parameter is Number', () => {
    expect(isBoolean(8090)).to.equal(false);
  });

  it('returns false when the parameter is Null', () => {
    expect(isBoolean(null)).to.equal(false);
  });

  it('returns false when the parameter is Undefined', () => {
    expect(isBoolean(undefined)).to.equal(false);
  });

  it('returns false when the parameter is Function', () => {
    expect(isBoolean(function test() {})).to.equal(false);
  });

  it('returns false when the parameter is Date', () => {
    expect(isBoolean(new Date())).to.equal(false);
  });

  it('returns false when the parameter is RegExp', () => {
    expect(isBoolean(new RegExp('Fx'))).to.equal(false);
  });
});
