<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <RouterLink aria-label="me-contacter" class="btn btn-round" to="/contact">
    <font-awesome-icon icon="fa-solid fa-at" />
  </RouterLink>
</template>

<style scoped lang="less">
@import '../../style/variable.less';

a {
  align-content: center;
  color: @email;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.2);
    background: @email;
    color: @light;
    box-shadow:
      0 0 10px 1px @light,
      0 0 10px 3px @email;
  }
}
</style>
