<script setup lang="ts">
import type { InfoCardProps } from './InfoCard.types'

withDefaults(defineProps<InfoCardProps>(), {
  orientation: 'vertical',
})
</script>

<template>
  <article
    class="grid h-full gap-5 rounded-lg border-2 border-dashed border-primary bg-foreground px-4 py-5 text-primary"
    :class="orientation === 'horizontal'
      ? [number !== undefined ? 'md:grid-cols-[64px_minmax(0,1fr)_minmax(0,2fr)] md:px-5 md:py-8' : 'md:grid-cols-[2fr_3fr]']
      : 'grid-rows-[auto_1fr]'"
  >
    <UiText v-if="number !== undefined" as="span" variant="mono">{{ number }}</UiText>
    <UiHeading variant="h3" uppercase :class="number !== undefined ? 'font-medium' : 'text-center font-semibold tracking-[2px]'">{{ title }}</UiHeading>
    <div><slot /></div>
  </article>
</template>
