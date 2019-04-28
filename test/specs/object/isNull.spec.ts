import 'mocha';
import { expect } from 'chai';
import isNull from '@/object/isNull';

describe('isNull', () => {
  it('returns true when the parameter is Null', () => {
    expect(isNull(null)).to.equal(true);
  });

  it('returns false when the parameter is Function', () => {
    expect(isNull(function test() {})).to.equal(false);
  });

  it('returns false when the parameter is Date', () => {
    expect(isNull(new Date())).to.equal(false);
  });

  it('returns false when the parameter is Boolean', () => {
    expect(isNull(true)).to.equal(false);
  });

  it('returns false when the parameter is Array', () => {
    expect(isNull([])).to.equal(false);
  });

  it('returns false when the parameter is Object', () => {
    expect(isNull({})).to.equal(false);
  });

  it('returns false when the parameter is String', () => {
    expect(isNull('Fx')).to.equal(false);
  });

  it('returns false when the parameter is Number', () => {
    expect(isNull(8090)).to.equal(false);
  });

  it('returns false when the parameter is Undefined', () => {
    expect(isNull(undefined)).to.equal(false);
  });

  it('returns false when the parameter is RegExp', () => {
    expect(isNull(new RegExp('Fx'))).to.equal(false);
  });
});
