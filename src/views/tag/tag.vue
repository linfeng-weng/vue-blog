<template>
    <div class="tag container">
        <layout>
            <template #left><tag-items /></template>
            <template #right><user-card /></template>
        </layout>
    </div>
</template>

<script setup>
    import Layout from '@/components/layout/layout.vue'
    import TagItems from './cpns/tag-items.vue'
    import UserCard from '@/components/user-card/user-card.vue'
</script>

<style lang="less" scoped>
.tag {
    margin-top: 80px;
}
</style>