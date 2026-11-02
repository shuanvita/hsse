<script setup lang="ts">
import type { BadgeProps } from './Badge.types'
import {
  BADGE_BASE_CLASSES,
  BADGE_SIZE_CLASSES,
  BADGE_RADIUS_CLASSES,
  BADGE_TONE_CLASSES,
} from './Badge.constants'

const props = withDefaults(defineProps<BadgeProps>(), {
  variant: 'primary',
  tone: 'soft',
  size: 'md',
  pill: false,
  dot: false,
  iconSize: 'size-3',
})

const toneClasses = computed(() => {
  const classes = BADGE_TONE_CLASSES[props.tone]?.[props.variant]
  if (import.meta.dev && !classes) {
    console.warn(
      `[UiBadge]: комбинация tone="${props.tone}" + variant="${props.variant}" не описана в BADGE_TONE_CLASSES.`,
    )
  }
  return classes ?? BADGE_TONE_CLASSES.soft.primary
})

if (import.meta.dev) {
  watchEffect(() => {
    if (props.dot && (props.preIcon || props.postIcon)) {
      console.warn(
        '[UiBadge]: dot имеет приоритет над preIcon/postIcon — иконки не будут отрендерены.',
      )
    }
  })
}
</script>

<template>
  <span
    :class="[
      BADGE_BASE_CLASSES,
      BADGE_SIZE_CLASSES[size],
      pill ? 'rounded-full' : BADGE_RADIUS_CLASSES[size],
      toneClasses,
    ]"
  >
    <span v-if="dot" class="size-1.5 shrink-0 rounded-full bg-current" />
    <UiSvg v-else-if="preIcon" :name="preIcon" :class="iconSize" />
    <slot />
    <UiSvg v-if="postIcon && !dot" :name="postIcon" :class="iconSize" />
  </span>
</template>
