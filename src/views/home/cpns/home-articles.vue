<template>
  <div class="home-articles">
    <div class="post-filter">
      <span class="filter-item active">全部</span>
      <span class="filter-item">知识</span>
      <span class="filter-item">生活</span>
      <span class="filter-item">前端</span>
    </div>
    <template v-for="items in article">
      <div class="article">
        <div class="left">
          <div class="top">
            <div class="title">
              {{ items.title }}
            </div>
            <div class="category">
              <i class="iconfont icon-wenjianjia"></i>
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
  .post-filter {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 24px;
    margin: 10px 20px;
    padding: 10px;

    .filter-item {
      font-size: 14px;
      cursor: pointer;
    }

    .active {
      background: var(--second-color);
      color: #fff;
      padding: 4px 10px;
      border-radius: 4px;
    }
  }

  .article {
    display: flex;
    align-items: center;
    margin: 20px;
    padding: 0 15px 0 30px;
    height: 190px;
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
          column-gap: 6px;
          color: #9a9a9a;
          font-size: 14px;

          i {
            font-size: 12px;
          }

          p {
            margin: 0;
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

        * {
          font-size: 16px;
          font-weight: inherit;
          font-style: inherit;
        }
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
