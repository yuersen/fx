import 'mocha';
import { expect } from 'chai';
import { createClientEnv, destroyClientEnv } from '../utils';
import insertNode from '@/dom/insertNode';

describe('insertNode', () => {
  const remove = (node: Node, parent: Node = document.body) => {
    parent.removeChild(node);
  };

  let container: Element;

  before(() => {
    // create the client environment
    createClientEnv();
    container = document.getElementById('container');
    container.innerHTML = '<p>container</p>';
  });

  after(() => {
    destroyClientEnv();
  });

  // insert before
  it('add node beforebegin contianer element', () => {
    const element = document.createElement('div');
    const restult = insertNode(container, element, 'beforebegin');
    expect(container === restult).to.equal(true);
    expect(container.previousSibling === element).to.equal(true);
    remove(element); // remove dom to prevent affecting other tests
  });

  // prepend
  it('add node afterbegin contianer element', () => {
    const element = document.createElement('div');
    const result = insertNode(container, element, 'afterbegin');
    expect(container === result).to.equal(true);
    expect(container.firstChild === element).to.equal(true);
    remove(element, container); // remove dom to prevent affecting other tests
  });

  // append
  it('add node beforeend contianer element', () => {
    const element = document.createElement('div');
    const result = insertNode(container, element, 'beforeend');
    expect(container === result).to.equal(true);
    expect(container.lastChild === element).to.equal(true);
    remove(element, container); // remove dom to prevent affecting other tests
  });

  // insert after
  it('add node afterend contianer element', () => {
    const element = document.createElement('div');
    const result = insertNode(container, element, 'afterend');
    expect(container === result).to.equal(true);
    expect(container.nextSibling === element).to.equal(true);
    remove(element); // remove dom to prevent affecting other tests
  });

  // insert before
  it('add html fragment beforebegin contianer element', () => {
    const result = insertNode(
      container,
      '<div id="element"></div>',
      'beforebegin'
    );
    const element = document.getElementById('element');
    expect(result === container).to.equal(true);
    expect(container.previousSibling === element).to.equal(true);
    remove(element); // remove dom to prevent affecting other tests
  });

  // prepend
  it('add html fragement afterbegin contianer element', () => {
    const result = insertNode(
      container,
      '<div id="element"></div>',
      'afterbegin'
    );
    const element = document.getElementById('element');
    expect(result === container).to.equal(true);
    expect(container.firstChild === element).to.equal(true);
    remove(element, container); // remove dom to prevent affecting other tests
  });

  // append
  it('add html fragement beforeend contianer element', () => {
    const result = insertNode(
      container,
      '<div id="element"></div>',
      'beforeend'
    );
    const element = document.getElementById('element');
    expect(result === container).to.equal(true);
    expect(container.lastChild === element).to.equal(true);
    remove(element, container); // remove dom to prevent affecting other tests
  });

  // insert after
  it('add html fragement afterend contianer element', () => {
    const result = insertNode(
      container,
      '<div id="element"></div>',
      'afterend'
    );
    const element = document.getElementById('element');
    expect(result === container).to.equal(true);
    expect(container.nextSibling === element).to.equal(true);
    remove(element); // remove dom to prevent affecting other tests
  });
});
