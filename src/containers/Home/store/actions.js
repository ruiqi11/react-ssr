import axios from 'axios';
import { CHANGE_LIST } from "./constants";


//普通action	
const changeList = list => ({
  type: CHANGE_LIST,
  list
});

export const getHomeList = () => {
  //返回函数中的默认第三个参数是withExtraArgument传进来的axios实例	
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/api/news.json')
      .then((res) => {
        const list = res.data.data;
        dispatch(changeList(list))
      })
  }
}