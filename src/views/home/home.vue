<template>
    <home-header/>
    <section class="container">
        <el-row :gutter="20">
            <el-col :span="18"><home-articles/></el-col>
            <el-col :span="6"><home-user/></el-col>
        </el-row>
    </section>
    
    
    
    
</template>

<script setup>
    import HomeHeader from './cpns/home-header.vue'
    import HomeArticles from './cpns/home-articles.vue'
    import HomeUser from './cpns/home-user.vue'
</script>

<style lang="less" scoped>

    .el-col {
        padding: 0 !important;
        border-radius: 4px;
        border: 1px solid #000;
    }
</style>