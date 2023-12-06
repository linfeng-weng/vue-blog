<template>
  <div class="content-box container">
    <layout>
      <template #left>
        <div class="article-content">
          <div
            class="content"
            :style="{ margin: 'initial', padding: 'initial' }"
            v-html="articleData.content"
            ref="articleRef"
          ></div>
          <div class="bottom">
            <div class="tag">
              <div>标签:</div>
              <span v-for="item in articleData.tags" :key="item">{{ item }}</span>
            </div>
            <i class="iconfont icon-fenxiang" @click="copyLink"></i>
          </div>
        </div>
      </template>
      <template #right>
        <div class="side">
          <userCard class="card"></userCard>
          <catalog class="catalog-box" :titleList="titleList"></catalog>
        </div>
      </template>
    </layout>
  </div>
</template>

<script setup>
import layout from '@/components/layout.vue'
import catalog from './catalog.vue'
import copyLink from '@/utils/copyLink'
import userCard from '@/components/user-card.vue'
import getCatalogStructure from '@/utils/getCatalogStructure'

const props = defineProps({
  articleData: null
})

const articleRef = ref(null)
const titleList = ref([])

watch(
  () => props.articleData,
  async () => {
    await nextTick()
    const arr = await getCatalogStructure(articleRef)
    titleList.value = arr
  }
)
</script>

<style lang="less" scoped>
.content-box {
  margin-top: 40px;
}
.article-content {
  align-items: center;
  max-width: 820px;
  margin: auto;
  padding: 30px 60px;
  border-bottom: 1px solid #e7e7e7;
  line-height: 28px;
  letter-spacing: 0.3px;
  background-color: #fff;
  text-align: justify;
  box-shadow: var(--box-shadow);
  border-radius: 5px;

  .content {
    :deep(*) {
      margin: revert;
      padding: revert;
      list-style: revert;
    }

    :deep(h1) {
      font-size: 28px;
      padding-bottom: 8px;
      border-bottom: 1px solid #e5e7eb;
    }

    :deep(h2) {
      font-size: 24px;
    }

    :deep(h3) {
      font-size: 20px;
    }

    :deep(ul) {
      padding-left: 25px;
    }

    :deep(ol) {
      padding-left: 25px;
    }

    :deep(p) {
      span {
        font-size: 14px;
        padding: 0 5px;
      }
    }

    :deep(pre) {
      background-color: #282c34;
      color: #c8c8c8;
      padding: 20px;
      border-radius: 5px;
      overflow-x: auto;
      font-family: 'Fira Code', monospace;
      font-size: 14px;
      line-height: 1.5;
    }

    :deep(img) {
      max-width: 100%;
      height: auto;
    }

    :deep(blockquote) {
      background-color: #f7f7f7;
      border-left: 5px solid var(--second-color);
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
        background-color: #f5f5f5;
        border: 1px solid #f6f6f6;
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

.side {
  margin-left: 20px;
  height: 100%;
  .card {
    position: static !important;
  }

  .catalog-box {
    position: sticky;
    top: 80px;
  }
}

@import '@/assets/responsive/article-content.less';

// @media(max-width: 1330px) {
//   .article-content {
//     margin: 0 200px;
//   }
// }

// @media(max-width: 1080px) {
//   .article-content {
//     margin: 0 90px;
//     padding: 10px 10px;
//   }
// }

// @media(max-width: 880px) {
//   .article-content {
//     margin: 0 40px;
//     padding: 10px 0;
//   }
// }

// @media(max-width: 540px) {
//   .article-content {
//     margin: 0 10px;
//     font-size: 14px;

//     .content {

//       :deep(h1) {
//         font-size: 24px;
//       }

//       :deep(h2) {
//         font-size: 18px;
//       }

//       :deep(h3) {
//         font-size: 16px;
//       }

//     }
//   }
// }
</style>
