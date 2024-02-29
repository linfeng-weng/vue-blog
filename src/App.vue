<template>
  <nav-bar />
  <router-view v-slot="{ Component }">
    <keep-alive :exclude="['article']">
      <component :is="Component" />
    </keep-alive>
  </router-view>
  <copyright />
  <!-- 音乐控件 -->
  <MusicControl />
</template>

<script setup>
import NavBar from '@/components/nav-bar.vue'
import Copyright from '@/components/copyright.vue'
import MusicControl from '@/components/music-control.vue'
import useUserCardStore from './stores/modules/userCard'

const userCardStroe = useUserCardStore()
userCardStroe.getUserCardData()
</script>

<style lang="less" scoped></style>
