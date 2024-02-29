<template>
  <div class="article-model">
    <template v-for="item in articleList" :key="item._id">
      <div ref="articleRef" class="article border-common" @click="viewPost(item._id)">
        <div class="left">
          <div class="top">
            <div class="title">
              {{ item.title }}
            </div>
            <div class="category" v-if="item.category?.name">
              <i class="iconfont icon-wenjianjia"></i>
              <p>{{ item.category?.name }}</p>
            </div>
          </div>
          <div class="content">{{ item.abstract }}</div>
          <div class="message">
            {{ formatDate(item.created_at, 'YYYY-MM-DD') }}
          </div>
        </div>
        <div class="right">
          <div class="cover">
            <img
              ref="imgsRef"
              :src="default_cover"
              :data-src="item.cover ? item.cover : default_cover"
              alt=""
            />
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { formatDate } from '@/utils/formatDate'
import default_cover from '@/assets/img/default_cover.webp'
import router from '@/router'

const props = defineProps({
  articleList: {
    type: Array,
    default: () => []
  }
})

const viewPost = (id) => {
  router.push(`/article/${id}`)
}

const imgsRef = ref()
const articleRef = ref()

const Observer = () => {
  const lazyLoadConfig = {
    rootMargin: '0px 0px -10px 0px'
  }
  let observer = new IntersectionObserver((entries, self) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate__fadeInUp', 'show')
        const imgEl = entry.target.children[1].children[0].children[0]
        imgEl.src = imgEl.dataset.src
        imgEl.removeAttribute('data-src')
        self.unobserve(entry.target)
      }
    })
  }, lazyLoadConfig)

  articleRef.value.forEach((item) => {
    observer.observe(item)
  })
}

watch(
  () => props.articleList,
  () => setTimeout(Observer, 0)
)
</script>

<style lang="less" scoped>
.article-model {
  margin-top: 20px;
  .article {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 20px 20px 20px;
    padding: 0 15px 0 30px;
    height: 190px;
    cursor: pointer;
    transition: all 0.2s;
    visibility: hidden;

    &.show {
      visibility: visible;
    }

    &:hover {
      box-shadow: 0 2px 8px hsl(0, 33%, 84%);
      img {
        overflow: hidden;
        transform: scale(1.1);
        transition: all 0.4s;
      }
      // transform: scale(1.01);
    }

    .left {
      width: 100%;
      display: flex;
      flex-direction: column;
      row-gap: 20px;
      // width: 525px;

      .top {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .title {
          width: 80%;
          font-size: 24px;
          height: 30px;
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
        color: #515151;
        line-height: 1.5;
        font-weight: normal;
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
      .cover {
        overflow: hidden;
        margin-left: 20px;
        width: 250px;
        height: 168px;
        border-radius: 8px;

        img {
          width: 250px;
          height: 168px;
          border-radius: 8px;
          object-fit: cover;
          object-position: center;
          transition: all 0.4s;
        }
      }
    }
  }
  .pagination {
    display: flex;
    justify-content: center;
  }
}

.animate__fadeInUp {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation-name: fadeInUp;
  animation-name: fadeInUp;
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@import '@/assets/responsive/article-model.less';
</style>
