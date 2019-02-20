import 'mocha';
import { expect } from 'chai';
import { JSDOM } from 'jsdom';
// import JSDOM from './utils/env';
import Fx from '../src/fx';
const { window } = new JSDOM(`<!DOCTYPE html>
  <html>
    <head>
      <title>Fx</title>
      <style>
        .container {position: relative;}
        header, main, footer {postion: absolute;}
        header li {position: relative;}
      </style>
    </head>
    <body>
      <div id="container">
        <header id="header">
          <ul>
            <li>Home</li>
            <li>Fx</li>
          </ul>
        </header>
        <main id="main">Main</main>
        <footer id="footer">Footer</footer>
      </div>
    </body>
  </html>
`);
// 测试用例之中，DOM环境（即window, document 和 navigator 对象）必须是存在的
const gl = global as any;
gl.window = window;
gl.document = window.document;
gl.Node = window.Node;

describe('Fx operates DOM', () => {
  describe('Fx.DOM(sctor: Node|string, context?: Node|string)', () => {
    // const $container = window.document.getElementById('container');
    it(`Pass string selector`, () => {
      const elem = Fx.DOM('#container');
      expect(elem.el[0] instanceof Node).to.equal(true);
    });

    it(`Pass a Node`, () => {
      const elem = Fx.DOM(document.getElementById('container'));
      expect(elem.el[0] instanceof Node).to.equal(true);
    });

    it(`Pass string selector and string context`, () => {
      const elem = Fx.DOM('#header', '#container');
      expect(elem.el[0] instanceof Node).to.equal(true);
    });

    it(`Pass string selector and Node context`, () => {
      const elem = Fx.DOM('#header', document.getElementById('container'));
      expect(elem.el[0] instanceof Node).to.equal(true);
    });
  });

  describe('query(selector: string): Node', () => {
    it(`Query one node and the text is 'Home'`, () => {
      const header = Fx.DOM('#header');
      const li = header.query('li');
      expect(li.textContent).to.equal('Home');
    });
  });

  describe('parent(): Node', () => {
    it(`The header'parent is container`, () => {
      const header = Fx.DOM('#header');
      const parent = header.parent();
      expect((parent as Element).getAttribute('id')).to.equal('container');
    });
  });

  describe('prev(): Node', () => {
    it(`The result is header tag`, () => {
      const main = Fx.DOM('#main');
      const prev = main.prev();
      expect((prev as Element).tagName).to.equal('HEADER');
    });
  });

  describe('next(): Node', () => {
    it(`The result is footer tag`, () => {
      const main = Fx.DOM('#main');
      const next = main.next();
      expect((next as Element).tagName).to.equal('FOOTER');
    });
  });

  describe('sibling(): Node[]', () => {
    it(`The sibling is 2`, () => {
      const main = Fx.DOM('#main');
      const sibling = main.sibling();
      expect(sibling.length).to.equal(2);
    });
  });

  describe('children(): Node[]', () => {
    it(`The children is 2`, () => {
      const ul = Fx.DOM('#header ul');
      const children = ul.children();
      expect(children.length).to.equal(2);
      expect(children[0].textContent).to.equal('Home');
    });
  });

  describe('offsetParent(): Node', () => {
    it(`The header offsetParent is container`, () => {
      const header = Fx.DOM('#header');
      const headerOffsetParent = header.offsetParent();

      expect(headerOffsetParent.getAttribute('id')).to.equal('container');
    });

    it(`The li offsetParent header `, () => {
      const li = Fx.DOM('#header li');
      const liOffsetParent = li.offsetParent();

      expect(liOffsetParent.getAttribute('id')).to.equal('header');
    });
  });
});
