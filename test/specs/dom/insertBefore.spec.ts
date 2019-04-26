import 'mocha';
import { expect } from 'chai';
import { createClientEnv, destroyClientEnv } from '../utils';
import insertBefore from '@/dom/insertBefore';

describe('insertBefore', () => {
  before(() => {
    // create the client environment
    createClientEnv();
  });

  after(() => {
    destroyClientEnv();
  });

  it('add a element after container element', () => {
    const container = document.getElementById('container');
    const outerBefore = document.createElement('div');
    outerBefore.id = 'outerBefore';
    insertBefore(container, outerBefore);
    expect(container.previousSibling === outerBefore).to.equal(true);

    // remove the dom to prevent affecting other tests
    document.body.removeChild(outerBefore);
  });

  it('add a html fragment after container element', () => {
    const container = document.getElementById('container');
    insertBefore(container, '<div id="outerBefore">outerBefore</div>');
    expect(
      document.getElementById('outerBefore') === container.previousSibling
    ).to.equal(true);
  });
});
