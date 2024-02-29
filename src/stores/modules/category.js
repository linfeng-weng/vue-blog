import { defineStore } from 'pinia'
import { getArticleByCidApi } from '@/service'

const useCategoryStore = defineStore('category', {
  state: () => ({
    categoryArticle: [],
    nameChosen: ''
  }),
  actions: {
    async fetchArticleByCid(id) {
      const res = await getArticleByCidApi(id)
      this.categoryArticle = res.articles
    }
  }
})

export default useCategoryStore
