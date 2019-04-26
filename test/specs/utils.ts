import { JSDOM } from 'jsdom';

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

/**
 * 创建客户端环境
 */
export const createClientEnv = () => {
  const { window } = new JSDOM(`<!doctype html>
    <html>
      <body>
        <div class="container" id="container"></div>
      </body>
    </html>`);
  global.window = window;
  global.document = window.document;
  global.Node = window.Node;
  global.Element = window.Element;
};

/**
 * 销毁创建的客户端环境
 */
export const destroyClientEnv = () => {
  global.window && global.window.close();
};
