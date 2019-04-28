import 'mocha';
import { expect } from 'chai';
import { createClientEnv, destroyClientEnv } from '../utils';
import isElement from '@/object/isElement';

describe('isElement', () => {
  before(() => {
    // create the client environment
    createClientEnv();
  });

  after(() => {
    destroyClientEnv();
  });

  it('returns true when the parameter is Element', () => {
    expect(isElement(document.getElementById('container'))).to.equal(true);
  });

  it('returns false when the parameter is Date', () => {
    expect(isElement(new Date())).to.equal(false);
  });

  it('returns false when the parameter is Boolean', () => {
    expect(isElement(true)).to.equal(false);
  });

  it('returns false when the parameter is Array', () => {
    expect(isElement([])).to.equal(false);
  });

  it('returns false when the parameter is Object', () => {
    expect(isElement({})).to.equal(false);
  });

  it('returns false when the parameter is String', () => {
    expect(isElement('Fx')).to.equal(false);
  });

  it('returns false when the parameter is Number', () => {
    expect(isElement(8090)).to.equal(false);
  });

  it('returns false when the parameter is Null', () => {
    expect(isElement(null)).to.equal(false);
  });

  it('returns false when the parameter is Undefined', () => {
    expect(isElement(undefined)).to.equal(false);
  });

  it('returns false when the parameter is Function', () => {
    expect(isElement(function test() {})).to.equal(false);
  });

  it('returns false when the parameter is RegExp', () => {
    expect(isElement(new RegExp('Fx'))).to.equal(false);
  });
});
