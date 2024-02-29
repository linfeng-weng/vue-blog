<template>
  <div class="post-header">
    <div class="header-content">
      <h1>{{ articleData.title }}</h1>
      <p class="message-box">
        <div>发布于：<span>{{ formatDate(articleData.created_at, 'YYYY-MM-DD') }}</span></div>
        <div>浏览量：<span>{{ articleData.views }}</span></div>
        <!-- &#8194;&#8194; -->
        <!--更新于：<span>{{ formatDate(articleData.updated_at, 'YYYY-MM-DD') }}</span>-->
      </p>
    </div>
    <wave class="wave"></wave>
  </div>
</template>

<script setup>
import wave from '@/components/wave.vue'
import { formatDate } from '@/utils/formatDate'

defineProps({
  articleData: null
})
</script>

<style lang="less" scoped>
.post-header {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 400px;
  background-color: var(--container-color);
  color: #fff;

  .wave {
    position: absolute;
    bottom: -5px;
  }

  .header-content {
    width: 100%;
    padding: 40px 40px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      margin: 0;
      font-size: 42px;
      text-align: center;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .message-box {
      display: flex;
      align-items: center;
      column-gap: 20px;
      margin: 32px 0;
      color: #fdfdfc;

      span {
        color: #ff9f60;
      }
    }
  }
}

@import '@/assets/responsive/article-header.less';
</style>
