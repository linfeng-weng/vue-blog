<template>
    <div class="category container">
        <layout>
            <template #left><category-items /></template>
            <template #right><user-card /></template>
        </layout>
    </div>
</template>

<script setup>
    import Layout from '@/components/layout/layout.vue'
    import CategoryItems from './cpns/category-items.vue'
    import UserCard from '@/components/user-card/user-card.vue'
</script>

<style lang="less" scoped>
.category {
    margin-top: 80px;
}
</style>