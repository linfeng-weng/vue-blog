<template>
  <div class="category-items">
    <div class="title">
      <i class="iconfont icon-fenlei"></i>
      <span>分类：</span>
    </div>
    <div class="items">
      <template v-for="item in categoryData" :key="item.name">
        <router-link :to="/category/ + item.name">
          <div class="item">
            <i class="iconfont icon-wenjianjia"></i>
            <span>{{ item.name }} ({{ item.num }})</span>
          </div>
        </router-link>
      </template>
    </div>
  </div>
</template>

<script setup>
import { getCategory } from '@/service'

const categoryData = ref([])

// getCategory().then(res => {
//         console.log('cate')
//         categoryData.value = res.category
// })

onMounted(() => {
  console.log(1)
  getCategory().then((res) => {
    console.log('cate')
    categoryData.value = res.category
  })
})
</script>

<style lang="less" scoped>
.category-items {
  margin: 0 25px;
  padding: 40px;
  box-shadow: var(--box-shadow);
  border-radius: 8px;
  color: var(--text-color);
  background-color: #fff;

  .title {
    display: flex;
    column-gap: 10px;
  }

  .items {
    margin: 25px 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    column-gap: 50px;

    .item {
      padding: 10px 0;
      display: flex;
      align-items: center;
      color: #6e6e6e;
      column-gap: 6px;
      letter-spacing: 1px;
      cursor: pointer;

      &:hover {
        color: var(--second-color);
        transition: all 0.2s linear;
      }
    }
  }
}

@media (max-width: 540px) {
  .category-items {
    margin: 0 10px;
    padding: 20px;
    font-size: 14px;
    box-shadow: none;
    .title {
      column-gap: 6px;
    }
    .items {
      margin: 10px 10px;
      .item {
        column-gap: 4px;

        .icon-wenjianjia::before {
          font-size: 12px;
        }
      }
    }
  }
}
</style>
