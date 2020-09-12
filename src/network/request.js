import axios from 'axios';

export function request(config) {
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:8000/api/z8',
    timeout: 5000
  });

  // 添加请求拦截器
  axios.interceptors.request.use(config => {
    // 在发送请求之前做些什么
    return config;
  }, error => {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

  // 添加响应拦截器
  axios.interceptors.response.use(res => {
    // 对响应数据做点什么
    return res.data;
  }, error => {
    // 对响应错误做点什么
    return Promise.reject(error);
  });

  return instance(config)
}
