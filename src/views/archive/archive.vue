<template>
  <div class="archive container">
    <layout>
      <template #left><archive-time /></template>
      <template #right><user-card /></template>
    </layout>
  </div>
</template>

<script setup>
import Layout from '@/components/layout.vue'
import ArchiveTime from './cpns/archive-time.vue'
import UserCard from '@/components/user-card.vue'
</script>

<style lang="less" scoped>
.archive {
  margin-top: 80px;
}
</style>
