import 'mocha';
import { expect } from 'chai';
import { createClientEnv, destroyClientEnv } from '../utils';
import getClintByUserAgent from '@/client/getClintByUserAgent';

describe('getClintByUserAgent', () => {
  // runs before all tests in this block
  before(() => {
    createClientEnv();
  });

  // runs after all tests in this block
  after(() => {
    destroyClientEnv();
  });

  it('returns the same client information', () => {
    const first = getClintByUserAgent();
    const second = getClintByUserAgent();
    expect(first.toString() === second.toString()).to.equal(true);
  });
});
