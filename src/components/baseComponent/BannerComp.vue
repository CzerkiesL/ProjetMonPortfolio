<script setup>
import { ref, onMounted } from 'vue';
import BannerBackground from '../../assets/image/BannerBackground.jpg';

const props = defineProps(['subTitle']);

const firstTitle = 'Ludovic Czerkies';

const secondTitle = ref('');
let Index = ref(0);

onMounted(() => {
  let interval = setInterval(() => {
    if (Index.value < props.subTitle.length) {
      secondTitle.value += props.subTitle[Index.value];
      Index.value++;
    } else {
      clearInterval(interval);
    }
  }, 100);
});
</script>

<template>
  <header>
    <img :src="BannerBackground" alt="arriere plan de la banniere" />
    <h1>{{ firstTitle }}</h1>
    <h2>{{ secondTitle }}</h2>
  </header>
</template>

<style lang="less">
@import '../../style/variable.less';

header {
  position: relative;
  overflow: hidden;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: 0 4px 8px 0 rgba(@dark, 0.5);
  img {
    position: absolute;
    z-index: -1;
    filter: blur(4px);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    @media screen and (min-width: 1400px) {
      width: 110%;
      filter: blur(5px);
    }
  }
}
</style>
