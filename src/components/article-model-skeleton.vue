<template>
  <div class="article-model-skeleton">
    <el-skeleton animated :count="6">
      <template #template>
        <div class="article border-common">
          <div class="left">
            <el-skeleton-item variant="p"></el-skeleton-item>
            <el-skeleton-item variant="p"></el-skeleton-item>
            <el-skeleton-item variant="p" style="width: 30%"></el-skeleton-item>
          </div>
          <el-skeleton-item variant="image" class="img" />
        </div>
      </template>
    </el-skeleton>
  </div>
</template>

<script setup></script>

<style lang="less" scoped>
.article-model-skeleton {
  margin-top: 20px;

  .article {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 20px 20px 20px;
    padding: 0 15px 0 30px;
    height: 190px;

    .left {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: space-around;
    }

    .img {
      flex-shrink: 0;
      margin-left: 20px;
      width: 250px;
      height: 168px;
    }
  }
}
</style>
