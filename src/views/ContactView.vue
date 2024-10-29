<script setup>
import ContactFormComp from '../components/contactViewComponent/ContactFormComp.vue';
import BannerComp from '../components/baseComponent/BannerComp.vue';
import SeparatorComp from '@/components/contactViewComponent/SeparatorComp.vue';
import NetworkLink from '@/components/contactViewComponent/NetworkLink.vue';
</script>

<template>
  <BannerComp subTitle="Me Contacter" />
  <main>
    <NetworkLink />
    <SeparatorComp />
    <ContactFormComp />
  </main>
</template>

<style lang="less"></style>
