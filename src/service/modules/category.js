import http from '../request'

export function getCategory() {
    return http.get({
        url: '/categories'
    })
}

export function totalCategory() {
    return http.get({
        url: '/categories/total'
    })
}

export function getArticleByCName(name) {
    return http.get({
        url: `/tags/${name}`
    })
}

