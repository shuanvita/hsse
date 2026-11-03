<script setup lang="ts">
import type { HeroBlockProgram } from '../model/HeroBlock.types'

defineProps<HeroBlockProgram>()
</script>

<template>
  <li class="flex flex-col">
    <UiBadge class="mb-4">{{ badge }}</UiBadge>
    <div class="flex items-center justify-between gap-6 border-y-2 border-stroke py-2 text-foreground max-[550px]:flex-col max-[550px]:items-stretch">
      <UiHeading tag="h3" uppercase class="max-w-[320px] max-[550px]:max-w-full">
        {{ title }}
      </UiHeading>
      <UiAction
        :to="link.to"
        variant="custom"
        size="custom"
        post-icon="arrow-up"
        icon-class="size-5 shrink-0"
        class="w-fit shrink-0 rounded-[40px] border-2 border-foreground px-3 py-3 text-base font-normal hover:bg-foreground hover:text-primary max-[550px]:w-full"
      >
        {{ link.text }}
      </UiAction>
    </div>
  </li>
</template>
