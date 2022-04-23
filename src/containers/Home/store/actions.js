import axios from 'axios';
import { CHANGE_LIST } from "./constants";


//普通action	
const changeList = list => ({
  type: CHANGE_LIST,
  list
});

export const getHomeList = () => {
  return dispatch => {
    //另外起的本地的后端服务	
    return axios.get('http://localhost:8000/api/news.json')
      .then((res) => {
        const list = res.data.data;
        dispatch(changeList(list))
      })
  }
}