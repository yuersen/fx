import 'mocha';
import { expect } from 'chai';
import { createClientEnv, destroyClientEnv } from '../utils';
import show from '@/dom/show';

describe('show', () => {
  before(() => {
    // create the client environment
    createClientEnv();
    document.getElementById('container').innerHTML = `
      <ul>
        <li class="name" style="display: none;">name</li>
        <li class="age">age</li>
        <li class="sex">sex</li>
      </ul>
    `;
  });

  after(() => {
    destroyClientEnv();
  });

  it('show element', () => {
    const name = document.querySelector('li.name');
    expect((name as any).style.display).to.equal('none');
    const result = show(name);
    expect((name as any).style.display).to.equal('');
    expect(result === name).to.equal(true);
  });
});
