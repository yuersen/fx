import 'mocha';
import { expect } from 'chai';
import { createClientEnv, destroyClientEnv } from '../utils';
import ancestors from '@/dom/ancestors';

describe('ancestors', () => {
  before(() => {
    // create the client environment
    createClientEnv();
    // add some test dom
    document.getElementById('container').innerHTML = `<ul><li><span class="content"><span></li></ul>`;
  });

  after(() => {
    destroyClientEnv();
  });

  it('returns six ancestors', () => {
    const content = document.querySelector('.content');
    const ancestor = ancestors(content);
    expect(ancestor.length).to.equal(5);
    expect(ancestor[0] === document.querySelector('li')).to.equal(true);
    expect(ancestor[1] === document.querySelector('ul')).to.equal(true);
    expect(ancestor[2] === document.querySelector('#container')).to.equal(true);
    expect(ancestor[3] === document.body).to.equal(true);
  });
});
