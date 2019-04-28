import 'mocha';
import { expect } from 'chai';
import memoize from '@/function/memoize';

describe('memoize', () => {
  it('create a function', () => {
    const add = memoize((x, y) => {
      return x + y;
    });
    expect(typeof add).to.equal('function');
  });

  it('returns value from cache', () => {
    // use type any to ignore tslint check
    const add: any = memoize(
      (x: number, y: number): number => {
        return x + y;
      }
    );
    expect(add(1, 2)).to.equal(3);
    expect(add(1, 2)).to.equal(3);
    expect(add.cache[1]).to.equal(3);
  });

  it('uses the first parameter as cache key by default', () => {
    // use type any to ignore tslint check
    const add: any = memoize(
      (x: number, y: number): number => {
        return x + y;
      }
    );
    expect(add(1, 2)).to.equal(3);
    expect(add.cache[1]).to.equal(3);
  });

  it('sets resolves by function', () => {
    const add: any = memoize(
      (x: number, y: number): number => {
        return x + y;
      },
      (...args) => {
        return args.join('-');
      }
    );

    expect(add(1, 2)).to.equal(3);
    expect(add.cache['1-2']).to.equal(3);
  });
});
