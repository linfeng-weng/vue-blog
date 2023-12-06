import { getArticle, totalArticle, getAllArticle } from '@/service'
import { defineStore } from 'pinia'

export const useArticleStore = defineStore('article', {
  state: () => ({
    articleList: [],
    currentPage: 0,
    total: 0,
    allArticle: []
  }),
  actions: {
    async fetchArticleList() {
      const res = await getArticle(this.currentPage)
      // this.articleList = res.article
      this.articleList.push(...res.article)
      // console.log('fetchArticle', this.articleList)
    },
    async fetchTotalArticle() {
      const res = await totalArticle()
      this.total = res.total
    },
    async fetchAllArticle() {
      const res = await getAllArticle()
      this.allArticle = res.article
    }
  }
})

export default useArticleStore
