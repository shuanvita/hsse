<script setup lang="ts">
import { admissionOverview, admissionPaths, advantages, bestProjects, educationCareer, hero, partners, peopleSlider, projectPractice, video } from '../model/HomePage.data'
import { AdvantagesBlock } from '~/widgets/advantages'
import { HeroBlock } from '~/widgets/home/hero'
import { VideoBlock } from '~/widgets/home/video'
import { ProjectPractice } from '~/widgets/home/project-practice'
import { Partners } from '~/widgets/partners'
import { EducationCareer } from '~/widgets/education-career'
import { PeopleSlider } from '~/widgets/people-slider'
import { BestProject } from '~/widgets/home/best-project'
import { AdmissionPaths } from '~/widgets/home/admission-paths'
import { AdmissionOverview } from '~/widgets/admission-overview'
</script>

<template>
  <HeroBlock v-bind="hero" />
  <VideoBlock v-bind="video" />
  <AdvantagesBlock v-bind="advantages" />
  <ProjectPractice v-bind="projectPractice" />
  <Partners v-bind="partners" />
  <EducationCareer v-bind="educationCareer" />
  <PeopleSlider v-bind="peopleSlider" />
  <BestProject v-bind="bestProjects" />
  <AdmissionPaths v-bind="admissionPaths" />
  <AdmissionOverview v-bind="admissionOverview" />
</template>
