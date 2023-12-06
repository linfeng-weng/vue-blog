<template>
  <div class="tab-control">
    <span @click="router.back()"><i class="iconfont icon-fanhui"></i></span>
    <span @click="scrollTop"><i class="iconfont icon-zhiding"></i></span>
  </div>
</template>

<script setup>
import router from '@/router'

const scrollTop = () => {
  window.scrollTo(0, 0)
}
</script>

<style lang="less" scoped>
.tab-control {
  z-index: 9;
  position: fixed;
  bottom: 20px;
  right: 40px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  span {
    width: 40px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    background-color: #fff;
    border-radius: 50%;

    i {
      font-size: 18px;
      color: #515767;
      cursor: pointer;

      &:hover {
        color: var(--second-color);
        transition: 0.2s;
      }
    }
  }
}

@media (max-width: 1140px) {
  .tab-control {
    display: none;
  }
}
</style>
