import 'mocha';
import { expect } from 'chai';
import isDate from '@/object/isDate';

describe('isDate', () => {
  it('returns true when the parameter is Date', () => {
    expect(isDate(new Date())).to.equal(true);
  });

  it('returns false when the parameter is Boolean', () => {
    expect(isDate(true)).to.equal(false);
  });

  it('returns false when the parameter is Array', () => {
    expect(isDate([])).to.equal(false);
  });

  it('returns false when the parameter is Object', () => {
    expect(isDate({})).to.equal(false);
  });

  it('returns false when the parameter is String', () => {
    expect(isDate('Fx')).to.equal(false);
  });

  it('returns false when the parameter is Number', () => {
    expect(isDate(8090)).to.equal(false);
  });

  it('returns false when the parameter is Null', () => {
    expect(isDate(null)).to.equal(false);
  });

  it('returns false when the parameter is Undefined', () => {
    expect(isDate(undefined)).to.equal(false);
  });

  it('returns false when the parameter is Function', () => {
    expect(isDate(function test() {})).to.equal(false);
  });

  it('returns false when the parameter is RegExp', () => {
    expect(isDate(new RegExp('Fx'))).to.equal(false);
  });
});
