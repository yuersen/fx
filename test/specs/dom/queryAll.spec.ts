import 'mocha';
import { expect } from 'chai';
import { createClientEnv, destroyClientEnv } from '../utils';
import queryAll from '@/dom/queryAll';

describe('queryAll', () => {
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
    const li = queryAll('li');
    expect(li.length).to.equal(3);
    expect(li[0].textContent).to.equal('name');
  });

  it('returns a element when specify the context', () => {
    const li = queryAll('li', document.getElementById('container'));
    expect(li.length).to.equal(3);
    expect(li[0].textContent).to.equal('name');
  });
});
