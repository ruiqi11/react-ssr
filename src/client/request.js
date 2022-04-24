import axios from 'axios'


const instance = axios.create({
  //即当前路径的node服务	
  baseURL: '/'
})

export default instance