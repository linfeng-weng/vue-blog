<template>
  <div class="user-card unselectable">
    <div class="avatar">
      <img src="@/assets/img/avatar.jpg" alt="" />
    </div>
    <div class="username">欲知新</div>
    <div class="intro">To learn something new</div>
    <div class="article-message">
      <div class="sort">
        <div>文章</div>
        <div>{{ articleCount }}</div>
      </div>
      <div class="sort">
        <div>分类</div>
        <div>{{ categoryCount }}</div>
      </div>
      <div class="sort">
        <div>标签</div>
        <div>{{ tagCount }}</div>
      </div>
    </div>
    <div class="other-message">
      <a href="https://github.com/linfeng-weng" target="_blank">
        <i class="iconfont icon-github"></i>
      </a>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import useUserCardStore from '@/stores/modules/userCard'
const { articleCount, categoryCount, tagCount } = storeToRefs(useUserCardStore())
</script>

<style lang="less" scoped>
.user-card {
  position: sticky;
  top: 80px;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 25px;
  padding: 40px 10px 20px;
  box-shadow: var(--box-shadow);
  border-radius: 8px;
  background-color: #fff;
  width: 280px;

  .avatar {
    width: 100px;
    height: 100px;

    img {
      width: 100%;
      border-radius: 50%;
      object-fit: cover;
      object-position: center;
    }
  }

  .username {
    font-size: 18px;
  }

  .intro {
    font-size: 14px;
    margin-bottom: -5px;
  }

  .article-message {
    display: flex;
    column-gap: 15px;

    .sort {
      display: flex;
      flex-direction: column;
      align-items: center;
      row-gap: 10px;
    }

    .other-message {
      i:hover {
        color: var(--second-color);
        transition: all 0.2s linear;
      }
    }
  }
}

@import '@/assets/responsive/user-card.less';
</style>
