import 'mocha';
import { expect } from 'chai';
import { createClientEnv, destroyClientEnv } from '../utils';
import prepend from '@/dom/prepend';

describe('prepend', () => {
  before(() => {
    // create the client environment
    createClientEnv();
  });

  after(() => {
    destroyClientEnv();
  });

  it('add a div.content element into div.container', () => {
    const container = document.getElementById('container');
    const content = document.createElement('div');
    prepend(container, content);
    expect(content === container.firstChild).to.equal(true);
    // remove the dom to prevent affecting other tests
    container.removeChild(content);
  });

  it('add a html fragment into div.container', () => {
    const container = document.getElementById('container');
    prepend(container, '<div class="content">content</div>');
    const content = document.querySelector('div.content');
    expect(content === container.firstChild).to.equal(true);
    // remove the dom to prevent affecting other tests
    container.removeChild(content);
  });
});
