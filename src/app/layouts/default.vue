<script setup lang="ts">
import { TheHeader } from "~/widgets/header";
import { Preloader } from '~/shared/ui/preloader'

const pageLoaded = ref(false)
const minimumTimeElapsed = ref(false)
const { start } = useTimeoutFn(() => {
  minimumTimeElapsed.value = true
}, 700, { immediate: false })

useEventListener('load', () => {
  pageLoaded.value = true
}, { once: true })

onMounted(() => {
  pageLoaded.value = document.readyState === 'complete'
  start()
})

useHead({
  noscript: [{ innerHTML: '<style>.site-preloader{display:none!important}</style>' }],
})
</script>

<template>
  <div class="flex flex-col pt-5">
    <Preloader :visible="!pageLoaded || !minimumTimeElapsed" />
    <TheHeader />
    <main class="flex flex-col space-y-8 mt-16">
      <slot />
    </main>
    <footer>Footer</footer>
  </div>
</template>
