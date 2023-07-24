import { defineStore } from "pinia"
import { getArticleByCName } from "@/service"

const useCategoryStore = defineStore('category', {
    state: () => ({
        categoryArticle: []
    }),
    actions: {
        async fetchArticleByCName(name) {
            const res = await getArticleByCName(name)
            this.categoryArticle = res.articles
        }
    }
})

export default useCategoryStore