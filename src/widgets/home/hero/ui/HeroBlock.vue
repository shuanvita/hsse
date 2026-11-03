<script setup lang="ts">
import type { HeroBlockProps } from '../model/HeroBlock.types'
import HeroBlockProgram from './HeroBlockProgram.vue'

defineProps<HeroBlockProps>()
</script>

<template>
  <section class="overflow-x-clip">
    <div class="container flex gap-10 max-[1000px]:flex-col">
      <div class="relative flex w-[34%] flex-col pt-5 max-[1000px]:w-full">
        <UiHeading tag="h1" class="relative z-20 sm:text-4xl max-sm:leading-9">{{ title }}</UiHeading>
        <UiText v-if="description" class="relative z-20 mt-5 max-w-[350px] font-medium text-foreground-muted" variant="lg">{{ description }}</UiText>
        <NuxtPicture
          v-if="image"
          :src="image"
          width="624"
          height="600"
          :img-attrs="{ fetchpriority: 'high', class: 'h-full w-full object-contain' }"
          alt=""
          class="pointer-events-none z-10 mx-auto mt-9 aspect-[1.04] w-full max-w-[235px] max-[1000px]:absolute max-[1000px]:right-0 max-[1000px]:bottom-0 max-[1000px]:mt-0 max-[800px]:-right-1/4 max-[800px]:-bottom-1/2 max-[800px]:opacity-25"
        />
      </div>
      <div class="relative z-10 mt-6 ml-auto w-[66%] max-w-[578px] max-[1100px]:max-w-[500px] max-[1000px]:ml-0 max-[1000px]:w-full max-[1000px]:max-w-full">
        <NuxtPicture
          v-if="imageDecor"
          :src="imageDecor"
          alt=""
          aria-hidden="true"
          :img-attrs="{ class: 'h-full' }"
          class="pointer-events-none absolute -left-20 h-full max-[1100px]:hidden"
        />
        <ul class="relative flex flex-col gap-12">
          <HeroBlockProgram v-for="program in programs" :key="program.link.to" v-bind="program" />
        </ul>
      </div>
    </div>
  </section>
</template>
