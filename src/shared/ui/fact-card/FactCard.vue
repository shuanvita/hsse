<script setup lang="ts">
import type { FactCardProps } from './FactCard.types'

withDefaults(defineProps<FactCardProps>(), {
  variant: 'number',
})
</script>

<template>
  <div class="relative h-full min-h-30 border-l border-stroke py-4 pl-8 before:absolute before:top-0 before:left-0 before:size-1.5 before:-translate-x-1/2 before:rounded-full before:bg-foreground after:absolute after:bottom-0 after:left-0 after:size-1.5 after:-translate-x-1/2 after:rounded-full after:bg-foreground">
    <div v-if="variant === 'number'" class="flex flex-wrap items-baseline gap-x-3">
      <UiText as="span" variant="custom" class="font-dewi-extended text-5xl leading-none font-bold">{{ value }}</UiText>
      <UiText v-if="unit" as="span">{{ unit }}</UiText>
    </div>
    <UiHeading v-else as="h3" variant="h3" uppercase class="font-dewi-extended font-bold">{{ value }}</UiHeading>
    <UiText class="mt-3 whitespace-pre-line">{{ description }}</UiText>
  </div>
</template>
