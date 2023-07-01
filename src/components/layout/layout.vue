<template>
    <el-row :gutter="20">
        <el-col :span="17">
            <slot name="left"></slot>
        </el-col>
        <el-col :span="7">
            <slot name="right"></slot>
        </el-col>
    </el-row>
</template>

<script setup>
    
</script>

<style lang="less" scoped>
.el-col {
    padding: 0 !important;
}
</style>