<script setup lang="ts">
import type { Iti } from 'intl-tel-input'
import 'intl-tel-input/styles'

defineOptions({ inheritAttrs: false })
const props = withDefaults(defineProps<{
  label?: string
  name?: string
  error?: boolean
  errorMessage?: string
  disabled?: boolean
}>(), { label: 'Телефон', name: 'phone', errorMessage: '', disabled: false })
const model = defineModel<string>({ default: '' })
const emit = defineEmits<{ validity: [state: 'empty' | 'invalid' | 'valid' | 'loading'] }>()
const input = ref<HTMLInputElement | null>(null)
const fallback = ref(false)
const id = useId()
let instance: Iti | undefined
let utilsReady = false

function updateValue() {
  if (!input.value) return
  const value = input.value.value.trim()
  if (fallback.value) {
    model.value = value
    emit('validity', !value ? 'empty' : /^\+[1-9]\d{6,14}$/.test(value.replace(/[\s()-]/g, '')) ? 'valid' : 'invalid')
    return
  }
  if (!instance) {
    emit('validity', value ? 'loading' : 'empty')
    return
  }
  if (!utilsReady) {
    emit('validity', value ? 'loading' : 'empty')
    return
  }
  emit('validity', !value ? 'empty' : instance.isValidNumber() ? 'valid' : 'invalid')
  model.value = value ? instance.getNumber() || value : ''
}

onMounted(async () => {
  try {
    const [{ default: intlTelInput }, { ru }] = await Promise.all([
      import('intl-tel-input'),
      import('intl-tel-input/locale'),
    ])
    if (!input.value) return
    instance = intlTelInput(input.value, {
    initialCountry: 'ru',
    countryNameLocale: 'ru',
    countrySearch: false,
    uiTranslations: ru,
    separateDialCode: true,
    allowedNumberTypes: null,
    formatAsYouType: true,
    strictMode: true,
    placeholderNumberPolicy: 'OFF',
    loadUtils: () => import('intl-tel-input/utils'),
    })
    if (model.value) instance.setNumber(model.value)
    input.value.addEventListener('countrychange', updateValue)
    await instance.promise
    utilsReady = true
    updateValue()
  } catch {
    if (!input.value) return
    const value = input.value.value.trim()
    const dialCode = instance?.getSelectedCountry()?.dialCode
    input.value.removeEventListener('countrychange', updateValue)
    instance?.destroy()
    instance = undefined
    fallback.value = true
    input.value.value = value && dialCode && !value.startsWith('+') ? `+${dialCode} ${value}` : value
    updateValue()
  }
})

watch(model, value => {
  if (fallback.value && input.value && value !== input.value.value) {
    input.value.value = value
    updateValue()
    return
  }
  if (input.value && instance && utilsReady && value !== instance.getNumber() && value !== input.value.value) {
    instance.setNumber(value)
    if (!value) emit('validity', 'empty')
  }
})
watch(() => props.disabled, value => instance?.setDisabled(value))
onBeforeUnmount(() => {
  input.value?.removeEventListener('countrychange', updateValue)
  instance?.destroy()
})
</script>

<template>
  <div :class="$attrs.class">
    <label :for="id" class="mb-1 block text-sm font-light" :class="error && 'text-error'">{{ label }}</label>
    <input
      :id="id"
      ref="input"
      v-bind="Object.fromEntries(Object.entries($attrs).filter(([key]) => key !== 'class'))"
      :name="name"
      :disabled="disabled"
      :aria-invalid="error || undefined"
      :aria-describedby="[error && errorMessage ? `${id}-error` : '', fallback ? `${id}-fallback` : ''].filter(Boolean).join(' ') || undefined"
      type="tel"
      autocomplete="tel"
      :class="['h-14 w-full rounded-[9px] border bg-transparent px-5 py-4 text-base font-light text-primary outline-none transition-colors focus:border-primary disabled:cursor-not-allowed disabled:opacity-50', error ? 'border-error focus:border-error' : 'border-foreground-muted']"
      @input="updateValue"
    >
    <p v-if="error && errorMessage" :id="`${id}-error`" class="text-error mt-1 text-xs">{{ errorMessage }}</p>
    <p v-if="fallback" :id="`${id}-fallback`" role="status" class="mt-1 text-xs">Не удалось загрузить выбор страны и полную проверку номера. Введите номер с кодом страны, например +7.</p>
  </div>
</template>

<style scoped>
:deep(.iti) { width: 100%; --iti-border-color: var(--color-foreground-muted); --iti-dropdown-bg: var(--color-foreground); --iti-hover-color: rgb(22 25 37 / 8%); --iti-dialcode-color: var(--color-primary); }
:deep(.iti__country-selector) { color: var(--color-primary); }
:deep(.iti__search-input) { color: var(--color-primary); background: var(--color-foreground); }
:deep(.iti__selected-country:focus-visible) { outline: 2px solid var(--color-primary); outline-offset: -3px; }
</style>
