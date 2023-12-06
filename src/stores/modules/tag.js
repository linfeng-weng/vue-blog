import { defineStore } from 'pinia'
import { getArticleByTName } from '@/service'

const useTagStore = defineStore('Tag', {
  state: () => ({
    tagArticle: []
  }),
  actions: {
    async fetchArticleByTName(name) {
      const res = await getArticleByTName(name)
      this.tagArticle = res.articles
    }
  }
})

export default useTagStore
