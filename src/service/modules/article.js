import http from '../request'

export function totalArticle() {
  return http.get({
    url: '/articles/total'
  })
}

export function getAllArticle() {
  return http.get({
    url: '/articles/all'
  })
}

export function getArticle(page) {
  return http.get({
    url: '/articles',
    params: { page }
  })
}

export function getArticleById(id) {
  return http.get({
    url: `/articles/${id}`
  })
}
