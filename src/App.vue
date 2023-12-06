<template>
  <nav-bar></nav-bar>
  <router-view v-slot="{ Component }">
    <keep-alive :exclude="['article']">
      <component :is="Component" />
    </keep-alive>
  </router-view>
  <copyright></copyright>
</template>

<script setup>
import NavBar from '@/components/nav-bar.vue'
import Copyright from '@/components/copyright.vue'
import useUserCardStore from './stores/modules/userCard'

const { getUserCardData } = useUserCardStore()
getUserCardData()
</script>

<style lang="less" scoped></style>
