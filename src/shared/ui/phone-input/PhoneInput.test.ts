import { describe, expect, it, vi } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import { flushPromises } from '@vue/test-utils'
import PhoneInput from './PhoneInput.vue'

vi.mock('intl-tel-input', () => {
  throw new Error('Network error')
})

describe('PhoneInput', () => {
  it('allows a number with a country code when the country selector fails to load', async () => {
    const wrapper = await mountSuspended(PhoneInput)
    await flushPromises()

    expect(wrapper.text()).toContain('Не удалось загрузить выбор страны')
    const input = wrapper.get('input')
    await input.setValue('+7 999 123-45-67')
    expect(wrapper.emitted('update:modelValue')?.at(-1)).toEqual(['+7 999 123-45-67'])
    expect(wrapper.emitted('validity')?.at(-1)).toEqual(['valid'])
    await input.setValue('123')
    expect(wrapper.emitted('validity')?.at(-1)).toEqual(['invalid'])
  })
})
