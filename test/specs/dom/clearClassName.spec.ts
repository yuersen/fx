import 'mocha';
import { expect } from 'chai';
import { createClientEnv, destroyClientEnv } from '../utils';
import clearClassName from '@/dom/clearClassName';

describe('clearClassName', () => {
  before(() => {
    // create the client environment
    createClientEnv();
  });

  after(() => {
    destroyClientEnv();
  });

  it('returns the same element', () => {
    const container = document.getElementById('container');
    const processed = clearClassName(container);
    expect(container === processed).to.equal(true);
  });

  it('there are no class on element', () => {
    const container = document.getElementById('container');
    expect(container.className.indexOf('container') === -1).to.equal(true);
  });
});
