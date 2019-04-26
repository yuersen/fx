import 'mocha';
import { expect } from 'chai';
import { createClientEnv, destroyClientEnv } from '../utils';
import html from '@/dom/html';

describe('html', () => {
  before(() => {
    // create the client environment
    createClientEnv();

    document.getElementById('container').innerHTML = `<div class="content">content</div>`;
  });

  after(() => {
    destroyClientEnv();
  });

  it('gets container element innerTHML', () => {
    const container = document.getElementById('container');
    const innerHtml = html(container);
    expect((innerHtml as string).replace(/[\r\n]/g, '')).to.equal(`<div class="content">content</div>`);
  });

  it('sets container element innerHTML', () => {
    const container = document.getElementById('container');
    const result = html(container, '<p class="pap">pap</p>');
    expect(container === result).to.equal(true);
    expect(container.querySelector('.pap').textContent).to.equal('pap');
  });
});
