import 'mocha';
import { expect } from 'chai';
import { createClientEnv, destroyClientEnv } from '../utils';
import getClassName from '@/dom/getClassName';

describe('getClassName', () => {
  before(() => {
    // create the client environment
    createClientEnv();
  });

  after(() => {
    destroyClientEnv();
  });

  it('there are class on element', () => {
    const classes = getClassName(document.getElementById('container'));
    expect(typeof classes === 'object').to.equal(true);
    expect(classes.join()).to.equal('container');
  });
});
