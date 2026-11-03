<script setup lang="ts">
import type { AdvantagesBlockProps } from '../model/AdvantagesBlock.types'
import AdvantageCard from './AdvantageCard.vue'

defineProps<AdvantagesBlockProps>()

const containerRef = ref(null)
const swiper = useSwiper(containerRef)
const activeIndex = ref(0)

function onSlideChange(event: Event) {
  const [instance] = (event as CustomEvent).detail
  activeIndex.value = instance.activeIndex
}
</script>

<template>
  <section v-if="items.length" class="container" aria-label="Преимущества обучения">
    <div class="hidden grid-cols-3 gap-6 md:grid">
      <AdvantageCard v-for="item in items" :key="item.title" v-bind="item" />
    </div>

    <div class="md:hidden">
      <ClientOnly>
        <swiper-container ref="containerRef" @swiperslidechange="onSlideChange">
          <swiper-slide v-for="item in items" :key="item.title" class="h-auto">
            <AdvantageCard v-bind="item" />
          </swiper-slide>
        </swiper-container>
        <div v-if="items.length > 1" class="mt-9 flex items-center justify-center gap-7">
          <UiAction variant="custom" size="custom" aria-label="Предыдущее преимущество" :disabled="activeIndex === 0" class="disabled:border-0 disabled:bg-transparent disabled:text-foreground disabled:opacity-25" @click="swiper.prev()">
            <UiSvg name="arrow-prev" class="size-9" />
          </UiAction>
          <div class="flex items-center gap-4" aria-label="Выбор преимущества">
            <UiAction
              v-for="(item, index) in items"
              :key="item.title"
              variant="custom"
              size="custom"
              :aria-label="`Преимущество ${index + 1}: ${item.title}`"
              :aria-current="activeIndex === index ? 'true' : undefined"
              :class="activeIndex === index ? 'scale-125 bg-foreground' : 'bg-foreground/50'"
              class="size-3 rounded-full"
              @click="swiper.to(index)"
            />
          </div>
          <UiAction variant="custom" size="custom" aria-label="Следующее преимущество" :disabled="activeIndex === items.length - 1" class="disabled:border-0 disabled:bg-transparent disabled:text-foreground disabled:opacity-25" @click="swiper.next()">
            <UiSvg name="arrow-next" class="size-9" />
          </UiAction>
        </div>
        <template #fallback>
          <AdvantageCard v-bind="items[0]!" />
        </template>
      </ClientOnly>
    </div>
  </section>
</template>

