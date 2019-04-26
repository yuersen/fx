import 'mocha';
import { expect } from 'chai';
import { createClientEnv, destroyClientEnv } from '../utils';
import query from '@/dom/query';

describe('query', () => {
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

  it('returns a element by using default document', () => {
    const li = query('li');
    expect(li.textContent).to.equal('name');
  });

  it('returns a element when specify the context', () => {
    const li = query('li', document.getElementById('container'));
    expect(li.textContent).to.equal('name');
  });
});
