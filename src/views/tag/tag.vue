<template>
    <div class="tag container">
        <layout>
            <template #left>
                <router-view v-slot="{ Component }">
                    <keep-alive>
                        <component :is="Component" />
                    </keep-alive>
                </router-view>
            </template>
            <template #right><user-card /></template>
        </layout>
    </div>
</template>

<script setup>
    import Layout from '@/components/layout/layout.vue'
    import UserCard from '@/components/user-card/user-card.vue'
</script>

<style lang="less" scoped>
.tag {
    margin-top: 80px;
}
</style>