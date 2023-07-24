<template>
    <div class="copyright">
        <p>Copyright &#169; 2023 <a href="#">欲知新</a></p>
    </div>
</template>

<script setup>
    
</script>

<style lang="less" scoped>
.copyright {
    position: relative;
    bottom: 0;
    margin-top: 60px;
    margin-bottom: 10px;
    font-size: 14px;
    height: 40px;
    text-align: center;
    color: #999aaa;

    a {
        color: #999aaa;
    }
}

@media(max-width: 1200px) {
    .copyright {
        margin-top: 20px;
    }
}

@media(max-width: 800px) {
    .copyright {
        margin-top: 10px;
        margin-bottom: 5px;
    }
}
</style>