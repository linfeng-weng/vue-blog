<template>
    <div class="user-card unselectable">
        <div class="user">
            <div class="avatar">
                <img src="@/assets/img/头像1.jpg" alt="">
            </div>
            <div class="username">欲知新</div>
            <div class="intro">To learn something new</div>
            <div class="article-message">
                <div class="sort">
                    <div>文章</div>
                    <div>15</div>
                </div>
                <div class="sort">
                    <div>分类</div>
                    <div>5</div>
                </div>
                <div class="sort">
                    <div>标签</div>
                    <div>8</div>
                </div>
            </div>
            <div class="other-message">
                <a href="https://github.com/linfeng-weng">
                    <i class="iconfont icon-github"></i>
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
    
</script>

<style lang="less" scoped>
.user-card {
    position: sticky;
    top: 80px;

    .user {
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 25px;
        margin: 20px 25px;
        padding: 60px 10px 30px;
        box-shadow: 0 4px 14px hsl(355deg 25% 15% / 10%);
        border-radius: 8px;

        .avatar {
            width: 100px;
            height: 100px;

            img {
                width: 100%;
                border-radius: 50%;
                object-fit: cover;
                object-position: center;
            }
        }

        .username {
            font-size: 18px;
        }

        .intro {
            font-size: 14px;
            margin-bottom: -5px;
        }

        .article-message {
            display: flex;
            column-gap: 15px;

            .sort {
                display: flex;
                flex-direction: column;
                align-items: center;
                row-gap: 10px;
            }
        }

        .other-message {

            i:hover {
                color: var(--second-color);
                transition: all 0.2s linear;
            }
        }

    }
}
</style>