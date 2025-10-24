<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import '@/assets/js/scripts.js'
import MainHeader from '@/components/MainHeader.vue'
import MainFooter from '@/components/MainFooter.vue'
</script>

<template>
  <main>
    <MainHeader />
    <RouterView />
  </main>
  <MainFooter />
</template>

<style>
@import '@/assets/css/styles.css';
</style>
