<template>
  <div class="notice-board border-common">
    <div class="title"><i class="iconfont icon-speaker-full"></i><span>公告栏</span></div>
    <div class="content">{{ content }}</div>
  </div>
</template>

<script setup>
defineProps({
  content: String
})
</script>

<style lang="less" scoped>
.notice-board {
  margin-top: 20px;
  padding: 20px;
  color: var(--text-color);
  overflow: hidden;

  .title {
    display: flex;
    align-items: center;
    column-gap: 10px;
    // background-color: #fdf6e3;
  }

  .content {
    margin-top: 15px;
    // width: 240px;
    word-break: break-all;
    white-space: wrap;
    text-indent: 14px;
    text-align: justify;
    line-height: 20px;
    letter-spacing: 0.5px;
    font-size: 14px;
    color: #6b6b6b;
  }
}

@media (max-width: 1024px) {
  .notice-board {
    display: none;
  }
}
</style>
