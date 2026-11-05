<script setup lang="ts">
import type { PeopleSliderProps } from '../model/PeopleSlider.types'
import { peopleGroups } from '../model/PeopleSlider.data'
import PersonCard from './PersonCard.vue'

defineProps<PeopleSliderProps>()
const selectedGroup = ref(peopleGroups[0]?.id ?? '')
const tabs = peopleGroups.map(group => ({ value: group.id, label: group.label }))
const currentGroup = computed(() => peopleGroups.find(group => group.id === selectedGroup.value))
const swiperOptions = { spaceBetween: 20, slidesPerView: 1, roundLengths: true, breakpoints: { 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } } }

</script>

<template>
  <section v-if="peopleGroups.length" class="container">
    <UiHeading class="mb-10">{{ title }}</UiHeading>
    <UiTabs v-if="peopleGroups.length > 1" v-model="selectedGroup" :items="tabs" class="mb-4" />
    <UiSwiper v-if="currentGroup?.people.length" :key="currentGroup.id" :options="swiperOptions" :slide-labels="currentGroup.people.map(person => person.name)">
      <swiper-slide v-for="person in currentGroup.people" :key="person.name" class="h-auto">
        <PersonCard :person="person" />
      </swiper-slide>
    </UiSwiper>
  </section>
</template>
