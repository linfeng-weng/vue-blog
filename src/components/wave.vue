<template>
  <div class="wave">
    <svg viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
      <defs>
        <path
          id="gentle-wave"
          d="M -160 44 c 30 0 58 -18 88 -18 s 58 18 88 18 s 58 -18 88 -18 s 58 18 88 18 v 44 h -352 Z"
        ></path>
      </defs>
      <g class="parallax">
        <use href="#gentle-wave" x="48" y="3"></use>
        <use href="#gentle-wave" x="48" y="5"></use>
        <use href="#gentle-wave" x="48" y="7"></use>
        <use href="#gentle-wave" x="48" y="10"></use>
      </g>
    </svg>
  </div>
</template>

<script setup></script>

<style lang="less" scoped>
.wave {
  width: 100%;
  // height: 400px;
  // background-color: #1A1E21;
}
svg {
  width: 100%;
  height: 80px;
  background-color: var(--container-color);
}
.parallax > use {
  animation: move-forever 30s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
}
.parallax > use:nth-child(1) {
  animation-delay: -2s;
  animation-duration: 7s;
  fill: #f7f9fe;
  opacity: 0.5;
}
.parallax > use:nth-child(2) {
  animation-delay: -3s;
  animation-duration: 10s;
  fill: #f7f9fe;
  opacity: 0.6;
}
.parallax > use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 13s;
  fill: #f7f9fe;
  opacity: 0.7;
}
.parallax > use:nth-child(4) {
  animation-delay: -5s;
  animation-duration: 20s;
  fill: var(--bg-color);
  // opacity: .8;
}
@keyframes move-forever {
  0% {
    transform: translate3d(-90px, 0, 0);
  }
  100% {
    transform: translate3d(85px, 0, 0);
  }
}

@import '@/assets/responsive/wave.less';
</style>
