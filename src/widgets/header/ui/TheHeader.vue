<script setup lang="ts">
import { TheHeaderData } from '../model/TheHeader.data'
import TheHeaderNav from "~/widgets/header/ui/TheHeaderNav.vue";
</script>

<template>
  <header class="container header">
    <div class="header__logos">
      <UiAction v-for="logo in TheHeaderData.logos" :key="logo.link" :to="logo.link" class="w-27" variant="custom" size="custom">
        <UiSvg :name="logo.image" :aria-label="logo.ariaLabel" />
      </UiAction>
    </div>
    <div class="header__navigation">
      <TheHeaderNav :nav="TheHeaderData.nav"/>
      <UiAction :to="TheHeaderData.cta.link" class="header__cta h-7 px-2 text-xs rounded-sm border border-foreground hover:text-primary hover:bg-foreground" variant="custom" size="custom">{{ TheHeaderData.cta.text }}</UiAction>
    </div>
  </header>
</template>

<style scoped>
.header { display: flex; align-items: center; justify-content: space-between; gap: 32px; padding-block: 12px; border-block: 1px solid var(--color-stroke); }
.header__logos, .header__navigation { display: flex; align-items: center; flex-shrink: 0; }
.header__logos { gap: 40px; }
.header__navigation { gap: 24px; }
.header__cta { white-space: nowrap; }
</style>
