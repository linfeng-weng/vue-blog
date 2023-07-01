<template>
    <div class="archive-time">
        <template v-for="i in 4">
            <div class="month-box">
                <h1>2023-06</h1>
                <template v-for="i in 6">
                    <div class="article">
                        <span class="date">2023-06-22</span>
                        <span class="title">vue3项目结构搭建</span>
                    </div>
                </template>
            </div>
        </template>
    </div>
</template>

<script setup>
    
</script>

<style lang="less" scoped>
.archive-time {
    margin: 20px 25px;
    padding: 50px 90px;
    box-shadow: 0 4px 14px hsl(355deg 25% 15% / 10%);
    border-radius: 8px;

    .month-box {
        margin: 50px 0;

        h1 {
            font-weight: normal;
            margin-bottom: 20px;
        }

        .article {
            letter-spacing: 0.5px;
            height: 30px;
            line-height: 30px;
            border-left: 2px solid #e5e7eb;
            transition: all 0.5s;

            .date {
                padding: 6px;
                color: #9ca3af;
            }

            .title {
                color: #4b5563;
                padding: 6px;
            }

            &:hover {
                transform: scale(1.03);
                border-left: 2px solid var(--second-color);
                transition: all 0.5s;
            }
        }
    }
}
</style>