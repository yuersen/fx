import 'mocha';
import { expect } from 'chai';
import Fx from '../src/fx';
import './client-env';

describe('Fx operates DOM.classList', () => {
  describe('Fx.DOM(*).classList', () => {
    it(`There is values property in classList`, () => {
      const home = Fx.DOM('.home');
      expect(home.classList.values.length).to.equal(1);
    });
  });

  describe('Fx.DOM(*).classList.add(...clns: string[]): ClassListUtil', () => {
    it(`Add 'home-select' on li.home`, () => {
      const classList = Fx.DOM('.home').classList;
      const cls = 'home-select';
      classList.add(cls);
      expect(classList.list().indexOf(cls) !== -1).to.equal(true);
    });

    it(`Add 'home1' and 'home2' on li.home`, () => {
      const classList = Fx.DOM('.home').classList;
      const list = classList.add('home1', 'home2').list();
      expect(list.indexOf('home1') !== -1).to.equal(true);
      expect(list.indexOf('home2') !== -1).to.equal(true);
    });

    it(`Add 'item' on all li element`, () => {
      const classList = Fx.DOM('li').classList;
      classList.add('item');
      expect(classList.list().indexOf('item') !== -1).to.equal(true);
      expect(classList.list(1).indexOf('item') !== -1).to.equal(true);
      expect(classList.list(2).indexOf('item') !== -1).to.equal(true);
    });

    it(`Add 'item1' and 'item2' on all li element`, () => {
      const classList = Fx.DOM('li').classList;
      classList.add('item1', 'item2');
      expect(classList.list().indexOf('item2') !== -1).to.equal(true);
      expect(classList.list(1).indexOf('item2') !== -1).to.equal(true);
      expect(classList.list(2).indexOf('item2') !== -1).to.equal(true);
    });
  });

  describe('Fx.DOM(*).classList.list(i?: number): string[]', () => {
    const classList = Fx.DOM('li').classList;

    it(`List the first className by default`, () => {
      expect(classList.list().indexOf('home') !== -1).to.equal(true);
    });

    it(`List the thrid className`, () => {
      expect(classList.list(2).indexOf('api') !== -1).to.equal(true);
    });
  });

  describe('Fx.DOM(*).classList.remove(...clns: string[]): ClassListUtil', () => {
    const classList = Fx.DOM('li').classList;

    // add `remove`,`remove`,`remove2`,`remove3` class
    classList.add('remove', 'remove1', 'remove2', 'remove3');

    it(`Remove the 'remove1' class`, () => {
      classList.remove('remove1');
      expect(classList.list().indexOf('remove1') === -1).to.equal(true);
      expect(classList.list(1).indexOf('remove1') === -1).to.equal(true);
      expect(classList.list(2).indexOf('remove1') === -1).to.equal(true);
    });

    it(`Remove the 'remove2' and 'remove3' class`, () => {
      classList.remove('remove2', 'remove3');
      expect(classList.list().indexOf('remove2') === -1).to.equal(true);
      expect(classList.list(1).indexOf('remove2') === -1).to.equal(true);
      expect(classList.list(2).indexOf('remove3') === -1).to.equal(true);
    });

    // add `matching`,`matching-a`,`matching-b` class
    classList.add('matching', 'matching-test-a', 'matching-test-b');
    it(`Remove the matched class`, () => {
      classList.remove(/^\bmatch/);
      expect(classList.list().indexOf('matching') === -1).to.equal(true);
      expect(classList.list(1).indexOf('matching-a') === -1).to.equal(true);
      expect(classList.list(2).indexOf('matching-b') === -1).to.equal(true);
    });
  });

  describe('Fx.DOM(*).classList.item(i: number): string', () => {
    const classList = Fx.DOM('li').classList;

    it(`Remove the matched class`, () => {
      expect(classList.item(0)).to.equal(`home,document,api,fx`);
    });
  });

  describe('Fx.DOM(*).classList.contains(cls: string): boolean', () => {
    const classList = Fx.DOM('li').classList;

    it(`Remove the matched class`, () => {
      expect(classList.contains('api')).to.equal(true);
      expect(classList.contains('FAQ')).to.equal(false);
    });
  });

  describe('Fx.DOM(*).classList.toggle(cls: string): ClassListUtil', () => {
    const classList = Fx.DOM('li').classList;

    it(`Toggle selected className first time.`, () => {
      classList.toggle('selected');
      expect(classList.contains('selected')).to.equal(true);
    });

    it(`Toggle selected className second time.`, () => {
      classList.toggle('selected');
      expect(classList.contains('selected')).to.equal(false);
    });
  });

  describe('Fx.DOM(*).classList.replace(ocls: string, ncls: string): ClassListUtil', () => {
    const classList = Fx.DOM('li').classList;

    classList.add('replaced');
    it(`Replace all 'replaced' class`, () => {
      classList.replace('replaced', 'xx');
      expect(classList.list().indexOf('replaced') === -1).to.equal(true);
      expect(classList.list(1).indexOf('xx') !== -1).to.equal(true);
      expect(classList.list(2).indexOf('replaced') === -1).to.equal(true);
    });
  });

  describe('Fx.DOM(*).classList.clear(): ClassListUtil', () => {
    const classList = Fx.DOM('li').classList;

    it(`Clear All className`, () => {
      classList.clear();
      expect(classList.list().length).to.equal(0);
      expect(classList.list(1).length).to.equal(0);
      expect(classList.list(2).length).to.equal(0);
    });
  });
});
