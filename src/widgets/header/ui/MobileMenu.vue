<script setup lang="ts">
import { useMediaQuery, useScrollLock, onKeyStroke } from '@vueuse/core'
import type { TheHeaderProps } from '../model/TheHeader.types'
import HeaderProgramLink from './HeaderProgramLink.vue'

const props = defineProps<{ config: TheHeaderProps, modelValue: boolean, top: number }>()
const emit = defineEmits<{ 'update:modelValue': [value: boolean] }>()
const panel = ref<HTMLElement | null>(null)
const isLocked = useScrollLock(import.meta.client ? document.documentElement : null)
const isDesktop = useMediaQuery('(min-width: 80rem)')
const route = useRoute()
let previousFocus: HTMLElement | null = null

const dropdowns = computed(() => props.config.nav.filter(item => item.isDropdown))
const links = computed(() => props.config.nav.filter(item => !item.isDropdown))
const close = () => emit('update:modelValue', false)

watch(() => props.modelValue, open => { isLocked.value = open })
watch(() => props.modelValue, async (open) => {
  if (open) {
    previousFocus = document.activeElement as HTMLElement | null
    await nextTick()
    panel.value?.focus()
  } else {
    previousFocus?.focus()
    previousFocus = null
  }
})

watch(isDesktop, desktop => { if (desktop && props.modelValue) close() })
watch(() => route.fullPath, () => { if (props.modelValue) close() })
onUnmounted(() => { isLocked.value = false })
onKeyStroke('Escape', () => { if (props.modelValue) close() })

</script>

<template>
  <Teleport to="body">
    <Transition name="mobile-menu">
    <div v-if="modelValue" class="fixed inset-x-0 bottom-0 z-40 xl:hidden" :style="{ top: `${Math.max(0, top)}px` }">
      <div class="absolute inset-0 bg-black/50" aria-hidden="true" @click="close" />
      <div
        id="mobile-menu"
        ref="panel"
        class="mobile-menu-panel bg-primary absolute inset-y-0 right-0 z-50 flex w-full flex-col overflow-y-auto px-5 pb-8 outline-none sm:max-w-sm sm:border-l sm:border-stroke"
        tabindex="-1"
        aria-label="Меню навигации"
      >
        <nav aria-label="Основная навигация">
          <template v-for="dropdown in dropdowns" :key="dropdown.text">
            <p class="mt-8 text-[10px] tracking-wider text-foreground-muted uppercase">{{ dropdown.text }}</p>
            <ul class="mt-3 flex flex-col gap-3">
              <li v-for="entry in dropdown.dropdownMenu" :key="entry.link">
                <HeaderProgramLink :entry="entry" mobile @click="close" />
              </li>
            </ul>
          </template>
          <ul class="mt-8 flex flex-col gap-5 text-base text-white">
            <li v-for="link in links" :key="link.text">
              <UiAction :to="link.link" variant="link" size="custom" class="text-base" @click="close">{{ link.text }}</UiAction>
            </li>
          </ul>
        </nav>
        <UiAction :to="config.cta.link" variant="custom" size="custom" post-icon="arrow-up" icon-class="size-5 shrink-0" class="mt-10 inline-flex w-fit items-center gap-2 rounded-[40px] border border-foreground px-5 py-4 text-base leading-tight font-light text-foreground transition-colors hover:bg-foreground hover:text-primary max-md:w-full max-md:justify-center" @click="close">
          {{ config.cta.text }}
        </UiAction>
      </div>
    </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 250ms ease;
}

.mobile-menu-enter-active .mobile-menu-panel,
.mobile-menu-leave-active .mobile-menu-panel {
  transition: transform 250ms ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
}

.mobile-menu-enter-from .mobile-menu-panel,
.mobile-menu-leave-to .mobile-menu-panel {
  transform: translateX(100%);
}

@media (prefers-reduced-motion: reduce) {
  .mobile-menu-enter-active,
  .mobile-menu-leave-active,
  .mobile-menu-enter-active .mobile-menu-panel,
  .mobile-menu-leave-active .mobile-menu-panel {
    transition-duration: 0ms;
  }
}
</style>
