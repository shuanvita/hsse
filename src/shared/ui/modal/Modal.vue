<script setup lang="ts">
// TODO Проверить компонент самому для рефакторинга (пока не отрисовано в дизайне)
import { onKeyStroke, useScrollLock } from '@vueuse/core'
import type { ModalProps } from './Modal.types'
import { MODAL_BASE_CLASSES, MODAL_OVERLAY_CLASSES, MODAL_SIZE_CLASSES } from './Modal.constants'

defineOptions({ inheritAttrs: false })

withDefaults(defineProps<ModalProps>(), {
  size: 'md',
  closable: true,
})

const open = defineModel<boolean>({ default: false })

const titleId = useId()

const close = () => {
  open.value = false
}

onKeyStroke('Escape', () => {
  if (open.value) close()
})

const isLocked = useScrollLock(import.meta.client ? document.body : null)
watch(open, (value) => (isLocked.value = value), { immediate: true })
onBeforeUnmount(() => (isLocked.value = false))
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0"
      leave-active-class="transition duration-150 ease-in"
      leave-to-class="opacity-0"
    >
      <div
        v-if="open"
        :class="[MODAL_OVERLAY_CLASSES, size === 'full' ? 'p-0' : 'p-4']"
        data-testid="modal-overlay"
        @click.self="close"
      >
        <div
          role="dialog"
          aria-modal="true"
          :aria-labelledby="title ? titleId : undefined"
          v-bind="$attrs"
          :class="[MODAL_BASE_CLASSES, MODAL_SIZE_CLASSES[size]]"
        >
          <header
            v-if="title || closable"
            class="flex shrink-0 items-center justify-between gap-4 border-b border-white/6 px-6 py-4"
          >
            <UiHeading v-if="title" :id="titleId" as="h2" variant="h3">{{ title }}</UiHeading>
            <UiAction
              v-if="closable"
              variant="custom"
              size="custom"
              icon="close"
              icon-class="size-5"
              aria-label="Закрыть"
              class="text-foreground/42 hover:text-foreground -m-1 ml-auto size-8 shrink-0 rounded-md"
              @click="close"
            />
          </header>

          <div class="min-h-0 flex-1 overflow-y-auto px-6 py-5">
            <slot />
          </div>

          <footer v-if="$slots.footer" class="shrink-0 border-t border-white/6 px-6 py-4">
            <slot name="footer" />
          </footer>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
