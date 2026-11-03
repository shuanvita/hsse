<script setup lang="ts">
import type { Advantage } from '../model/AdvantagesBlock.types'

defineProps<Advantage>()
</script>

<template>
  <article class="rounded-lg border-2 border-dashed border-primary bg-foreground px-4 py-5 text-primary space-y-5">
    <UiHeading variant="h3" uppercase class="font-semibold text-center tracking-[2px]">{{ title }}</UiHeading>
    <UiText>{{ description }}</UiText>
  </article>
</template>
