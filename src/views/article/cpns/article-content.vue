<template>
  <div class="article-content">
    <div class="content" :style="{ margin: 'initial', padding: 'initial' }" v-html="articleData.content"></div>
    <div class="bottom">
      <div class="tag">
        <div>标签：</div>
        <span v-for="item in articleData.tags" :key="item">{{ item }}</span>
      </div>
      <i class="iconfont icon-fenxiang"></i>
    </div>
  </div>
</template>

<script setup>
   defineProps({
        articleData: null
    })
</script>

<style lang="less" scoped>
.article-content {
  margin: 0 310px;
  margin-top: 130px;
  padding: 10px 20px;
  border-bottom: 1px solid #e7e7e7;
  line-height: 28px;
  letter-spacing: 0.3px;
  text-align: justify;

  .content {
    :deep(*) {
      margin: revert;
      padding: revert;
    }
  }

  .bottom {
    margin: 20px 0 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .tag {
      display: flex;
      color: #919291;
      column-gap: 10px;
      cursor: default;

      span {
        background-color: #f7f8fa;
        padding: 2px 5px;
      }
    }

    i:hover {
      cursor: pointer;
      color: var(--second-color);
      transition: all 0.2s linear;
    }
  }
}
</style>
