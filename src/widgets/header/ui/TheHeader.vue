<script setup lang="ts">
import { TheHeaderData } from '../model/TheHeader.data'
import TheHeaderNav from "./TheHeaderNav.vue";
</script>

<template>
  <header class="container flex items-center justify-between gap-8 border-y border-stroke py-3">
    <div class="flex items-center gap-10">
      <UiAction v-for="logo in TheHeaderData.logos" :key="logo.link" :to="logo.link" class="w-27" variant="custom" size="custom">
        <UiSvg :name="logo.image" :aria-label="logo.ariaLabel" />
      </UiAction>
    </div>
    <div class="flex items-center gap-6">
      <TheHeaderNav :nav="TheHeaderData.nav"/>
      <UiAction :to="TheHeaderData.cta.link" class="h-7 px-2 text-xs rounded-sm border border-foreground hover:text-primary hover:bg-foreground" variant="custom" size="custom">{{ TheHeaderData.cta.text }}</UiAction>
    </div>
  </header>
</template>

