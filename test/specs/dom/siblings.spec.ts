import 'mocha';
import { expect } from 'chai';
import { createClientEnv, destroyClientEnv } from '../utils';
import siblings from '@/dom/siblings';

describe('siblings', () => {
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

  it('returns li.age and li.sex element', () => {
    const $name = document.querySelector('li.name');
    const elems = siblings($name);
    expect(elems.length).to.equal(2);
    expect(elems[0].textContent).to.equal('age');
    expect(elems[1].textContent).to.equal('sex');
  });

  it('returns li.name and li.sex element', () => {
    const $age = document.querySelector('li.age');
    const elems = siblings($age);
    expect(elems.length).to.equal(2);
    expect(elems[0].textContent).to.equal('name');
    expect(elems[1].textContent).to.equal('sex');
  });

  it('returns li.name and li.age element', () => {
    const $sex = document.querySelector('li.sex');
    const elems = siblings($sex);
    expect(elems.length).to.equal(2);
    expect(elems[0].textContent).to.equal('name');
    expect(elems[1].textContent).to.equal('age');
  });
});
