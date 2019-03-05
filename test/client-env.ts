import { JSDOM } from 'jsdom';
const htmlTpl = `<!DOCTYPE html>
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
          <li class="document">DOCUMENT</li>
          <li class="api">API</li>
          <li class="fx">Fx</li>
        </ul>
      </header>
      <main id="main">Main</main>
      <footer id="footer">Footer</footer>
    </div>
  </body>
</html>
`;

// 测试用例之中，DOM环境（即window, document 和 navigator 对象）必须是存在的
declare global {
  namespace NodeJS {
    interface Global {
      window: any;
      document: any;
      Node: any;
      Element: any;
    }
  }
}
function createClienEnv(tpl: string) {
  const { window } = new JSDOM(tpl);
  global.window = window;
  global.document = window.document;
  global.Node = window.Node;
  global.Element = window.Element;
}
createClienEnv(htmlTpl);
