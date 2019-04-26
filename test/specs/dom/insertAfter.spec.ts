import 'mocha';
import { expect } from 'chai';
import { createClientEnv, destroyClientEnv } from '../utils';
import insertAfter from '@/dom/insertAfter';

describe('insertAfter', () => {
  before(() => {
    // create the client environment
    createClientEnv();
  });

  after(() => {
    destroyClientEnv();
  });

  it('add a element after container element', () => {
    const container = document.getElementById('container');
    const inner = document.createElement('div');
    inner.id = 'inner';
    insertAfter(container, inner);
    expect(container.nextSibling === inner).to.equal(true);

    // remove the dom to prevent affecting other tests
    document.body.removeChild(inner);
  });

  it('add a html fragment after container element', () => {
    const container = document.getElementById('container');
    insertAfter(container, '<div id="inner">inner</div>');
    expect(document.getElementById('inner') === container.nextSibling).to.equal(
      true
    );
  });
});
