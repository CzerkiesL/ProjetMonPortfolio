<script setup>
import LinkedinBtn from '../buttonComp/LinkedinBtn.vue';
import TwitterBtn from '../buttonComp/TwitterBtn.vue';
import GitBtn from '../buttonComp/GitBtn.vue';
import CvBtn from '../buttonComp/CvBtn.vue';
</script>

<template>
  <section id="network-container">
    <div class="network-sub-container">
      <h3 class="network-title">Mes réseaux</h3>
      <div class="network-btn-container">
        <LinkedinBtn class="network-btn" />
        <TwitterBtn class="network-btn" />
        <GitBtn class="network-btn" />
      </div>
    </div>
    <div class="network-sub-container">
      <h3 class="network-title">Mon CV</h3>
      <div class="network-btn-container">
        <CvBtn class="network-btn" />
      </div>
    </div>
  </section>
</template>

<style lang="less">
@import '../../style/variable.less';

#network-container {
  margin-bottom: 50px;
  display: flex;
  justify-content: space-evenly;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
  .network-title {
    text-align: center;
    margin: 20px 0 30px 0;
    color: @strong;
    font-size: @d-m;
    @media screen and (max-width: 600px) {
      margin: 15px;
      font-size: @m-m;
    }
  }
  .network-btn-container {
    margin-bottom: 20px;
    width: 300px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .network-btn {
      font-size: @d-xl;
      height: 65px;
      width: 65px;
      @media screen and (max-width: 600px) {
        font-size: @m-xl;
        height: 50px;
        width: 50px;
      }
    }
  }
}
</style>
