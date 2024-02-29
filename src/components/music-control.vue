<template>
  <div class="music-control">
    <audio ref="audioRef" :src="musicSrc" volume="0.5"></audio>
  </div>
</template>

<script setup>
import EventBus from '@/utils/eventBus'
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import useMusicStore from '@/stores/modules/music'

const { isPause, isEnd } = storeToRefs(useMusicStore())

const audioRef = ref(null)
const musicSrc = ref('')

EventBus.on('playMusic', (id) => {
  musicSrc.value = `https://music.163.com/song/media/outer/url?id=${id}.mp3`
  // 监听音频准备好播放的事件
  audioRef.value.addEventListener('canplay', () => {
    audioRef.value.play()
  })
  if (audioRef.value.readyState > 0) {
    audioRef.value.play()
  }
})

EventBus.on('pauseMusic', () => {
  isPause.value = true
  audioRef.value.pause()
})

onMounted(() => {
  audioRef.value.addEventListener('ended', () => {
    isEnd.value = true
    EventBus.emit('musicEnd')
  })
})
</script>

<style lang="less" scoped></style>
