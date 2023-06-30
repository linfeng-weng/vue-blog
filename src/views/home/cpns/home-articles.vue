<template>
  <div class="home-articles">
    <template v-for="items in article">
      <div class="article">
        <div class="left">
          <div class="top">
            <div class="title">
              {{ items.title }}
            </div>
            <div class="category">
              <i class="iconfont icon-wenjianjia1"></i>
              <p>{{ items.category }}</p>
            </div>
          </div>
          <div class="content">
            {{ items.content }}
          </div>
          <div class="message">2023-06-05</div>
        </div>
        <div class="right">
          <div class="cover">
            <img src="@/assets/img/cover04.jpg" />
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
  import article from '@/mock/articles'
</script>

<style lang="less" scoped>
.home-articles {
  .article {
    display: flex;
    align-items: center;
    margin: 20px;
    padding: 0 15px 0 30px;
    height: 180px;
    box-shadow: 0 4px 14px hsl(355deg 25% 15% / 10%);
    border-radius: 8px;

    .left {
      display: flex;
      flex-direction: column;
      row-gap: 20px;
      width: 525px;

      .top {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .title {
          width: 80%;
          font-size: 28px;
          font-weight: 800;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .category {
          display: flex;
          align-items: center;
          column-gap: 2px;
          color: #9a9a9a;

          p {
            margin: 0;
            font-size: 14px;
            width: 32px;
            height: 16px;
            line-height: 16px;
          }
        }
      }

      .content {
        color: var(--text-color);
        word-break: break-all;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }

      .message {
        color: #8a919f;
      }
    }

    .right {
      justify-self: flex-end;

      .cover {
        margin-left: 20px;
        width: 250px;

        img {
          width: 100%;
          border-radius: 8px;
          object-fit: cover;
          object-position: center;
        }
      }
    }
  }
}
</style>
