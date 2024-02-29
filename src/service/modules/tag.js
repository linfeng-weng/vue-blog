import { http } from '../request'

export function getTagApi() {
  return http.get({
    url: '/tags'
  })
}

export function getArticleByTidApi(id) {
  return http.get({
    url: `/tags/${id}`
  })
}
