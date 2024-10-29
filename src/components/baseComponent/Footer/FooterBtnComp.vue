<script setup>
import LinkedinBtn from '../../buttonComp/LinkedinBtn.vue';
import TwitterBtn from '../../buttonComp/TwitterBtn.vue';
import MailBtn from '../../buttonComp/MailBtn.vue';
import GitBtn from '../../buttonComp/GitBtn.vue';
import CvBtn from '../../buttonComp/CvBtn.vue';
</script>

<template>
  <div class="btn-container">
    <CvBtn class="footer-btn" />
    <GitBtn class="footer-btn" />
    <MailBtn class="footer-btn" />
    <LinkedinBtn class="footer-btn" />
    <TwitterBtn class="footer-btn" />
  </div>
</template>

<style lang="less">
@import '../../../style/variable.less';

.btn-container {
  margin: 10px 0 20px 0;
  max-width: 500px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 25px;
  @media screen and (max-width: 600px) {
    gap: 0px;
  }
  .footer-btn {
    height: 50px;
    width: 50px;
    @media screen and (max-width: 500px) {
      height: 40px;
      width: 40px;
    }
  }
}
</style>
