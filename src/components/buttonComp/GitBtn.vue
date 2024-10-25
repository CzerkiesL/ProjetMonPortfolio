<script setup>
function handleClick() {
  window.open('https://github.com/CzerkiesL', '_blank');
}
</script>

<template>
  <button aria-label="github" @click="handleClick()" class="btn btn-round">
    <font-awesome-icon icon="fa-brands fa-github" />
  </button>
</template>

<style scoped lang="less">
@import '../../style/variable.less';

button {
  color: @git;
  transition: all 0.3s ease;
  &:hover {
    background: @git;
    color: @light;
    transform: scale(1.2);
    box-shadow:
      0 0 10px 0px @light,
      0 0 10px 3px @git;
  }
}
</style>
