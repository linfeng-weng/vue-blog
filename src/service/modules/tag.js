import http from '../request'

export function getTag() {
  return http.get({
    url: '/tags'
  })
}

export function totalTag() {
  return http.get({
    url: '/tags/total'
  })
}

export function getArticleByTName(name) {
  return http.get({
    url: `/tags/${name}`
  })
}
