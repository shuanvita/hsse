<script setup lang="ts">
// TODO Компонент вынести в общее пространство. На странцие /paid переиспользуется
import type { VideoBlockProps } from '../model/VideoBlock.types'

defineProps<VideoBlockProps>()

const started = ref(false)
const video = ref<HTMLVideoElement | null>(null)

async function startVideo() {
  started.value = true
  await nextTick()
  await video.value?.play().catch(() => {})
}
</script>

<template>
  <section class="container" :aria-label="label">
    <UiAction
      v-if="!started"
      :aria-label="label"
      variant="custom"
      size="custom"
      class="w-full overflow-hidden border border-foreground rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
      @click="startVideo"
    >
      <NuxtPicture :src="mobilePoster" alt="" loading="lazy" class="block w-full sm:hidden" :img-attrs="{ class: 'w-full' }" />
      <NuxtPicture :src="poster" alt="" loading="lazy" class="hidden w-full sm:block" :img-attrs="{ class: 'w-full' }" />
    </UiAction>
    <video
      v-else
      ref="video"
      :src="src"
      :poster="poster"
      :aria-label="label"
      class="aspect-480/759 w-full rounded-xl bg-black sm:aspect-video"
      controls
      playsinline
      preload="metadata"
    />
  </section>
</template>
