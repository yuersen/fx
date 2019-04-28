import 'mocha';
import { expect } from 'chai';
import isNaN from '@/object/isNaN';

describe('isNaN', () => {
  it('returns true when the parameter is a Illegal number', () => {
    expect(isNaN(parseInt('Fx'))).to.equal(true);
  });

  it('returns false when the parameter is Function', () => {
    expect(isNaN(function test() {})).to.equal(false);
  });

  it('returns false when the parameter is Date', () => {
    expect(isNaN(new Date())).to.equal(false);
  });

  it('returns false when the parameter is Boolean', () => {
    expect(isNaN(true)).to.equal(false);
  });

  it('returns false when the parameter is Array', () => {
    expect(isNaN([])).to.equal(false);
  });

  it('returns false when the parameter is Object', () => {
    expect(isNaN({})).to.equal(false);
  });

  it('returns false when the parameter is String', () => {
    expect(isNaN('Fx')).to.equal(false);
  });

  it('returns false when the parameter is Number', () => {
    expect(isNaN(8090)).to.equal(false);
  });

  it('returns false when the parameter is Null', () => {
    expect(isNaN(null)).to.equal(false);
  });

  it('returns false when the parameter is Undefined', () => {
    expect(isNaN(undefined)).to.equal(false);
  });

  it('returns false when the parameter is RegExp', () => {
    expect(isNaN(new RegExp('Fx'))).to.equal(false);
  });
});
