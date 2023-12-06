<template>
  <div class="catalog">
    <div class="header">目录</div>
    <div class="titles" ref="catalogRef">
      <div
        v-for="(item, index) in titleList"
        :key="item.title"
        :class="{ title: true, active: currentIndex === index }"
        :style="{
          paddingLeft: `${item.indent * 8 + 8}px`,
          color: item.color
        }"
        @click="titleClick(item.offsetTop, index)"
      >
        {{ item.title }}
      </div>
    </div>
  </div>
</template>

<script setup>
import useScroll from '@/hooks/useScroll'

const catalogRef = ref(null)
const props = defineProps({
  titleList: {
    type: Array,
    default: []
  }
})

// 当前观看部分目录下标
const currentIndex = ref(0)
const isClick = ref(false)
const { scrollTop, clientHeight, isReachBottom } = useScroll()

let currentDistance = 0
const titleClick = (offsetTop, index) => {
  isClick.value = true
  currentDistance = offsetTop - clientHeight.value / 2
  window.scrollTo(0, currentDistance)
  currentIndex.value = index
}

watch(scrollTop, () => {
  if (Number(scrollTop.value.toFixed(0)) - Number(currentDistance.toFixed(0)) === 0) isClick.value = false
  if (isClick.value) return
  if (isReachBottom.value) {
    currentIndex.value = props.titleList.length - 1
    isReachBottom.value = false
    return
  }

  props.titleList.forEach((item, index) => {
    if (Number(scrollTop.value.toFixed(0)) >= item.offsetTop - clientHeight.value / 2) currentIndex.value = index
  })
})

watch(currentIndex, (newValue) => {
  if (newValue >= 6) {
    catalogRef.value?.scrollTo(0, (newValue - 6) * 26)
  } else {
    catalogRef.value?.scrollTo(0, 0)
  }
})
</script>

<style lang="less" scoped>
.catalog {
  position: relative;
  margin-top: 30px;
  padding: 20px 10px;
  width: 280px;

  background-color: #fff;
  box-shadow: var(--box-shadow);
  border-radius: 5px;

  .header {
    // background-color: yellow;
    padding-bottom: 5px;
    margin-bottom: 5px;
    border-bottom: 1px solid #e5e7eb;
  }
  .active {
    position: relative;
    color: var(--second-color) !important;
    &::before {
      content: '';
      position: absolute;
      z-index: 9;
      left: 0;
      width: 2px;
      height: 18px;
      background-color: var(--second-color);
    }
  }

  .titles {
    max-height: 300px;
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 3px;
      // height: 5px;
    }

    &::-webkit-scrollbar-thumb {
      background: #e4e4e4;
      border-radius: 10px;
    }
  }
  .title {
    font-size: 14px;
    padding: 5px 0;
    white-space: nowrap;
    cursor: pointer;
    text-overflow: ellipsis;
    overflow: hidden;
    overflow-y: auto;

    &:hover {
      color: var(--second-color) !important;
    }
  }
}
</style>
