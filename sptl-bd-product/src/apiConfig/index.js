/* eslint-disable */
import axios from 'axios'

/**
* 定义请求常量
* TIME_OUT、ERR_OK
*/
export const TIME_OUT = 100000;    // 请求超时时间
export const ERR_OK = true;      // 请求成功返回状态，字段和后台统一
export const baseUrl = process.env.BASE_URL   // 引入全局url，定义在全局变量process.env中，开发环境为了方便转发，值为空字符串
// 请求超时时间
axios.defaults.timeout = TIME_OUT

// 封装请求拦截
axios.interceptors.request.use(
    config => {
        let token = sessionStorage.getItem('token')   // 获取token
        // config.headers['Access-Control-Allow-Origin'] = '*'
        // config.headers['Access-Control-Allow-Headers'] = 'X-Requested-With,Content-Type'
        // config.headers['Access-Control-Allow-Methods'] = 'PUT,POST,GET,DELETE,OPTIONS'
        config.headers['Content-Type'] = 'application/json;charset=UTF-8'
        config.headers['Authorization'] = ''
        if(token != null){                          // 如果token不为null，否则传token给后台
            config.headers['Authorization'] = token
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
)
axios.interceptors.request.use(function (config) {
  return config
})
// 封装响应拦截，判断token是否过期
axios.interceptors.response.use(
  response => {
    let {data} = response
    if (data.resultCode === '-9999') {    // 如果后台返回的错误标识为token过期，则重新登录
      sessionStorage.removeItem('token')          // token过期，移除token
      this.$message(data.resultMessage)
      // 进行重新登录操作
    } else {
      return Promise.resolve(response)
    }
  },
  error => {
    return Promise.reject(error)
  }
)
// 封装post请求
export function post(url, params) {
  // let showLoading = 1;
  // store.dispatch('getLoading', {loading: showLoading})
  return new Promise((resolve, reject) => {
    axios.post(url, params)
    .then(res => {
      // store.dispatch('getLoading', {loading: showLoading * (-1)})
      resolve(res.data);
    },err => {
      reject(err.data)
    })
  })
}
export function get(url, params){
  return new Promise((resolve, reject) =>{
    axios.get(url, {
      params: params
    }).then(res => {
      resolve(res.data);
    }).catch(err =>{
      reject(err.data)
    })
  })
}
/**
 * 下载文件
 */
export const downloadGet = (url, params) => {
  return new Promise((resolve, reject) =>{
    axios.get(url, {
      params: params,
      responseType: 'blob'
    }).then(res => {
      resolve(res.data);
    }).catch(err =>{
      reject(err.data)
    })
  })
}