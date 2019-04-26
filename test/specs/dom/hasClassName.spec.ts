import 'mocha';
import { expect } from 'chai';
import { createClientEnv, destroyClientEnv } from '../utils';
import hasClassName from '@/dom/hasClassName';

describe('hasClassName', () => {
  before(() => {
    // create the client environment
    createClientEnv();
  });

  after(() => {
    destroyClientEnv();
  });

  it('returns true', () => {
    const container = document.getElementById('container');
    expect(hasClassName(container, 'container')).to.equal(true);
  });

  it('returns false', () => {
    const container = document.getElementById('container');
    expect(hasClassName(container, 'Fx')).to.equal(false);
  });
});
