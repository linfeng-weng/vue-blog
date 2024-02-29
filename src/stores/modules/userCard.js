import { defineStore } from 'pinia'
import { getArticleApi, getCategoryApi, getTagApi, getUserinfoApi, addVisitsApi } from '@/service'

const useUserCardStore = defineStore('UserCard', {
  state: () => ({
    articleCount: 0,
    categoryCount: 0,
    tagCount: 0,
    userinfo: {}
  }),
  actions: {
    getUserCardData() {
      addVisitsApi()
      getUserinfoApi().then((res) => {
        this.userinfo = res.data[0]
        localStorage.setItem('userinfo', JSON.stringify(this.userinfo))
      })
      getArticleApi({ page: 1, limit: 1 }).then((res) => {
        this.articleCount = res.total
      })
      getCategoryApi().then((res) => {
        this.categoryCount = res.total
      })
      getTagApi().then((res) => {
        this.tagCount = res.total
      })
    }
  }
})

export default useUserCardStore
