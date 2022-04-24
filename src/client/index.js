import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import Routes from '../Routes'
import { Provider } from 'react-redux';
import { getClientStore } from '../store'; // 使用store
import { renderRoutes } from 'react-router-config';

const store = getClientStore()

const App = () => {
  return ( 
    <Provider store={store}>
      <BrowserRouter > 
        <div>
          {renderRoutes(Routes)}
        </div>
      </BrowserRouter>
    </Provider>	
  )
}

ReactDom.hydrate(<App />, document.getElementById('root'));
