import 'mocha';
import { expect } from 'chai';
import { createClientEnv, destroyClientEnv } from '../utils';
import append from '@/dom/append';

describe('append', () => {
  before(() => {
    // create the client environment
    createClientEnv();
  });

  after(() => {
    destroyClientEnv();
  });

  it('appends a div.content into div.wrap', () => {
    const container = document.getElementById('container');
    const content = document.createElement('div');
    content.className = 'content';
    append(container, content);
    expect(content === container.querySelector('div.content')).to.equal(true);
  });
});
