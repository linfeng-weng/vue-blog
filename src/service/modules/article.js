import { http } from '../request'

// 获取文章列表(可分页)
export function getArticleApi(params) {
  return http.get({
    url: '/articles',
    params
  })
}

// 根据id获取文章
export function getArticleByIdApi(id) {
  return http.get({
    url: `/articles/${id}`
  })
}

// 搜索文章
export function searchArticleApi(s) {
  return http.get({
    url: `/articles/search/${s}`
  })
}
