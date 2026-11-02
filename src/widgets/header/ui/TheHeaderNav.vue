<script setup lang="ts">
import { onClickOutside, onKeyStroke } from '@vueuse/core'
import type { TheHeaderProps } from '../model/TheHeader.types'

defineProps<Pick<TheHeaderProps, 'nav'>>()

const navElement = ref<HTMLElement | null>(null)
const openMenu = ref<string | null>(null)

onClickOutside(navElement, () => { openMenu.value = null })
onKeyStroke('Escape', () => {
  if (!openMenu.value) return
  if (document.activeElement instanceof HTMLElement && navElement.value?.contains(document.activeElement)) {
    document.activeElement.blur()
  }
  openMenu.value = null
})

function onFocusOut(event: FocusEvent) {
  if (!navElement.value?.contains(event.relatedTarget as Node | null)) openMenu.value = null
}
</script>

<template>
  <nav ref="navElement" @focusout="onFocusOut">
    <ul class="flex items-center gap-6">
      <li v-for="item in nav" :key="item.text" class="relative whitespace-nowrap leading-none">
        <template v-if="item.isDropdown && item.dropdownMenu?.length">
          <UiAction
            variant="link"
            size="custom"
            class="gap-1 text-xs"
            :aria-expanded="openMenu === item.text"
            aria-controls="header-programs-menu"
            @click="openMenu = openMenu === item.text ? null : item.text"
          >
            {{ item.text }}
            <UiSvg
              name="arrow-down"
              class="size-3 transition-transform"
              :class="{ 'rotate-180': openMenu === item.text }"
            />
          </UiAction>
          <div
            v-if="openMenu === item.text"
            id="header-programs-menu"
            class="absolute top-full left-0 z-40 mt-4 w-[340px] rounded-lg border border-stroke bg-primary p-2 whitespace-normal shadow-[0_25px_50px_-12px_rgb(0_0_0_/_25%)]"
          >
            <NuxtLink
              v-for="entry in item.dropdownMenu"
              :key="entry.link"
              :to="entry.link"
              class="flex flex-col items-start gap-1.5 rounded-md px-3 py-2.5 text-left hover:bg-primary-lighter"
              @click="openMenu = null"
            >
              <span class="text-[10px] leading-[1.4] text-foreground-muted uppercase">{{ entry.overTitle }}</span>
              <span class="text-sm leading-[1.35] text-foreground">{{ entry.text }}</span>
            </NuxtLink>
          </div>
        </template>
        <UiAction v-else :to="item.link" variant="link" size="custom" class="text-xs" @click="openMenu = null">
          {{ item.text }}
        </UiAction>
      </li>
    </ul>
  </nav>
</template>

