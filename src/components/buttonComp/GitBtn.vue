<script></script>

<template>
  <a
    aria-label="github"
    href="https://github.com/CzerkiesL"
    target="_blank"
    class="btn btn-round"
  >
    <font-awesome-icon icon="fa-brands fa-github" />
  </a>
</template>

<style scoped lang="less">
@import '../../style/variable.less';

a {
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
