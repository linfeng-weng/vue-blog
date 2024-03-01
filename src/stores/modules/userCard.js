import { defineStore } from 'pinia'
import { getArticleApi, getCategoryApi, getTagApi, getUserinfoApi, addVisitsApi } from '@/service'

const useUserCardStore = defineStore('UserCard', {
  state: () => ({
    articleCount: 0,
    userinfo: {},
    categoryCount: 0,
    categoryData: [],
    tagCount: 0,
    tagData: []
  }),
  actions: {
    async getUserCardData() {
      try {
        await addVisitsApi()
        const [userinfoRes, articleRes, categoryRes, tagRes] = await Promise.all([
          getUserinfoApi(),
          getArticleApi({ page: 1, limit: 1 }),
          getCategoryApi(),
          getTagApi()
        ])
        this.userinfo = userinfoRes.data[0]
        this.articleCount = articleRes.total
        this.categoryCount = categoryRes.total
        this.categoryData = categoryRes.data
        this.tagCount = tagRes.total
        this.tagData = tagRes.data
      } catch (error) {
        console.error('userCardError', error)
      }
    }
  }
})

export default useUserCardStore
