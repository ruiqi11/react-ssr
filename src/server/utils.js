import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, Route } from 'react-router-dom';
import Routes from '../Routes';
import { getStore } from '../store'; // 使用store
import { Provider } from 'react-redux';
import { matchRoutes as matchRoute, renderRoutes } from 'react-router-config';

export const render = (req, res) => {
  // 初始化CSS代码变量
  let context = { css: [] }
  const store = getStore();
  // 可以拿到store填充到store中。
  // 根据路由的路径向store里面添加数据，需要借助matchRoute，返回值是一个数组，里面是匹配到的每级路由。
  const matchedRoutes = matchRoute(Routes, req.path);
  // 让matchRoutes里面所有的组件对应的loadData方法都执行一次
  // item.route.loadData返回的是一个promise我们等待promise执行完毕再向下，所以使用Promise.all，请求响应后返回给浏览器数据。
  let promises = [];
  matchedRoutes.forEach(item => {
    if (item.route.loadData) {
      promises.push(item.route.loadData(store));
    }
  });
  Promise.all(promises).then(() => {
    const content = renderToString(( 
      <Provider store = { store } >
        <StaticRouter location={req.path} context={context}>
          <div>
            {renderRoutes(Routes)}
          </div> 
        </StaticRouter > 
      </Provider>
    ));
    // 拼接CSS代码
    const cssStr = context.css.length ? context.css.join('\n') : '';
    res.send(`
          <html>
            <head>
              <style>${cssStr}</style>
            </head>
            <body>
                <div id="root">${content}</div>
            </body>
            <script defer src="/index.js"></script>
            <script defer>	
              window.context = {	
                state: ${JSON.stringify(store.getState())}	
              }	
            </script>
          </html>
      `);
  })
}
