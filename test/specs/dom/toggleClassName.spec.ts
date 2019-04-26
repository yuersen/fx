import 'mocha';
import { expect } from 'chai';
import { createClientEnv, destroyClientEnv } from '../utils';
import toggleClassName from '@/dom/toggleClassName';

describe('toggleClassName', () => {
  before(() => {
    // create the client environment
    createClientEnv();
  });

  after(() => {
    destroyClientEnv();
  });

  it('there are selected class on element', () => {
    const container = document.getElementById('container');
    toggleClassName(container, 'selected');
    expect(container.className.indexOf('selected') !== -1).to.equal(true);
  });

  it('there are no selected class on element', () => {
    const container = document.getElementById('container');
    toggleClassName(container, 'selected');
    expect(container.className.indexOf('selected') === -1).to.equal(true);
  });
});
