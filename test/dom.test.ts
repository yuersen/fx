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
        html, body {padding: 0; margin: 0; width: 100%; height: 100%;}
        .container {position: relative; width: 100%; height: 100%;}
        header, main, footer {position: absolute;}
        header {position: absolute; top: 0; width: 100%; height: 60px;}
        header li {position: relative; display: block; padding: 0; width: 120px; height: 20px; margin: 5px;}
        main {position: absolute; top: 60px; bottom: 50px; left: 0; right: 0}
        footer {position: absolute; bottom: 0; left: 0; width: 100%; height: 50px;}
      </style>
    </head>
    <body>
      <div id="container" class="container">
        <header id="header">
          <ul>
            <li class="home">Home</li>
            <li class="fx">Fx</li>
          </ul>
        </header>
        <main id="main">Main</main>
        <footer id="footer">Footer</footer>
      </div>
    </body>
  </html>
`);
// 测试用例之中，DOM环境（即window, document 和 navigator 对象）必须是存在的
declare global {
  namespace NodeJS {
    interface  Global {
      window: any;
      document: any;
      Node: any;
      Element: any;
    }
  }
}
global.window = window;
global.document = window.document;
global.Node = window.Node;
global.Element = window.Element;

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

  describe('forEach(callback: (el: Element, index?: number) => void): DOMUtil', () => {
    it(`The first param of callback is Element`, () => {
      let isElement: boolean;
      Fx.DOM('#header li').forEach(el => {
        isElement = el instanceof Element;
        return false;
      });
      expect(isElement).to.equal(true);
    });

    it(`The second param of callback is index`, () => {
      let sum: number = 0;
      Fx.DOM('#header li').forEach((el, index: number) => {
        sum += index;
      });
      expect(sum).to.equal(1);
    });

    it(`Return false to stop looping.`, () => {
      let sum: number = 0;
      Fx.DOM('#header li').forEach((el, index: number) => {
        sum += index;
        return false;
      });
      expect(sum).to.equal(0);
    });
  });

  describe('find(selector: string): Element[]', () => {
    it(`The header contain two li element`, () => {
      const li = Fx.DOM('#header').find('li');
      expect(li.length).to.equal(2);
    });

    it(`There are no li element in footer element`, () => {
      const li = Fx.DOM('#footer').find('li');
      expect(li.length).to.equal(0);
    });
  });

  describe('parent(): Element[]', () => {
    const parent = Fx.DOM('li').parent();
    it(`There are 1 parent`, () => {
      expect(parent.length).to.equal(1);
    });

    it(`The li's parent is header`, () => {
      expect(parent[0].tagName).to.equal('UL');
    });
  });

  describe('prev(): Element[]', () => {
    const prev = Fx.DOM('#main').prev();
    it(`The length of result is 1`, () => {
      expect(prev.length).to.equal(1);
    });

    it(`The previous node is header`, () => {
      expect(prev[0].getAttribute('id')).to.equal('header');
    });
  });

  describe('next(): Element[]', () => {
    const next = Fx.DOM('#main').next();
    it(`The length of result is 1`, () => {
      expect(next.length).to.equal(1);
    });

    it(`The previous node is footer`, () => {
      expect(next[0].getAttribute('id')).to.equal('footer');
    });
  });

  describe('siblings(): Element[]', () => {
    const sibling = Fx.DOM('#main').siblings();
    it(`The length of result is 2`, () => {
      expect(sibling.length).to.equal(2);
    });

    it(`The fisrt of sibling is header`, () => {
      expect(sibling[0].getAttribute('id')).to.equal('header');
    });
  });

  describe('children(): Element[]', () => {
    const children = Fx.DOM('#container').children();
    it(`The length of children is 3`, () => {
      expect(children.length).to.equal(3);
    });
  });

  describe('first(): Element', () => {
    it(`The first li is Home`, () => {
      const li = Fx.DOM('li').first();
      expect(li.textContent).to.equal('Home');
    });
  });

  describe('last(): Element', () => {
    it(`The last li is Fx`, () => {
      const li = Fx.DOM('li').last();
      expect(li.textContent).to.equal('Fx');
    });
  });

  describe('offsetParent(): Element[]', () => {
    const li = Fx.DOM('li').offsetParent();

    it(`The li is offsetParent is header`, () => {
      expect(li.length).to.equal(2);
    });

    it(`The offsetParent of two li is equal`, () => {
      expect(li[0] === li[1]).to.equal(true);
    });
  });

  describe('offset(): { top: number; left: number }', () => {
    const offset = Fx.DOM('li').offset();

    it(`The li's offset contains top and left attribute`, () => {
      expect(typeof offset.top === 'number').to.equal(true);
      expect(typeof offset.left === 'number').to.equal(true);
    });
  });

  describe('outerHeight(opt: boolean = false): number', () => {
    it(`The default outerHeight is clienHeight`, () => {
      const outerHeight = Fx.DOM('li').outerHeight();
      const li = Fx.DOM('li').first();
      expect(outerHeight).to.equal(0);
    });

    it(`The outerHeight(true) is clienHeight + marginTop + marginBottom`, () => {
      const outerHeight = Fx.DOM('li').outerHeight(true);
      expect(outerHeight).to.equal(10);
    });
  });

  describe('outerWidth(opt: boolean = false): number', () => {
    it(`The default outerWidth is clienWidth`, () => {
      const outerWidth = Fx.DOM('li').outerWidth();
      expect(outerWidth).to.equal(0);
    });

    it(`The outerWidth(true) is clienWidth + marginLeft + marginRight`, () => {
      const outerWidth = Fx.DOM('li').outerWidth(true);
      expect(outerWidth).to.equal(10);
    });
  });

  describe('clone(): Element[]', () => {
    it(`Clone the li element, and the result is 2`, () => {
      const li = Fx.DOM('li');
      const clone = li.clone();
      expect(clone.length).to.equal(2);
      expect(clone[0].textContent === li.el[0].textContent).to.equal(true);
    });
  });

  describe('contains(el: Node): boolean', () => {
    it(`The header contains li`, () => {
      const header = Fx.DOM('#header');
      expect(header.contains(document.querySelector('li'))).to.equal(true);
    });
  });

  describe('remove(): DOMUtil', () => {
    it(`Remove the li element`, () => {
      const li = Fx.DOM('li');
      li.remove();
      expect(Fx.DOM('li').length).to.equal(0);
    });
  });

  describe('empty(): DOMUtil', () => {
    it(`Empty the header element`, () => {
      const header = Fx.DOM('#header');
      header.empty();
      expect(header.find('li').length).to.equal(0);
    });
  });

  describe('insert(position: string, tnode: Node | string): DOMUtil', () => {
    it(`Insert html before header element`, () => {
      const header = Fx.DOM('#header');
      header.insert('beforebegin', `<div id="beforebeginString">beforebegin string</div>`);
      expect(Fx.DOM('#beforebeginString').next()[0] === header.el[0]).to.equal(true);
    });

    it(`Insert node before header element`, () => {
      const header = Fx.DOM('#header');
      const beforebegin = document.createElement('div');
      beforebegin.id = 'beforebeginNode';
      header.insert('beforebegin', beforebegin);
      expect(Fx.DOM('#beforebeginNode').next()[0] === header.el[0]).to.equal(true);
    });

    it(`Insert html afterbegin header element`, () => {
      const header = Fx.DOM('#header');
      header.insert('afterbegin', `<div id="afterbeginString">afterbeginString</div>`);
      expect(Fx.DOM('#afterbeginString').length).to.equal(1);
    });

    it(`Insert node afterbegin header element`, () => {
      const header = Fx.DOM('#header');
      const afterbegin = document.createElement('div');
      afterbegin.id = 'afterbeginNode';
      header.insert('afterbegin', afterbegin);
      expect(Fx.DOM('#afterbeginNode').length).to.equal(1);
    });

    it(`Insert html beforeend header element`, () => {
      const header = Fx.DOM('#header');
      header.insert('beforeend', `<div id="beforeendString">beforeendString</div>`);
      expect(Fx.DOM('#beforeendString').length).to.equal(1);
    });

    it(`Insert node beforeend header element`, () => {
      const header = Fx.DOM('#header');
      const beforeend = document.createElement('div');
      beforeend.id = 'beforeendNode';
      header.insert('beforeend', beforeend);
      expect(Fx.DOM('#beforeendNode').length).to.equal(1);
    });

    it(`Insert html afterend header element`, () => {
      const header = Fx.DOM('#header');
      header.insert('afterend', `<div id="afterendString">afterendString</div>`);
      expect(Fx.DOM('#afterendString').length).to.equal(1);
    });

    it(`Insert node afterend header element`, () => {
      const header = Fx.DOM('#header');
      const afterend = document.createElement('div');
      afterend.id = 'afterendNode';
      header.insert('afterend', afterend);
      expect(Fx.DOM('#afterendNode').length).to.equal(1);
    });
  });

  describe('before(tnode: Node | string): DOMUtil', () => {
    it(`Insert html before header element`, () => {
      const header = Fx.DOM('#header');
      header.before(`<div id="beforeString">beforebegin string</div>`);
      expect(Fx.DOM('#beforeString').length).to.equal(1);
    });

    it(`Insert node before header element`, () => {
      const header = Fx.DOM('#header');
      const before = document.createElement('div');
      before.id = 'beforeNode';
      header.before(before);
      expect(Fx.DOM('#beforeNode').length).to.equal(1);
    });
  });

  describe('prepend(tnode: Node | string): DOMUtil', () => {
    it(`Insert html prepend header element`, () => {
      const header = Fx.DOM('#header');
      header.prepend(`<div id="prependString">prepend string</div>`);
      expect(Fx.DOM('#prependString').length).to.equal(1);
    });

    it(`Insert node prepend header element`, () => {
      const header = Fx.DOM('#header');
      const prepend = document.createElement('div');
      prepend.id = 'prependNode';
      header.prepend(prepend);
      expect(Fx.DOM('#prependNode').length).to.equal(1);
    });
  });

  describe('append(tnode: Node | string): DOMUtil', () => {
    it(`Insert html append header element`, () => {
      const header = Fx.DOM('#header');
      header.append(`<div id="appendString">append string</div>`);
      expect(Fx.DOM('#appendString').length).to.equal(1);
    });

    it(`Insert node append header element`, () => {
      const header = Fx.DOM('#header');
      const append = document.createElement('div');
      append.id = 'appendNode';
      header.append(append);
      expect(Fx.DOM('#appendNode').length).to.equal(1);
    });
  });

  describe('after(tnode: Node | string): DOMUtil', () => {
    it(`Insert html after header element`, () => {
      const header = Fx.DOM('#header');
      header.after(`<div id="afterString">after string</div>`);
      expect(Fx.DOM('#afterString').length).to.equal(1);
    });

    it(`Insert node after header element`, () => {
      const header = Fx.DOM('#header');
      const after = document.createElement('div');
      after.id = 'afterNode';
      header.after(after);
      expect(Fx.DOM('#afterNode').length).to.equal(1);
    });
  });

  describe('attr(name: string, val?: string): DOMUtil | string[]', () => {
    it(`Set attribute on element`, () => {
      const header = Fx.DOM('#header');
      header.attr('testA', 'testA');
      expect(header.attr('testA') === 'testA').to.equal(true);
    });

    it(`Get attribute on element`, () => {
      const header = Fx.DOM('#header');
      header.attr('testB', 'testB');
      expect(header.attr('testB') === 'testB').to.equal(true);
    });
  });

  describe('removeAttr(name: string): DOMUtil', () => {
    it(`Remove attribute on element`, () => {
      const header = Fx.DOM('#header');
      header.attr('testC', 'testC');
      header.removeAttr('testC');
      expect(!header.attr('testC')).to.equal(true);
    });
  });

  describe('text(value?: string): DOMUtil | string', () => {
    it(`Get footer element text`, () => {
      const footer = Fx.DOM('#footer');
      expect(footer.text() === 'Footer').to.equal(true);
    });

    it(`Get footer element text`, () => {
      const footer = Fx.DOM('#footer');
      footer.text('Footerball');
      expect(footer.text() === 'Footerball').to.equal(true);
    });
  });

  describe('html(str?: string): DOMUtil | string', () => {
    const footer = Fx.DOM('#footer');
    footer.html('<strong>Footer</strong>');
    it(`Set footer element html`, () => {
      expect(footer.find('strong').length).to.equal(1);
    });

    it(`Get footer element text`, () => {
      expect(footer.html() === '<strong>Footer</strong>').to.equal(true);
    });
  });
});
