<template>
  <div class="nav-bar unselectable">
    <el-menu :default-active="activeIndex" mode="horizontal" :ellipsis="false" @select="handleSelect">
      <el-menu-item index="/" class="logo">欲知<span style="color: var(--second-color);">新</span></el-menu-item>
      <div class="flex-grow" />
      <el-menu-item index="/home">首页</el-menu-item>
      <el-menu-item index="/category">分类</el-menu-item>
      <el-menu-item index="/tag">标签</el-menu-item>
      <el-menu-item index="/archive">归档</el-menu-item>
    </el-menu>
  </div>
</template>

<script setup>
    import { computed } from 'vue'
    import { useRoute, useRouter } from 'vue-router'
    const route = useRoute()
    const router = useRouter()
    const activeIndex = computed(() => route.path)
    const handleSelect = (key) => {
      router.push(key)
    }
</script>

<style lang="less" scoped>
.flex-grow {
  flex-grow: 1;
}

.el-menu {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 32px;
  z-index: 9;

  .el-menu-item.logo {
    font-size: 24px;
    font-weight: 600;
    border-bottom: none;
    color: #000 !important;
    background-color: #fff;
  }
}
</style>