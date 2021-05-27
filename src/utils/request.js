/**
 * 基于axios封装的请求模块
 */
import axios from 'axios'
import router from '@/router'
import store from '@/store/'

const request = axios.create({
  baseURL: 'http://192.168.43.143:3000/'
})

// 添加请求拦截器
request.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    const { user } = store.state
    if (user) {
      config.headers.Authorization = `Bearer ${user.token}`
    }
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  })

// 添加响应拦截器
request.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    return response
  },
  function (error) {
    // 对响应错误做点什么
    if (error.response && error.response.status === 401) {
      window.sessionStorage.removeItem('user')
      router.push('/login')
    }
    return Promise.reject(error)
  })

// 导出请求方法
export default request
