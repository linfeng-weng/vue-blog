<template>
    <nav-bar></nav-bar>
    <router-view></router-view>
    <copyright></copyright>
</template>

<script setup>
    import NavBar from '@/components/nav-bar/nav-bar.vue'
    import Copyright from '@/components/copyright/copyright.vue'
</script>

<style lang="less" scoped>

</style>