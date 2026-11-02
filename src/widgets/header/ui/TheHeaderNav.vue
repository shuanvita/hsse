<script setup lang="ts">
import { onClickOutside, onKeyStroke } from '@vueuse/core'
import type { TheHeaderProps } from '../model/TheHeader.types'

defineProps<Pick<TheHeaderProps, 'nav'>>()

const navElement = ref<HTMLElement | null>(null)
const openMenu = ref<string | null>(null)

onClickOutside(navElement, () => { openMenu.value = null })
onKeyStroke('Escape', () => {
  if (!openMenu.value) return
  openMenu.value = null
  navElement.value?.querySelector<HTMLButtonElement>('[aria-controls="header-programs-menu"]')?.focus()
})

function onFocusOut(event: FocusEvent) {
  if (!navElement.value?.contains(event.relatedTarget as Node | null)) openMenu.value = null
}
</script>

<template>
  <nav ref="navElement" @focusout="onFocusOut">
    <ul class="header-nav">
      <li v-for="item in nav" :key="item.text" class="header-nav__item">
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
            class="header-nav__menu"
          >
            <NuxtLink
              v-for="entry in item.dropdownMenu"
              :key="entry.link"
              :to="entry.link"
              class="header-nav__entry"
              @click="openMenu = null"
            >
              <span class="header-nav__over-title">{{ entry.overTitle }}</span>
              <span class="header-nav__title">{{ entry.text }}</span>
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

<style scoped>
.header-nav { display: flex; align-items: center; gap: 24px; }
.header-nav__item { position: relative; white-space: nowrap; }
.header-nav__menu { position: absolute; top: 100%; left: 0; z-index: 40; margin-top: 16px; width: 340px; padding: 8px; border: 1px solid var(--color-stroke); border-radius: 8px; background: var(--color-primary); box-shadow: 0 25px 50px -12px rgb(0 0 0 / 25%); white-space: normal; }
.header-nav__entry { display: flex; flex-direction: column; align-items: flex-start; gap: 6px; padding: 10px 12px; border-radius: 6px; text-align: left; }
.header-nav__entry:hover { background: var(--color-primary-lighter); }
.header-nav__over-title { color: var(--color-foreground-muted); font-size: 10px; line-height: 1.4; text-transform: uppercase; }
.header-nav__title { color: var(--color-foreground); font-size: 14px; line-height: 1.35; }
</style>
