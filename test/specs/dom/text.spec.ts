import 'mocha';
import { expect } from 'chai';
import { createClientEnv, destroyClientEnv } from '../utils';
import text from '@/dom/text';

describe('text', () => {
  before(() => {
    // create the client environment
    createClientEnv();
  });

  after(() => {
    destroyClientEnv();
  });

  it('set element text', () => {
    const container = document.getElementById('container');
    expect(text(container)).to.equal('');

    const result = text(container, 'container');
    expect(container.innerText).to.equal('container');
    expect(result === container).to.equal(true);
  });
});
