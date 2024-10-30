<script setup>
import { onMounted } from 'vue';
import { useDisplayType } from '@/store/displayType';
import { launchAboutContentAnimation } from '@/utilities/aboutContentAnimation';
import Avatar from '../../assets/image/Avatar.webp';

const displayStore = useDisplayType();

onMounted(() => {
  launchAboutContentAnimation(displayStore.isDesktop);
});
</script>

<template>
  <main id="about-content" :class="displayStore.displayName">
    <img class="avatar" :src="Avatar" alt="illustration d'un homme" />
    <p class="text-1">
      je m’appel <strong>Ludovic Czerkies</strong> passionné par l’informatique
      je me suis lancer dans un projet de reconversion professionnel vers le
      développement web. J’ai donc décidé de suivre la formation en ligne
      “<strong>Développeur Web</strong>” sur OpenClassrooms.
    </p>
    <p class="text-2">
      J’y est appris les langages Frontend “<strong>HTML</strong>”,
      “<strong>CSS</strong>" et “<strong>JavaScript</strong>” ainsi que le
      Framework “<strong>React.js</strong>” et le préprocesseur
      “<strong>Sass</strong>” mais aussi le langage backend
      “<strong>Node.js</strong>” et l’utilisation de la base de donnée NoSQL
      “<strong>MongoDB</strong>” et pour finir l’utilisation de
      “<strong>Git</strong>” et “<strong>GitHub</strong>”.
    </p>
    <p class="text-3">
      J’y est appris aussi l’importance du “<strong>responsive design</strong>”,
      du <strong>débogage</strong> et de l’<strong>optimisation</strong> pour
      une navigation fluide ainsi que les bonne pratique en matière de
      “<strong>SEO</strong>” pour le référencement et d’<strong
        >accessibilité</strong
      >
      pour les personnes en situation de handicap.
    </p>
  </main>
</template>

<style lang="less">
@import '../../style/variable.less';

#about-content {
  display: grid;
  gap: 20px;
  .avatar {
    justify-self: center;
    outline: 4px solid @strong;
    outline-offset: -2px;
    border-radius: @round;
  }
  p {
    opacity: 0;
    text-align: center;
    margin: 25px;
    align-self: center;
  }
}

#about-content.desktop {
  grid-template-columns: repeat(3, 1fr);
  .avatar {
    opacity: 0;
    height: 250px;
  }
  p {
    &:nth-child(2) {
      grid-column-start: 2;
      grid-column-end: 4;
    }
    &:nth-child(3) {
      grid-column-start: 1;
      grid-column-end: 4;
    }
    &:nth-child(4) {
      grid-column-start: 1;
      grid-column-end: 4;
    }
  }
}

#about-content.mobile {
  margin: 20px;
  grid-template-columns: 1fr;
  .avatar {
    height: 150px;
    grid-row-start: 4;
    grid-row-end: 5;
  }
  p {
    text-align: center;
    margin: 0 15px;
    &:nth-child(2) {
      grid-row-start: 1;
      grid-row-end: 2;
    }
    &:nth-child(3) {
      grid-row-start: 2;
      grid-row-end: 3;
    }
    &:nth-child(4) {
      grid-row-start: 3;
      grid-row-end: 4;
    }
  }
}
</style>
