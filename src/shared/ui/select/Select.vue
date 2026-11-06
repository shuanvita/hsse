<script setup lang="ts">
defineOptions({ inheritAttrs: false })
withDefaults(defineProps<{
  label?: string
  options: { value: string | number, label: string }[]
  placeholder?: string
  name?: string
  error?: boolean
  errorMessage?: string
  disabled?: boolean
}>(), { label: '', placeholder: '', name: '', errorMessage: '', disabled: false })
const model = defineModel<string>()
const id = useId()
</script>

<template>
  <div :class="$attrs.class">
    <label v-if="label" :for="id" class="mb-1 block text-sm font-light">{{ label }}</label>
    <div class="relative">
      <select
        :id="id"
        v-model="model"
        v-bind="Object.fromEntries(Object.entries($attrs).filter(([key]) => key !== 'class'))"
        :name="name"
        :disabled="disabled"
        :aria-invalid="error || undefined"
        :aria-describedby="error && errorMessage ? `${id}-error` : undefined"
        :class="['h-14 w-full appearance-none rounded-[9px] border bg-transparent px-5 pr-12 text-base font-light text-primary outline-none focus:border-primary disabled:cursor-not-allowed disabled:opacity-50', error ? 'border-red-700' : 'border-foreground-muted']"
      >
        <option v-if="placeholder" disabled value="">{{ placeholder }}</option>
        <option v-for="option in options" :key="option.value" :value="String(option.value)">{{ option.label }}</option>
      </select>
      <UiSvg name="arrow-down" class="pointer-events-none absolute top-1/2 right-5 size-4 -translate-y-1/2 text-primary" />
    </div>
    <p v-if="error && errorMessage" :id="`${id}-error`" class="mt-1 text-xs text-red-700">{{ errorMessage }}</p>
  </div>
</template>
