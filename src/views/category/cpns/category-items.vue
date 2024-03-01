<template>
  <div class="category-items border-common">
    <div class="title">
      <i class="iconfont icon-fenlei"></i>
      <span>分类：</span>
    </div>
    <div class="items">
      <template v-for="item in categoryData" :key="item.name">
        <div class="item" @click="itemClick(item._id, item.name)">
          <i class="iconfont icon-wenjianjia"></i>
          <span>{{ item.name }} ({{ item.num }})</span>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import router from '@/router'
import useCategoryStore from '@/stores/modules/category'
import useUserCardStore from '@/stores/modules/userCard'
import { storeToRefs } from 'pinia'

const categoryStore = useCategoryStore()
const userCardStroe = useUserCardStore()
const { nameChosen } = storeToRefs(categoryStore)
const { categoryData } = storeToRefs(userCardStroe)

const itemClick = (id, name) => {
  nameChosen.value = name
  router.push(`/category/${id}`)
}
</script>

<style lang="less" scoped>
.category-items {
  margin: 20px 25px;
  padding: 40px;
  color: var(--text-color);

  .title {
    display: flex;
    column-gap: 10px;
  }

  .items {
    margin: 25px 50px;
    display: flex;
    // justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    column-gap: 50px;

    .item {
      margin: 5px 0;
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
