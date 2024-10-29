<script setup>
import BannerComp from '../components/baseComponent/BannerComp.vue';
import ProjectCardComponent from '../components/projectViewComponent/ProjectCardComponent.vue';
import ProjectList from '../assets/data/Projects.json';
</script>

<template>
  <BannerComp subTitle="Mes Réalisation" />
  <main>
    <h3></h3>
    <ul>
      <li v-for="(project, index) in ProjectList" :key="project.id">
        <ProjectCardComponent
          :Project="project"
          :class="index % 2 === 0 ? 'left' : 'right'"
        />
      </li>
    </ul>
  </main>
</template>

<style lang="scss"></style>
