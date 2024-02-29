import { http } from '../request'

export function getCategoryApi() {
  return http.get({
    url: '/categories'
  })
}

export function getArticleByCidApi(name) {
  return http.get({
    url: `/categories/${name}`
  })
}
