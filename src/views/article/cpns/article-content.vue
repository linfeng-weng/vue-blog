<template>
  <div class="article-content">
    <div class="content" :style="{ margin: 'initial', padding: 'initial' }" v-html="articleData.content"></div>
    <div class="bottom">
      <div class="tag">
        <div>标签：</div>
        <span v-for="item in articleData.tags" :key="item">{{ item }}</span>
      </div>
      <i class="iconfont icon-fenxiang" @click="shareLink"></i>
    </div>
  </div>
</template>

<script setup>
  import copyLink from '@/utils/copyLink'
   defineProps({
        articleData: null
    })

    const shareLink = () => {
      copyLink()
    }
    
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
      list-style: revert;
    }

    :deep(ul) {
      padding-left: 25px;
    }

    :deep(ol) {
      padding-left: 25px;
    }

    :deep(pre) {
      background-color: #f7f7f7;
      padding: 10px;
      border-radius: 5px;
      font-family: 'Courier New', monospace;
      overflow: auto;
    }

    :deep(img) {
      max-width: 100% !important;
      height: auto !important;
    }

    :deep(blockquote) {
      background-color: #f7f7f7;
      border-left: 5px solid #fd8f44;
      padding: 10px;
      margin: 10px 0;
      font-style: italic;
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

@media(max-width: 1330px) {
  .article-content {
    margin: 0 200px;
  }
}

@media(max-width: 1080px) {
  .article-content {
    margin: 0 90px;
    padding: 10px 10px;
  }
}

@media(max-width: 880px) {
  .article-content {
    margin: 0 40px;
    padding: 10px 0;
  }
}


@media(max-width: 540px) {
  .article-content {
    margin: 0 10px;
    font-size: 14px;

    .content {

      :deep(h1) {
        font-size: 24px;
      }

      :deep(h2) {
        font-size: 18px;
      }

      :deep(h3) {
        font-size: 16px;
      }


    }
  }
}
</style>
