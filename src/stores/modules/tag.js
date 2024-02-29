import { defineStore } from 'pinia'
import { getArticleByTidApi } from '@/service'

const useTagStore = defineStore('Tag', {
  state: () => ({
    tagArticle: [],
    nameChosen: ''
  }),
  actions: {
    async fetchArticleByTName(name) {
      const res = await getArticleByTidApi(name)
      this.tagArticle = res.articles
    }
  }
})

export default useTagStore
