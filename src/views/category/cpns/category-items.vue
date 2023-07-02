<template>
    <div class="category-items">
        <div class="title">
            <i class="iconfont icon-fenlei"></i>
            <span>分类：</span>
        </div>
        <div class="items">
            <template v-for="i in 6">
                <div class="item">
                    <i class="iconfont icon-wenjianjia"></i>
                    <span>前端(5)</span>
                </div>
            </template>
        </div>
    </div>
</template>

<script setup>
    
</script>

<style lang="less" scoped>
.category-items {
    margin: 20px 25px;
    padding: 40px;
    box-shadow: 0 4px 14px hsl(355deg 25% 15% / 10%);
    border-radius: 8px;
    color: var(--text-color);

    .title {
        display: flex;
        column-gap: 10px;
    }

    .items {
        margin: 25px 50px;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        column-gap: 50px;

        .item {
            padding: 10px 0;
            display: flex;
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
</style>