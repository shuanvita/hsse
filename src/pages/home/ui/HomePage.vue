<script setup lang="ts">
import { admissionOverview, admissionPaths, advantages, bestProjects, educationCareer, eventsHsse, factsBlocks, hero, partners, peopleSlider, projectPractice, video } from '../model/HomePage.data'
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
import { FactsBlock } from '~/widgets/facts-block'
import { EventsHsse } from '~/widgets/home/events-hsse'
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
  <FactsBlock v-for="block in factsBlocks" :key="block.title" v-bind="block" />
  <EventsHsse v-bind="eventsHsse" />
</template>
