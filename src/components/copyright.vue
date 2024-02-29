<template>
  <div class="copyright">
    <p>Copyright &#169; {{ date }} <a href="https://github.com/linfeng-weng">欲知新</a></p>
    <a style="" class="icp" href="https://beian.miit.gov.cn/shouye.html">{{ icp }}</a>
  </div>
</template>

<script setup>
const icp = import.meta.env.VITE_ICP || ''
const date = import.meta.env.VITE_COPYRIGHT_DATE || '2024'
</script>

<style lang="less" scoped>
.copyright {
  position: relative;
  bottom: 0;
  margin-top: 15px;
  margin-bottom: 10px;
  font-size: 14px;
  // height: 40px;
  text-align: center;
  color: #999aaa;
  cursor: default;

  a {
    color: #999aaa;
    &:hover {
      color: var(--second-color);
    }
  }
  .icp {
    display: inline-block;
    margin-top: 10px;
    margin-bottom: 20px;
  }
}

@media (max-width: 700px) {
  .copyright {
    font-size: 12px;
    margin-top: 10px;
    margin-bottom: 5px;
  }
}
</style>
