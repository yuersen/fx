import 'mocha';
import { expect } from 'chai';
import { createClientEnv, destroyClientEnv } from '../utils';
import removeClassName from '@/dom/removeClassName';

describe('removeClassName', () => {
  before(() => {
    // create the client environment
    createClientEnv();
  });

  after(() => {
    destroyClientEnv();
  });

  it('remove the className', () => {
    const container = document.getElementById('container');
    container.className = 'container selected';
    expect(container.className.indexOf('selected') !== -1).to.equals(true);
    removeClassName(container, 'selected');
    expect(container.className.indexOf('selected') === -1).to.equals(true);
  });
});
