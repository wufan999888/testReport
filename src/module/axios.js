import axios from 'axios'
// import qs from 'qs';
// 环境的切换
// if (process.env.NODE_ENV == 'development') {    
//   axios.defaults.baseURL = '/api';
// } else if (process.env.NODE_ENV == 'debug') {    
//   axios.defaults.baseURL = '';
// } else if (process.env.NODE_ENV == 'production') {    
// axios.defaults.baseURL = 'https://mock.apifox.cn/m2/2177675-0-default/';
// }
// 创建axios实例
const service = axios.create({
  // baseURL: '',
  // withCredentials: true, // 跨域请求时是否发送cookies
  timeout: 50000, // 请求超时设置
  headers: {
    Accept: 'application/json',
    // body传参不要加这个
    // "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
  }
})

// 请求拦截器
service.interceptors.request.use(config => {
  // 有接口路径的话替换一下
  // config.baseURL = config.baseURL
  // 请求前做点什么？
  if (!config.data) {
    // config.data = {}
  } else {
    // 设置公共参数
    // config.data = qs.stringify(config.data)
  }
  // 通过config来添加token
  config.headers.Authorization = localStorage.getItem('token')
  return config
}, error => {
  // 处理请求错误
  console.log(error); // 用于调试
  return Promise.reject(error)
})

// 响应拦截器
service.interceptors.response.use(response => {
  if(response.data.code === 1001) {
    // location.href = '/#/login'
  }
  let res = response.data // 如果返回的结果是data.data的，嫌麻烦可以用这个，return res
  return res
}, error => {
  console.log('error：' + error) // 用于调试
  return Promise.reject(error)
})

export default service
