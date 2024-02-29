import { defineStore } from 'pinia'

const useMusicStore = defineStore('music', {
  state: () => ({
    isPlay: false,
    isPause: false,
    isEnd: true
  }),
  actions: {}
})

export default useMusicStore
