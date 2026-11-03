<script setup lang="ts">
import type { HeroBlockProps } from '../model/HeroBlock.types'

defineProps<HeroBlockProps>()
</script>

<template>
  <section class="container grid lg:grid-cols-[350px_1fr] gap-10">
    <div class="flex flex-col gap-5">
      <UiHeading tag="h1" class="sm:text-4xl max-sm:leading-9">{{ title }}</UiHeading>
      <UiText class="mb-9 text-foreground-muted font-medium" variant="lg">{{ description }}</UiText>
      <NuxtPicture :src="image" alt="Sphere" />
    </div>
    <div></div>
  </section>
</template>
