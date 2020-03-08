import axios from 'axios';
// axios全局配置
axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
// response拦截器
axios.interceptors.response.use(response => response.data, err => Promise.reject(err))
export default axios;