import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { reducer as homeReducer } from '../containers/Home/store';
import clientAxios from '../client/request';
import serverAxios from '../server/request';

//合并项目组件中store的reducer	
const reducer = combineReducers({
  home: homeReducer
})

//创建store，并引入中间件thunk进行异步操作的管理
// 导出创建store的方法，每个用户执行这个函数就会拿到一个新的store	
//让thunk中间件带上serverAxios	
export const getStore = () => {
  return createStore(reducer, applyMiddleware(thunk.withExtraArgument(serverAxios)));
}


//客户端的store创建函数	
//让thunk中间件带上clientAxios
export const getClientStore = () => {
  const defaultState = window.context ? window.context.state : {};
  return createStore(reducer, defaultState, applyMiddleware(thunk.withExtraArgument(clientAxios)));
}