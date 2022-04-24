import React from 'react';	
import Header from './components/Header';	
import { renderRoutes } from 'react-router-config';
 
const  App = (props) => {
  return (	
    <div>	
      <Header></Header>	
      {/* 拿到Login和Home组件的路由	 */}
      {renderRoutes(props.route.routes)}
    </div>	
  )	
}	
 
export default App;
