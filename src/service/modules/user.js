import { http } from '../request'

// 获取用户信息
export function getUserinfoApi() {
  return http.get({
    url: '/user/userinfo'
  })
}

// 新增访问
export function addVisitsApi() {
  return http.post({
    url: '/visits'
  })
}
