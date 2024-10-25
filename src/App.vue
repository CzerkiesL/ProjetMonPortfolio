<script setup>
import { RouterView } from 'vue-router';
import { useDisplayType } from '@/store/displayType';

import NavComp from './components/baseComponent/NavComp.vue';
import FooterComp from './components/baseComponent/Footer/FooterComp.vue';

const displayStore = useDisplayType();
window.addEventListener('resize', displayStore.changeType);
</script>

<template>
  <NavComp />
  <RouterView />
  <FooterComp />
</template>

<style lang="scss"></style>
