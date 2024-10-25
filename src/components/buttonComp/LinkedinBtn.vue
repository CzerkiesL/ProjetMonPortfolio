<script setup>
function handleClick() {
  window.open('https://www.linkedin.com/in/ludovicczerkies/', '_blank');
}
</script>

<template>
  <button aria-label="linkedine" @click="handleClick()" class="btn btn-round">
    <font-awesome-icon icon="fa-brands fa-linkedin-in" />
  </button>
</template>

<style scoped lang="less">
@import '../../style/variable.less';

button {
  color: @linkedin;
  transition: all 0.3s ease;
  &:hover {
    background: @linkedin;
    color: @light;
    transform: scale(1.2);
    box-shadow:
      0 0 10px 0px @light,
      0 0 10px 3px @linkedin;
  }
}
</style>
