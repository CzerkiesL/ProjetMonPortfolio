<script></script>

<template>
  <a
    aria-label="linkedine"
    href="https://www.linkedin.com/in/ludovicczerkies/"
    target="_blank"
    class="btn btn-round"
  >
    <font-awesome-icon icon="fa-brands fa-linkedin-in" />
  </a>
</template>

<style scoped lang="less">
@import '../../style/variable.less';

a {
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
