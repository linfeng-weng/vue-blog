<template>
  <div class="music-list border-common">
    <div class="title">
      <i class="iconfont icon-ruererji"></i>
      <span>热门音乐</span>
    </div>
    <div class="list">
      <div
        class="music"
        @click="play(item.id, item.fee, index)"
        v-for="(item, index) in songList"
        :key="item.name"
      >
        <div class="pic">
          <img ref="imgRef" src="@/assets/img/empty.webp" :data-src="item.al.picUrl" />
        </div>
        <div class="message">
          <div class="name">{{ item.name }}</div>
          <div class="author">{{ getAuthors(item.ar) }}</div>
        </div>
        <div class="operate">
          <i v-show="item.fee === 1">vip</i>
          <i class="iconfont icon-bofang" v-show="item.fee !== 1 && playIndex !== index"></i>
          <i
            class="iconfont icon-zanting"
            v-show="item.fee !== 1 && playIndex === index && !isEnd"
          ></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import EventBus from '@/utils/eventBus'
import { getHotMusicApi } from '@/service'
import { watch } from 'vue'
import { storeToRefs } from 'pinia'
import useMusicStore from '@/stores/modules/music'

const { isPause, isEnd } = storeToRefs(useMusicStore())

const props = defineProps({
  id: {
    type: Number,
    default: 0
  }
})

const playIndex = ref(-1)
const songList = ref([])

const getSongList = async () => {
  const res = await getHotMusicApi(props.id)
  songList.value = res.songs
}
getSongList()

const getAuthors = (arr) => {
  let names = []
  arr.forEach((item) => {
    names.push(item.name)
  })
  return names.join(' , ')
}

const play = (id, fee, index) => {
  if (fee === 1) return
  isEnd.value = false
  if (playIndex.value !== index || isPause.value) {
    playIndex.value = index
    isPause.value = false
    EventBus.emit('playMusic', id)
  } else {
    isPause.value = true
    playIndex.value = -1
    EventBus.emit('pauseMusic')
  }
}

EventBus.on('musicEnd', () => {
  playIndex.value = -1
})

const imgRef = ref(null)

const Observer = () => {
  const lazyLoadConfig = {
    rootMargin: '0px 0px 50px 0px'
  }
  let observer = new IntersectionObserver((entries, self) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.src = entry.target.dataset.src
        entry.target.removeAttribute('data-src')
        self.unobserve(entry.target)
      }
    })
  }, lazyLoadConfig)

  imgRef.value.forEach((item) => {
    observer.observe(item)
  })
}

watch(songList, () => setTimeout(Observer, 0))
</script>

<style lang="less" scoped>
.music-list {
  margin-top: 20px;
  padding: 20px;
  background-color: #fff;
  color: var(--text-color);

  .title {
    display: flex;
    align-items: center;
    column-gap: 10px;
    font-size: 14px;
    font-weight: 600;
  }

  .list {
    margin-top: 20px;
    height: 250px;
    overflow-y: auto;

    &::-webkit-scrollbar {
      display: none;
    }
    .music {
      display: flex;
      align-items: center;
      // column-gap: 20px;
      padding: 4px;
      border-radius: 2px;
      font-size: 14px;
      cursor: pointer;
      transition: all 0.2s;

      &:hover {
        background-color: #eee;
        transition: all 0.2s;
      }

      .pic {
        margin-right: 8px;
        width: 45px;
        height: 45px;
        border-radius: 2px;

        img {
          width: 45px;
          height: 45px;
          border-radius: 2px;
        }
      }

      .message {
        display: flex;
        flex-direction: column;
        row-gap: 2px;
        .name,
        .author {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .author {
          font-size: 12px;
          color: #9c9c9c;
        }
      }

      .operate {
        margin-left: auto;
      }
    }
  }
}

@media (max-width: 1024px) {
  .music-list {
    display: none;
  }
}
</style>
