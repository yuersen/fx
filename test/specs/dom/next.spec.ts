import 'mocha';
import { expect } from 'chai';
import { createClientEnv, destroyClientEnv } from '../utils';
import next from '@/dom/next';

describe('next', () => {
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
    const nexts = next($name);
    expect(nexts.length).to.equal(2);
    expect(nexts[0].textContent).to.equal('age');
    expect(nexts[1].textContent).to.equal('sex');
  });

  it('returns one siblings element', () => {
    const $age = document.querySelector('li.age');
    const nexts = next($age);
    expect(nexts.length).to.equal(1);
    expect(nexts[0].textContent).to.equal('sex');
  });

  it('returns empty list', () => {
    const $sex = document.querySelector('li.sex');
    const nexts = next($sex);
    expect(nexts.length).to.equal(0);
  });
});
