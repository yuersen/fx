import 'mocha';
import { expect } from 'chai';
import { createClientEnv, destroyClientEnv } from '../utils';
import hide from '@/dom/hide';

describe('hide', () => {
  before(() => {
    // create the client environment
    createClientEnv();
  });

  after(() => {
    destroyClientEnv();
  });

  it('hide the wrap element', () => {
    const container = document.getElementById('container');

    expect(container.style.display !== 'none').to.equal(true);

    hide(container);
    expect(container.style.display === 'none').to.equal(true);
  });
});
