<script setup lang="ts">
import { advantages, educationCareer, hero, partners, projectPractice, video } from '../model/HomePage.data'
import { AdvantagesBlock } from '~/widgets/advantages'
import { HeroBlock } from '~/widgets/home/hero'
import { VideoBlock } from '~/widgets/home/video'
import { ProjectPractice } from '~/widgets/home/project-practice'
import { Partners } from '~/widgets/partners'
import { EducationCareer } from '~/widgets/home/education-career'
</script>

<template>
  <HeroBlock v-bind="hero" />
  <VideoBlock v-bind="video" />
  <AdvantagesBlock v-bind="advantages" />
  <ProjectPractice v-bind="projectPractice" />
  <Partners v-bind="partners" />
  <EducationCareer v-bind="educationCareer" />
</template>
