<script setup>
import { ref } from 'vue';
import { useDisplayType } from '@/store/displayType';
import { RouterLink } from 'vue-router';

const displayStore = useDisplayType();

const isModaleOpen = ref(false);
function toggleModale() {
  isModaleOpen.value = !isModaleOpen.value;
}
</script>

<template>
  <nav v-if="displayStore.isDesktop" id="desktop-nav">
    <router-link to="/">A propos</router-link>
    <router-link to="/project">Projets</router-link>
    <router-link to="/contact">Me contacter</router-link>
  </nav>

  <div v-else id="mobile-nav" :class="isModaleOpen ? 'open' : 'close'">
    <button @click="toggleModale" class="burger-btn">
      <div class="line line-top"></div>
      <div class="line line-mid"></div>
      <div class="line line-bot"></div>
    </button>

    <div @click="toggleModale" id="modale-bg"></div>

    <div @click="toggleModale" id="modale">
      <nav>
        <router-link to="/">A propos</router-link>
        <router-link to="/project">Projets</router-link>
        <router-link to="/contact">Me contacter</router-link>
      </nav>
    </div>
  </div>
</template>

<style scoped lang="less">
@import '../../style/variable.less';

/////////////////////////////////////  STYLE NAVIGATION VERSION DESKTOP
#desktop-nav {
  padding: 20px;
  display: flex;
  justify-content: space-evenly;
  a {
    font-size: @d-l;
  }
}

/////////////////////////////////////  STYLE NAVIGATION VERSION MOBILE
#mobile-nav {
  position: relative;
  z-index: 10;
  width: 100%;
  height: 0;
  .burger-btn {
    position: fixed;
    z-index: 10;
    top: 20px;
    right: 20px;
    cursor: pointer;
    width: 60px;
    height: 60px;
    border: @border-3;
    border-radius: @round;
    background: @light;
    .line {
      position: absolute;
      background: @strong;
      width: 50%;
      height: 3px;
      border-radius: 10px;
      transition: all 0.3s ease;
    }
  }
  #modale-bg {
    z-index: -1;
    position: fixed;
    width: 100vw;
    height: 100vh;
    background: @dark;
    opacity: 0.3;
    transform-origin: bottom;
    transition: all 0.3s ease;
  }
  #modale {
    position: fixed;
    top: 50px;
    right: 50px;
    z-index: 5;
    overflow: hidden;
    padding: 20px 0;
    border-radius: 25px;
    border: @border-3;
    width: 80%;
    background: @light;
    transform-origin: top right;
    transition: all 0.3s ease;
    nav {
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      a {
        text-align: center;
        width: 100%;
        padding: 10px;
        font-size: @m-l;
        transition: opacity 0.4s ease 0.1s;
      }
    }
  }

  /////////////////////////////////////  OUVERTURE DE LA MODALE
  &.open {
    .burger-btn .line {
      &-mid {
        opacity: 0;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      &-top {
        top: 50%;
        left: 25%;
        transform: scaleX(1.5) rotate(60deg);
      }
      &-bot {
        top: 50%;
        left: 25%;
        transform: scaleX(1.5) rotate(-60deg);
      }
    }

    #modale-bg {
      transform: scaleY(1);
    }

    #modale {
      transform: scale(1);
      nav a {
        opacity: 1;
      }
    }
  }

  /////////////////////////////////////  FERMETURE DE LA MODALE
  &.close {
    .burger-btn {
      .line {
        &-mid {
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          opacity: 1;
        }
        &-top {
          top: 28%;
          left: 50%;
          transform: scaleX(0.75) translateX(-68%);
        }
        &-bot {
          bottom: 28%;
          left: 50%;
          transform: scaleX(0.75) translateX(-68%);
        }
      }
    }

    #modale-bg {
      transform: scaleY(0);
    }

    #modale {
      transform: scale(0);
      nav a {
        opacity: 0;
      }
    }
  }
}

///////////////////////////////////// STYLE COMMUN DES LIENS
a {
  color: @dark;
  position: relative;
  font-weight: 600;
  transition: color 0.3s ease;
  &:hover {
    color: @strong;
  }
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 3px;
    background: @strong;
    left: 0;
    bottom: 0;
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }
  &.router-link-active {
    color: @strong;
    font-weight: 700;
    &::after {
      transform: scaleX(1);
    }
  }
}
</style>
