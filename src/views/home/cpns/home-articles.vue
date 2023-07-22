<template>
  <div class="home-articles">
    <!-- <div class="post-filter unselectable">
      <span class="filter-item active">全部</span>
      <span class="filter-item">知识</span>
      <span class="filter-item">生活</span>
      <span class="filter-item">前端</span>
    </div> -->
    <template v-for="item in articleList" :key="item._id">
      <div class="article" @click="viewPost(item._id)">
        <div class="left">
          <div class="top">
            <div class="title">
              {{ item.title }}
            </div>
            <div class="category">
              <i class="iconfont icon-wenjianjia"></i>
              <p>{{ item.category }}</p>
            </div>
          </div>
          <div class="content" v-html="item.content"></div>
          <div class="message">{{ formatDate(item.created_at, 'YYYY-MM-DD') }}</div>
        </div>
        <div class="right">
          <div class="cover">
            <img :src="Server_URL + item.cover" />
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
  import { formatDate } from '@/utils/formatDate'
  import useArticleStore from '@/stores/modules/article'
  import { storeToRefs } from 'pinia'
  import { Server_URL } from '@/service/request/config'
  import router from '@/router'

  const articleStore = useArticleStore()
  articleStore.fetchArticleList()
  const { articleList } = storeToRefs(articleStore)

  const viewPost = (id) => {
    router.push(`/article/${id}`)
  }

</script>

<style lang="less" scoped>
.home-articles {

  // .post-filter {
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  //   column-gap: 24px;
  //   margin: 10px 20px;
  //   padding: 10px;

  //   .filter-item {
  //     font-size: 14px;
  //     cursor: pointer;
  //   }

  //   .active {
  //     background: var(--second-color);
  //     color: #fff;
  //     padding: 4px 10px;
  //     border-radius: 4px;
  //   }
  // }

  .article {
    display: flex;
    align-items: center;
    margin: 20px;
    padding: 0 15px 0 30px;
    height: 190px;
    box-shadow: 0 4px 14px hsl(355deg 25% 15% / 10%);
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      box-shadow: 0 4px 14px hsl(0, 29%, 83%);
      transform: scale(1.01);
      transition: all 0.3s;
    }

    .left {
      display: flex;
      flex-direction: column;
      row-gap: 25px;
      width: 525px;

      .top {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .title {
          width: 80%;
          font-size: 24px;
          font-weight: 800;
          color: #252933;
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
        height: 36.8px;
        color: var(--text-color);
        color: #484848;
        font-weight: normal;
        word-break: break-all;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;

        :deep(*) {
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
