import 'mocha';
import { expect } from 'chai';
import { createClientEnv, destroyClientEnv } from '../utils';
import recursivelyCollect from '@/dom/recursivelyCollect';

describe('recursivelyCollect', () => {
  before(() => {
    // create the client environment
    createClientEnv();
    document.getElementById('container').innerHTML = `
      <ul>
        <li class="name">name</li>
        <li class="age">age</li>
        <li class="sex">sex</li>
      </ul>
    `;
  });

  after(() => {
    destroyClientEnv();
  });

  it('returns two siblings element', () => {
    const $name = document.querySelector('li.name');
    const nexts = recursivelyCollect($name, 'nextSibling');
    expect(nexts.length).to.equal(2);
    expect(nexts[0].textContent).to.equal('age');
    expect(nexts[1].textContent).to.equal('sex');
  });

  it('returns two siblings element', () => {
    const $sex = document.querySelector('li.sex');
    const previou = recursivelyCollect($sex, 'previousSibling');
    expect(previou.length).to.equal(2);
    expect(previou[0].textContent).to.equal('age');
    expect(previou[1].textContent).to.equal('name');
  });
});
