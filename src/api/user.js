/**
* 用户相关请求模块
*/
import request from '@/utils/request'
import store from '@/store/'

// 用户登录
export const login = data => {
  const { id, password, radio: role } = data
  return request({
    method: 'post',
    url: 'users/login',
    // data用来设置POST请求体
    params: {
      id,
      password,
      role
    }
  })
}
// 获取用户信息
export const getUserProfile = () => {
  return request({
    method: 'GET',
    url: '/getUserInfo',
    params: {
      id: store.state.user.userId,
      role: store.state.user.userRole
    }
    // 后端要求把授权的用户身份放到请求头中
    // axios 可以通过 header 选项设置请求头
    // headers: {
    //   // 属性名和值看接口需求
    //   // 属性名： Authoriztion
    //   // 属性值： Bearer空格token数据
    //   // Authoriztion: 'Bearer '
    //   Authoriztion: `Bearer ${token}`,
    //   // 'Content-Type': 'application/json;charset=utf-8'
    //   // 'Content-Type': 'multipart/form-data'
    //   // 'Content-Type': 'application/json'
    //   'Content-Type': 'application/x-www-form-urlencoded'
    // }
  })
}
// 修改用户信息
export const updateUser = () => {

}
// 修改密码
export const setPassword = (data) => {
  const { userId, userRole } = JSON.parse(window.sessionStorage.getItem('user'))
  const { pass, oldPass } = data
  return request({
    method: 'post',
    url: 'users/setPassword',
    // data用来设置POST请求体
    params: {
      id: userId,
      oldpassword: oldPass,
      newpassword: pass,
      role: userRole
    }
  })
}
