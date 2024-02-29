<template>
  <div class="content-box container">
    <layout>
      <template #left>
        <div class="article-content border-common">
          <div class="ai-abstract" v-if="articleData.aiAbstract">
            <div class="robot"><img src="@/assets/img/AI.png" /></div>
            <div class="abstract">&nbsp;&nbsp;{{ articleData.aiAbstract }}</div>
          </div>
          <div
            class="content"
            :style="{ margin: 'initial', padding: 'initial' }"
            v-html="articleData.content"
            ref="articleRef"
          ></div>
          <div class="bottom">
            <div class="tag">
              <div>标签:</div>
              <span v-for="item in articleData.tags" :key="item">{{ item.name ?? '' }}</span>
            </div>
            <i class="iconfont icon-fenxiang" @click="copyLink"></i>
          </div>
        </div>
      </template>
      <template #right>
        <div class="side">
          <userCard class="card"></userCard>
          <catalog v-show="showCatalog" class="catalog-box" :titleList="titleList"></catalog>
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
const showCatalog = ref(false)

watch(
  () => props.articleData,
  async () => {
    await nextTick()
    const arr = await getCatalogStructure(articleRef)
    if (!arr) return
    showCatalog.value = true
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
  margin-top: 20px;
  padding: 30px 60px;
  border-bottom: 1px solid #e7e7e7;
  line-height: 28px;
  letter-spacing: 0.3px;
  text-align: left;
  font-size: 16px;

  .ai-abstract {
    column-gap: 10px;
    padding: 20px;
    border-radius: 10px;
    // background-image: url('../../../assets/img/abstract-bg1.jpg');
    background-color: #fff6f6;

    .robot {
      flex-shrink: 0;
      width: 30px;
      height: 30px;
    }

    .abstract {
      font-weight: 700;
      font-size: 14px;
      color: #a5a5a5;
    }
  }

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
        font-size: 16px !important;
        padding: 0 5px;
      }
    }
    :deep(a) {
      text-decoration: underline;
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
      tab-size: 4;
    }

    :deep(img) {
      max-width: 100%;
      height: auto !important;
    }

    :deep(blockquote) {
      background-color: #f7f7f7;
      border-left: 5px solid var(--second-color);
      padding: 10px;
      margin: 10px 0;
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
</style>
