import Fx from '../src/fx';
import 'mocha';
import { expect } from 'chai';
import { JSDOM } from 'jsdom';

describe('Fx operates DOM', () => {
  const { window } = new JSDOM(`<!DOCTYPE html>
    <div id="container">
      <header id="header">Header</header>
      <main id="main">Main</main>
      <footer id="footer">Footer</footer>
    </div>
  `);

  describe('Fx(elem: Element).query(selector: string): Node', () => {
    const $container = window.document.getElementById('container');
    it(``);
  });

});
