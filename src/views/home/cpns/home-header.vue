<template>
  <div class="home-header">
    <div class="home-text">
      <h2 v-html="headTitle"></h2>
      <p>{{ aphorism }}</p>
    </div>
    <wave class="wave" />
    <codeBgWall class="code-bg-wall" />
  </div>
</template>

<script setup>
import wave from '@/components/wave.vue'
import codeBgWall from '@/components/code-bg-wall.vue'

const headTitle = import.meta.env.VITE_HEAD_TITLE
const aphorism = ref('')

const typeList = () => {
  const data = import.meta.env.VITE_APHORISM.split('')
  let index = 0
  const writing = () => {
    if (index < data.length) {
      aphorism.value += data[index++]
      setTimeout(writing, 150)
    }
  }
  writing()
}

onMounted(() => {
  typeList()
})
</script>

<style lang="less" scoped>
.home-header {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  height: 490px;
  background-color: var(--container-color);
  color: #fff;

  .home-text {
    z-index: 2;
    background-color: var(--container-color);
    text-align: center;
    cursor: default;
    animation: fadeInDown;
    animation-duration: 1s;
    font-size: 16px;

    h2 {
      font-size: 56px;

      span {
        color: var(--second-color);
      }
    }

    p {
      letter-spacing: 3px;
      margin-top: 20px;
    }
  }

  .wave {
    position: absolute;
    z-index: 3;
    bottom: -5px;
  }

  .code-bg-wall {
    position: absolute;
  }
}

@keyframes fadeInDown {
  0% {
    opacity: 0;
    transform: translateY(-50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@import '@/assets/responsive/home-header.less';
</style>
