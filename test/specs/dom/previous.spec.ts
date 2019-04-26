import 'mocha';
import { expect } from 'chai';
import { createClientEnv, destroyClientEnv } from '../utils';
import previous from '@/dom/previous';

describe('previous', () => {
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
    const $sex = document.querySelector('li.sex');
    const elems = previous($sex);
    expect(elems.length).to.equal(2);
    expect(elems[0].textContent).to.equal('age');
    expect(elems[1].textContent).to.equal('name');
  });

  it('returns one siblings element', () => {
    const $age = document.querySelector('li.age');
    const elems = previous($age);
    expect(elems.length).to.equal(1);
    expect(elems[0].textContent).to.equal('name');
  });

  it('returns empty list', () => {
    const $name = document.querySelector('li.name');
    const elems = previous($name);
    expect(elems.length).to.equal(0);
  });
});
