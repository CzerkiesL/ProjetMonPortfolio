<script setup>
import BannerComp from '../components/baseComponent/BannerComp.vue';
import ProjectCardComponent from '../components/projectViewComponent/ProjectCardComponent.vue';
import ProjectList from '../assets/data/Projects.json';

import BookiImg from '../assets/image/Booki.webp';
import SophieBluelImg from '../assets/image/SophieBluel.webp';
import NinaImg from '../assets/image/NinaCarducci.webp';
import KasaImg from '../assets/image/Kasa.webp';
import GrimoireImg from '../assets/image/MonVieuxGrimoire.webp';

const cardCoverImg = [BookiImg, SophieBluelImg, NinaImg, KasaImg, GrimoireImg];
</script>

<template>
  <BannerComp subTitle="Mes Réalisation" />
  <main id="about">
    <h3>
      Quelque petit projet realiser avec les différente techologie apprise:
    </h3>
    <ul>
      <li v-for="(project, index) in ProjectList" :key="project.id">
        <ProjectCardComponent
          :Project="project"
          :Cover="cardCoverImg[index]"
          :class="index % 2 === 0 ? 'left' : 'right'"
        />
      </li>
    </ul>
  </main>
</template>

<style lang="less">
@import '../style/variable.less';

#about {
  h3 {
    color: @strong;
    font-size: @d-l;
    @media screen and (max-width: 600px) {
      font-size: @m-l;
    }
  }
}
</style>
