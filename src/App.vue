<template>
  <router-view></router-view>
</template>

<script setup>
import { onMounted } from 'vue';
  onMounted(() => {
    document.title = '检测报告信息'
  })
</script>

<style>
#app {
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
}
</style>
