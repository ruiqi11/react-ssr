import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import Routes from '../Routes'
import { Provider } from 'react-redux';
import { getClientStore } from '../store'; // 使用store

const store = getClientStore()

const App = () => {
  return ( 
    <Provider store={store}>
      <BrowserRouter > 
        <div>
            {
              Routes.map(route => (
                <Route {...route} />
              ))
            }
        </div>
      </BrowserRouter>
    </Provider>	
  )
}

ReactDom.hydrate(<App />, document.getElementById('root'));
