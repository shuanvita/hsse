<script setup lang="ts">
import { advantages, hero, projectPractice, video } from '../model/HomePage.data'
import { AdvantagesBlock } from '~/widgets/advantages'
import { HeroBlock } from '~/widgets/home/hero'
import { VideoBlock } from '~/widgets/home/video'
import { ProjectPractice } from '~/widgets/home/project-practice'
</script>

<template>
  <HeroBlock v-bind="hero" />
  <VideoBlock v-bind="video" />
  <AdvantagesBlock v-bind="advantages" />
  <ProjectPractice v-bind="projectPractice" />
</template>
