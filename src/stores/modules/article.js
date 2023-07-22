import { getArticle, totalArticle, getAllArticle } from "@/service"
import { defineStore } from "pinia"


export const useArticleStore = defineStore('article', {
    state: () => ({
        articleList: [],
        total: 0,
        allArticle: []
    }),
    actions: {
        async fetchArticleList() {
            const res = await getArticle()
            this.articleList = res.article
            console.log('fetchArticle')
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