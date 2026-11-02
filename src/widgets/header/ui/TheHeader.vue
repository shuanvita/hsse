<script setup lang="ts">
import { TheHeaderData } from '../model/TheHeader.data'
import TheHeaderNav from "~/widgets/header/ui/TheHeaderNav.vue";
</script>

<template>
  <header class="container py-3 border-y border-stroke grid grid-cols-[auto_1fr] items-center gap-3 justify-around">
    <div class="flex items-center gap-10">
      <UiAction v-for="logo in TheHeaderData.logos" :key="logo.link" :to="logo.link" class="w-27" variant="custom" size="custom">
        <UiSvg :name="logo.image"/>
      </UiAction>
    </div>
    <div class="flex items-center gap-10 ml-auto">
      <TheHeaderNav :nav="TheHeaderData.nav"/>
      <UiAction :to="TheHeaderData.cta.link" class="h-7 px-2 text-xs rounded-sm border border-foreground" variant="custom" size="custom">{{ TheHeaderData.cta.text }}</UiAction>
    </div>
  </header>
</template>