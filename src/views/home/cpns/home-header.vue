<template>
    <div class="home-header">
        <div class="home-text">
            <h2>YUZHI<span>XIN</span> Blog</h2>
            <p>停驻一时，化一生，沉浮一世</p>
        </div>
    </div>
</template>

<script setup>
    
</script>

<style lang="less" scoped>
    .home-header {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 57.6px 0 0;
        height: 440px;
        background-color: var(--container-color);
        color: #fff;

        .home-text {
            text-align: center;

            h2 {
                font-size: 56px;

                span {
                    color: var(--second-color);
                }
            }

            p {
                letter-spacing: 3px; 
            }
        }
    }
</style>