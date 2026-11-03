<script setup lang="ts">
import { TheHeader } from "~/widgets/header";
import { Preloader } from '~/shared/ui/preloader'

const appReady = ref(false)
const minimumTimeElapsed = ref(false)
const { start } = useTimeoutFn(() => {
  minimumTimeElapsed.value = true
}, 500, { immediate: false })

const loading = computed(() => !appReady.value || !minimumTimeElapsed.value)

onMounted(() => {
  appReady.value = true
  start()
})

useHead({
  noscript: [{ innerHTML: '<style>.site-preloader{display:none!important}</style>' }],
})
</script>

<template>
  <div class="flex flex-col pt-5">
    <Preloader :visible="loading" />
    <div :inert="(appReady && loading) || undefined" :aria-busy="loading">
      <TheHeader />
      <main class="flex flex-col space-y-8 mt-16">
        <slot />
      </main>
      <footer>Footer</footer>
    </div>
  </div>
</template>
