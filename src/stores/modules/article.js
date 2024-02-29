import { getArticleApi } from '@/service'
import { defineStore } from 'pinia'

export const useArticleStore = defineStore('article', {
  state: () => ({
    isloading: true,
    articleList: [],
    currentPage: 1,
    pageSize: 6,
    total: 0,
    allArticle: []
  }),
  actions: {
    async fetchArticleList() {
      const res = await getArticleApi({ page: this.currentPage, limit: this.pageSize })
      this.isloading = false
      this.total = res.total
      this.articleList = res.data
    },
    async fetchAllArticle() {
      const res = await getArticleApi()
      this.allArticle = res.data
    }
  }
})

export default useArticleStore
