<script></script>

<template>
  <a
    aria-label="twitter"
    href="https://x.com/czerkies61759"
    target="_blank"
    class="btn btn-round"
  >
    <font-awesome-icon icon="fa-brands fa-x-twitter" />
  </a>
</template>

<style scoped lang="less">
@import '../../style/variable.less';

a {
  color: @twitter;
  transition: all 0.3s ease;
  &:hover {
    background: @twitter;
    color: @light;
    transform: scale(1.2);
    box-shadow:
      0 0 10px 0px @light,
      0 0 10px 3px @twitter;
  }
}
</style>
