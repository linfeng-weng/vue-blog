<template>
  <div class="category container">
    <layout>
      <template #left>
        <router-view v-slot="{ Component }">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </router-view>
      </template>
      <template #right><user-card /></template>
    </layout>
  </div>
</template>

<script setup>
import Layout from '@/components/layout.vue'
import UserCard from '@/components/user-card.vue'
</script>

<style lang="less" scoped>
.category {
  margin-top: 80px;
}
</style>
