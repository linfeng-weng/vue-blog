import { defineStore } from 'pinia'
import { totalArticle, totalCategory, totalTag } from '@/service'

const useUserCardStore = defineStore('UserCard', {
  state: () => ({
    articleCount: 0,
    categoryCount: 0,
    tagCount: 0
  }),
  actions: {
    getUserCardData() {
      totalArticle().then((res) => {
        this.articleCount = res.total
      })
      totalCategory().then((res) => {
        this.categoryCount = res.total
      })
      totalTag().then((res) => {
        this.tagCount = res.total
      })
    }
  }
})

export default useUserCardStore
