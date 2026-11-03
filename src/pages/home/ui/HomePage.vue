<script setup lang="ts">
import { hero } from '../model/HomePage.data'
import { HeroBlock } from '~/widgets/home/hero'
</script>

<template>
  <HeroBlock v-bind="hero" />
</template>
