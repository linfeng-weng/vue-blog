<template>
  <div class="tag-items border-common">
    <div class="title">
      <i class="iconfont icon-tianchongxing-"></i>
      <span>标签：</span>
    </div>
    <div class="items">
      <template v-for="item in tagData" :key="item.name">
        <div class="item" @click="itemClick(item._id, item.name)">
          <span>{{ item.name }} ({{ item.num }})</span>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import router from '@/router'
import useTagStore from '@/stores/modules/tag'
import useUserCardStore from '@/stores/modules/userCard'
import { storeToRefs } from 'pinia'

const tagStore = useTagStore()
const userCardStroe = useUserCardStore()
const { nameChosen } = storeToRefs(tagStore)
const { tagData } = storeToRefs(userCardStroe)

const itemClick = (id, name) => {
  nameChosen.value = name
  router.push(`/tag/${id}`)
}
</script>

<style lang="less" scoped>
.tag-items {
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
    text-align: center;
    align-items: center;
    flex-wrap: wrap;
    column-gap: 20px;
    color: #777777;

    .item {
      margin: 12px 0;
      padding: 5px 8px;
      font-size: 14px;
      letter-spacing: 1px;
      cursor: pointer;
      background-color: #f3f3f3;
      border-radius: 2px;

      &:hover {
        color: #fff;
        background-color: var(--second-color);
        transition: background-color 0.3s linear;
      }
    }
  }
}

@media (max-width: 540px) {
  .tag-items {
    margin: 0 10px;
    padding: 20px;
    font-size: 14px;
    box-shadow: none;
    .title {
      column-gap: 6px;
    }
    .items {
      margin: 10px 10px;
      column-gap: 10px;
      .item {
        font-size: 12px;
      }
    }
  }
}
</style>
