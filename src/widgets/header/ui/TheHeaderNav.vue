<script setup lang="ts">
import type { TheHeaderProps } from "../model/TheHeader.types";

defineProps<Pick<TheHeaderProps, 'nav'>>()
</script>
<template>
  <nav class="flex items-center justify-self-center">
    <ul class="flex items-center gap-6">
      <li v-for="item in nav" :key="item.text">
        <UiAction
            :to="item.link"
            variant="link"
            size="custom"
            class="text-xs"
        >{{ item.text }}</UiAction
        >
      </li>
    </ul>
  </nav>
</template>