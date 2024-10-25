<script setup>
import FooterBtnComp from './FooterBtnComp.vue';
</script>

<template>
  <footer>
    <FooterBtnComp />
    <small>© 2024 ludovic CZERKIES, Tous droits réservés.</small>
  </footer>
</template>

<style lang="less">
@import '../../../style/variable.less';

footer {
  padding: 10px;
  background: @dark;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  small {
    color: @light;
    font-size: @d-xs;
    font-family: @title;
    font-weight: bold;
    @media screen and (max-width: 600px) {
      font-size: @m-xs;
    }
  }
}
</style>
