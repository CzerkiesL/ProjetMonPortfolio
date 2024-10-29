<script setup>
import { ref } from 'vue';
import { useDisplayType } from '@/store/displayType';

const displayStore = useDisplayType();

const props = defineProps(['Project']);
const techUse = props.Project.technology.join(', ');

const isCardOpen = ref(false);
function openCard() {
  isCardOpen.value = !isCardOpen.value;
}
</script>

<template>
  <section class="project-card" :class="displayStore.displayName">
    <div class="img-container">
      <img :src="props.Project.cover" alt="Photo du projet" />
    </div>
    <div
      :class="[
        !displayStore.isDesktop && isCardOpen ? 'open' : 'close',
        'card-content',
      ]"
    >
      <div class="card-content-section">
        <h4>Description:</h4>
        <p>{{ props.Project.description }}</p>
      </div>
      <div class="card-content-section">
        <h4>Objectif:</h4>
        <p>{{ props.Project.objectif }}</p>
      </div>
      <div class="card-content-section">
        <h4>technologie:</h4>
        <p>{{ techUse }}</p>
      </div>
      <div class="card-content-section">
        <h4>Lien repo GitHub:</h4>
        <a :href="props.Project.gitHubLink" target="_blank">Cliquez ici</a>
      </div>
    </div>
    <button @click="openCard" v-if="!displayStore.isDesktop">
      {{ isCardOpen ? 'Voir moins...' : 'Voir plus...' }}
    </button>
  </section>
</template>

<style lang="less">
@import '../../style/variable.less';

.project-card.desktop {
  min-height: 350px;
  margin: 75px 20px;
  display: flex;
  .img-container {
    width: 35%;
  }
  .card-content {
    width: 65%;
    padding: 5px 15px;
    &-section {
      justify-content: space-between;
    }
  }

  &.left {
    .img-container {
      border-right: @border-3;
    }
  }

  &.right {
    flex-direction: row-reverse;
    .img-container {
      border-left: @border-3;
    }
  }
}

.project-card.mobile {
  margin: 45px 25px;
  display: flex;
  flex-direction: column;
  .img-container {
    height: 350px;
    border-bottom: @border-3;
  }
  .card-content {
    border-bottom: @border-3;
    transform-origin: top;
    transition: all 0.1s ease;
    &.open {
      height: auto;
      padding: 10px;
      transform: scaleY(1);
    }
    &.close {
      padding: 0;
      height: 0;
      transform: scaleY(0);
    }
    &-section {
      flex-direction: column;
    }
  }
  button {
    padding: 5px;
    color: @strong;
    background: @light;
    font-weight: 600;
    font-size: @d-s;
    @media screen and (max-width: 600px) {
      font-size: @m-s;
    }
  }
}

.project-card {
  overflow: hidden;
  height: fit-content;
  border: @border-3;
  border-radius: 25px;
  box-shadow: 0 0 15px 5px rgba(@dark, 0.25);
  transition: all 0.3s ease;
  .img-container {
    position: relative;
    overflow: hidden;
    img {
      position: absolute;
      height: 100%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .card-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &-section {
      display: flex;
      p,
      a {
        text-align: end;
        font-weight: normal;
      }
      a {
        display: block;
        color: @strong;
        transition: all 0.3s ease;
        &:hover {
          font-weight: bold;
        }
      }
    }
  }

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 0 20px 10px rgba(@dark, 0.15);
  }
}
</style>
