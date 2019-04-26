import 'mocha';
import { expect } from 'chai';
import { createClientEnv, destroyClientEnv } from '../utils';
import removeNode from '@/dom/removeNode';

describe('removeNode', () => {
  before(() => {
    // create the client environment
    createClientEnv();
  });

  after(() => {
    destroyClientEnv();
  });

  it('remove the container node', () => {
    const before = document.getElementById('container');
    expect(typeof before).to.equal('object');
    removeNode(before);
    const after = document.getElementById('container');
    expect({}.toString.call(after)).to.equal('[object Null]');
  });
});
