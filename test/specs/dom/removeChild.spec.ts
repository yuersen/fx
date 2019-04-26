import 'mocha';
import { expect } from 'chai';
import { createClientEnv, destroyClientEnv } from '../utils';
import removeChild from '@/dom/removeChild';

describe('removeChild', () => {
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

  it('remove all child node', () => {
    const ul = document.querySelector('ul');
    expect(ul.children.length).to.equal(3);
    const result = removeChild(ul);
    expect(result === ul).to.equal(true);
    expect(ul.children.length).to.equal(0);
  });
});
