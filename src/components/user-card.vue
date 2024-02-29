<template>
  <div class="user-card border-common unselectable">
    <div class="avatar">
      <img :src="userinfo.avatar ? userinfo.avatar : default_avatar" alt="" />
    </div>
    <div class="username">{{ userinfo.nickname ?? '欲知新' }}</div>
    <div class="intro">{{ userinfo.motto ?? 'To learn something new' }}</div>
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
      <a :href="userinfo.github ? userinfo.github : default_github" target="_blank">
        <i class="iconfont icon-github"></i>
      </a>
      <a href="/feed" target="_blank">
        <i class="iconfont icon-rss"></i>
      </a>
    </div>
    <!-- 播放音乐时显现 -->
    <div class="cd" :class="{ rotate: !isPause && !isEnd, pause: isPause }">
      <img src="@/assets/img/cd.png" alt="" />
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import default_avatar from '@/assets/img/avatar.jpg'
import useUserCardStore from '@/stores/modules/userCard'
import useMusicStore from '@/stores/modules/music'

const default_github = 'https://github.com/linfeng-weng'
const { articleCount, categoryCount, tagCount, userinfo } = storeToRefs(useUserCardStore())

const { isPause, isEnd } = storeToRefs(useMusicStore())
</script>

<style lang="less" scoped>
.user-card {
  position: relative;
  margin-top: 20px;
  // margin-right: 20px;
  // position: sticky;
  // top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 25px;
  padding: 40px 10px 20px;
  width: 280px;

  .avatar {
    width: 100px;
    height: 100px;

    img {
      width: 100px;
      height: 100px;
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
  }

  .other-message {
    display: flex;
    align-items: center;
    column-gap: 10px;
  }
  .cd {
    width: 30px;
    height: 30px;
    position: absolute;
    right: 20px;
    top: 20px;
    display: none;

    &.rotate {
      display: block;
      animation: rotate 5s linear infinite;
    }

    &.pause {
      display: block;
    }
  }
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@import '@/assets/responsive/user-card.less';
</style>
