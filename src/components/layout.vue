<template>
  <div class="layout">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script setup></script>

<style lang="less" scoped>
.layout {
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  width: 100%;
  padding: 20px 20px;
  .left {
    flex: 1;
  }
}

@import '@/assets/responsive/layout.less';
</style>
