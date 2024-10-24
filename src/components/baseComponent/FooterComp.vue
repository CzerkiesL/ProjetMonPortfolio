<script setup></script>

<template>
  <footer>
    <div class="btn-container">
      <button class="footer-btn">CV</button>
      <button class="footer-btn">GIT</button>
      <button class="footer-btn">MAIL</button>
      <button class="footer-btn">IN</button>
      <button class="footer-btn">X</button>
    </div>
    <small>© 2024 ludovic CZERKIES, Tous droits réservés.</small>
  </footer>
</template>

<style lang="less">
@import '../../style/variable.less';

footer {
  padding: 10px;
  background: @dark;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  .btn-container {
    margin: 10px 0 20px 0;
    width: 100%;
    max-width: 500px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .footer-btn {
      cursor: pointer;
      background: @light;
      height: 50px;
      width: 50px;
      border-radius: @round;
      font-family: @title;
      font-weight: bold;
    }
  }
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
