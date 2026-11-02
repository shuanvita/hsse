<script setup lang="ts">
import type { InputProps } from './Input.types'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<InputProps>(), {
  type: 'text',
  disabled: false,
})

const model = defineModel<string | number>()

const inputId = useId()

const stateClasses = computed(() => {
  if (props.disabled)
    return 'border border-white/4 bg-white/[0.016] text-foreground/20 cursor-not-allowed'
  if (props.error)
    return 'border-[1.5px] border-error bg-error/4 focus:border-error focus:bg-error/4'
  return 'border border-stroke bg-white/[0.025] focus:border-primary/50 focus:bg-primary/4'
})
</script>

<template>
  <div>
    <label
      v-if="label"
      :for="inputId"
      class="text-muted-fg mb-1.5 block font-mono text-xs font-semibold tracking-[0.04em]"
      >{{ label }}</label
    >
    <input
      :id="inputId"
      v-model="model"
      v-bind="$attrs"
      :class="[
        'text-foreground placeholder:text-foreground/20 h-11 w-full rounded-[9px] px-3.5 text-sm transition-colors duration-150 outline-none',
        stateClasses,
      ]"
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
      :aria-invalid="error ? 'true' : undefined"
      :aria-describedby="error ? `${inputId}-error` : undefined"
    />
    <p v-if="error" :id="`${inputId}-error`" class="text-error mt-1.5 text-[11px]">
      {{ error }}
    </p>
    <p v-else-if="hint" class="text-foreground/18 mt-1 font-mono text-[11px]">
      {{ hint }}
    </p>
  </div>
</template>
