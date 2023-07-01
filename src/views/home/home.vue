<template>
    <div class="home">
        <home-header />
        <div class="container">
            <layout>
                <template #left><home-articles /></template>
                <template #right><user-card /></template>
            </layout>
        </div>
    </div>
</template>

<script setup>
    import HomeHeader from './cpns/home-header.vue'
    import HomeArticles from './cpns/home-articles.vue'
    import UserCard from '@/components/user-card/user-card.vue'
    import Layout from '@/components/layout/layout.vue'
</script>

<style lang="less" scoped></style>