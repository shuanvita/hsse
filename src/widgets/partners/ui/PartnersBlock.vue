<script setup lang="ts">
import type { PartnersProps } from '../model/Partners.types'

withDefaults(defineProps<PartnersProps>(), {
  description: undefined,
})
</script>

<template>
  <section v-if="partners.length" class="container">
    <div class="grid gap-y-12 border-y border-stroke py-11 md:grid-cols-[minmax(0,375px)_minmax(0,1fr)] md:items-center md:gap-x-15">
      <div>
        <UiHeading>{{ title }}</UiHeading>
        <UiText v-if="description" class="mt-6">{{ description }}</UiText>
      </div>
      <ul class="grid grid-cols-2 items-center justify-items-start gap-x-[clamp(12px,9vw,40px)] gap-y-12 sm:gap-y-6 lg:grid-cols-3">
        <li
          v-for="partner in partners"
          :key="partner.name"
          class="flex min-w-0"
          :class="{ 'col-span-2': partner.wide }"
        >
          <component :is="partner.href ? 'a' : 'span'" class="max-w-full" :href="partner.href" :target="partner.href ? '_blank' : undefined" :rel="partner.href ? 'noopener noreferrer' : undefined">
            <UiSvg :name="partner.logo" :decorative="false" :aria-label="partner.name" class="h-auto max-w-full text-white" :style="{ width: `${partner.width}px` }" />
          </component>
        </li>
      </ul>
    </div>
  </section>
</template>
