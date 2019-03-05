import 'mocha';
import { expect } from 'chai';
import Fx from '../src/fx';

describe('Fx operates URLSearchParams', () => {
  describe('new Fx.URLSearchParams()', () => {
    it(`Receive strings as parameters`, () => {
      const url = new Fx.URLSearchParams('name=pxy&age=20');
      expect('name' in url.entries()).to.equal(true);
      expect('age' in url.entries()).to.equal(true);
    });

    it(`Receive Array as parameters`, () => {
      const url = new Fx.URLSearchParams([['name', 'pxy'], ['age', 20]]);
      expect('name' in url.entries()).to.equal(true);
      expect('age' in url.entries()).to.equal(true);
    });

    it(`Receive object as parameters`, () => {
      const url = new Fx.URLSearchParams({
        name: 'pxy',
        age: 20
      });
      expect('name' in url.entries()).to.equal(true);
      expect('age' in url.entries()).to.equal(true);
    });
  });

  describe('append(name: string, values: string | string[]): URLSearchParamsUtil', () => {
    it(`The value is empty string`, () => {
      const url = new Fx.URLSearchParams('name=pxy&age=20');
      url.append('lover', '');
      expect('lover' in url.entries()).to.equal(false);
    });

    it(`The value isn't empty string`, () => {
      const url = new Fx.URLSearchParams([['name', 'pxy'], ['age', 20]]);
      url.append('lover', 'apple');
      expect('lover' in url.entries()).to.equal(true);
      expect(url.get('lover')).to.equal('apple');
    });

    it(`The value is empty array`, () => {
      const url = new Fx.URLSearchParams({
        name: 'pxy',
        age: 20
      });
      url.append('lover', []);
      expect('lover' in url.entries()).to.equal(true);
    });

    it(`The value isn't empty array`, () => {
      const url = new Fx.URLSearchParams({
        name: 'pxy',
        age: 20
      });
      url.append('lover', ['orange', 'apple']);
      expect('lover' in url.entries()).to.equal(true);
      expect(url.get('lover')).to.equal('orange');
    });
  });

  describe('delete(name: string): URLSearchParamsUtil', () => {
    it(`Delete the name`, () => {
      const url = new Fx.URLSearchParams('name=pxy&age=20');
      url.delete('name');
      expect('name' in url.entries()).to.equal(false);
    });
  });

  describe('get(name: string): string | null', () => {
    it(`Get the existed name field value`, () => {
      const url = new Fx.URLSearchParams('name=pxy&age=20');
      expect(url.get('name')).to.equal('pxy');
    });

    it(`Get the non-existed name field value`, () => {
      const url = new Fx.URLSearchParams('name=pxy&age=20');
      expect(url.get('lover')).to.equal(null);
    });
  });

  describe('getAll(name: string): string[]', () => {
    it(`Get the field values that exist`, () => {
      const url = new Fx.URLSearchParams('name=pxy&age=20&name=fx');
      expect(url.getAll('name').length).to.equal(2);
      expect(url.getAll('name').join()).to.equal('pxy,fx');
    });

    it(`Get field values that do not exist`, () => {
      const url = new Fx.URLSearchParams('name=pxy&age=20');
      expect(url.getAll('lover').length).to.equal(0);
    });
  });

  describe('has(name: string): boolean', () => {
    it(`Field exist`, () => {
      const url = new Fx.URLSearchParams('name=pxy&age=20&name=fx');
      expect(url.has('name')).to.equal(true);
    });

    it(`Field does not exist`, () => {
      const url = new Fx.URLSearchParams('name=pxy&age=20');
      expect(url.has('lover')).to.equal(false);
    });
  });

  describe('set(name: string, value: string): URLSearchParamsUtil', () => {
    it(`Set filed value that exist`, () => {
      const url = new Fx.URLSearchParams('name=pxy&age=20&name=fx');
      url.set('name', 'amos')
      expect(url.get('name')).to.equal('amos');
    });

    it(`Set filed value that do not exist`, () => {
      const url = new Fx.URLSearchParams('name=pxy&age=20&name=fx');
      url.set('lover', 'apple')
      expect(url.get('lover')).to.equal('apple');
    });
  });

  describe('keys(): string[]', () => {
    it(`Get all keys`, () => {
      const url = new Fx.URLSearchParams('name=pxy&age=20');
      expect(url.keys().join()).to.equal('name,age');
    });
  });

  describe('values(): string[]', () => {
    it(`Get all value`, () => {
      const url = new Fx.URLSearchParams('name=pxy&age=20');
      expect(url.values().length).to.equal(2);
    });
  });

  describe('entries(): { [key: string]: string[] }', () => {
    it(`Get entries`, () => {
      const url = new Fx.URLSearchParams('name=pxy&age=20');
      expect('name' in url.entries()).to.equal(true);
      expect(url.entries().name.join()).to.equal('pxy');
    });
  });

  describe('toString(): string', () => {
    it(`Output tostring`, () => {
      const url = new Fx.URLSearchParams('name=pxy&age=20&name=fx');
      expect(url.toString()).to.equal('name=pxy&name=fx&age=20');
    });
  });
});
