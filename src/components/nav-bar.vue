<template>
  <div class="nav-bar unselectable" :class="{ change: isScroll }">
    <div class="logo-area">
      <div class="logo" v-html="logo" @click="logoClick"></div>
    </div>
    <div class="options">
      <template v-for="item in options" :key="item.name">
        <router-link
          :to="item.path"
          class="option"
          :class="{ active: activeIndex === item.path }"
          >{{ item.name }}</router-link
        >
      </template>
    </div>
  </div>
</template>

<script setup>
import router from '@/router'
import { useRoute } from 'vue-router'

const route = useRoute()
const options = [
  { name: '首页', path: '/home' },
  { name: '分类', path: '/category' },
  { name: '标签', path: '/tag' },
  { name: '归档', path: '/archive' },
  { name: '搜索', path: '/search' }
]

const logo = import.meta.env.VITE_LOGO

const activeIndex = computed(() => route.path)

const isScroll = ref(true)

const logoClick = () => {
  router.push('/home')
}

const navbarScrollListenerHandler = () => {
  if (activeIndex.value !== '/home') return (isScroll.value = false)
  if (window.scrollY === 0) isScroll.value = true
  else isScroll.value = false
}

watch(activeIndex, (newValue) => {
  if (newValue === '/home') isScroll.value = true
  else isScroll.value = false
})

onMounted(() => {
  window.addEventListener('scroll', navbarScrollListenerHandler)
})

onUnmounted(() => {
  window.removeEventListener('scroll', navbarScrollListenerHandler)
})
</script>

<style lang="less" scoped>
.nav-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
  height: 60px;
  padding: 0 32px;
  padding-bottom: 2px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  color: #000;
  border-bottom: 1px solid #dcdfe6;
  transition: all 0.3s;

  &.change {
    background-color: var(--container-color);
    color: #fff;
    border-bottom: 0;
    transition: all 0.3s;
    .logo {
      color: #fff;
    }
    .options .option {
      color: #fff;
    }
  }

  .logo-area {
    font-size: 24px;
    font-weight: 600;
    padding: 0 20px;
    cursor: pointer;
  }
  .options {
    display: flex;
    align-items: center;
    height: 60px;
    font-size: 16px;
    .option {
      height: 60px;
      line-height: 60px;
      position: relative;
      padding: 0 20px;

      &.active {
        color: var(--second-color);
        border-bottom: 2px solid var(--second-color);
      }
    }
  }
}

@import '@/assets/responsive/nav-bar.less';
</style>
