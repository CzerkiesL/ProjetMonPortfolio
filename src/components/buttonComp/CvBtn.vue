<script setup>
import CV from '../../assets/pdf/CV_Developpeur_Web_CZERKIES_LUDOVIC.pdf';
function handleClick() {
  window.open(CV, '_blank');
}
</script>

<template>
  <button @click="handleClick()" class="btn btn-round">CV</button>
</template>

<style scoped lang="less">
@import '../../style/variable.less';

button {
  color: @cv;
  transition: all 0.3s ease;
  &:hover {
    background: @cv;
    color: @light;
    transform: scale(1.2);
    box-shadow:
      0 0 10px 0px @light,
      0 0 10px 3px @cv;
  }
}
</style>
