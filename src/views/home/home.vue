<template>
    <div class="home">
        <home-header/>
        <div class="container">
            <el-row :gutter="20">
                <el-col :span="18"><home-articles/></el-col>
                <el-col :span="6"><home-user/></el-col>
            </el-row>
        </div>
    </div>
    
    
    
</template>

<script setup>
    import HomeHeader from './cpns/home-header.vue'
    import HomeArticles from './cpns/home-articles.vue'
    import HomeUser from './cpns/home-user.vue'
</script>

<style lang="less" scoped>
    .home {
        
        .el-col {
            padding: 0 !important;
        }
    }
   
</style>