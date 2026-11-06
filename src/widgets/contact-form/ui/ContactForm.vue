<script setup lang="ts">
import type { ContactFormProps } from '../model/ContactForm.types'

const props = defineProps<ContactFormProps>()
const config = useRuntimeConfig()
const privacyHref = computed(() => `${config.app.baseURL.replace(/\/$/, '')}${props.privacyUrl}`)
const name = ref('')
const phone = ref('')
const email = ref('')
const question = ref('')
const consent = ref(false)
const message = ref('')
const phoneValidity = ref<'empty' | 'invalid' | 'valid' | 'loading'>('empty')
const touched = reactive({ name: false, phone: false, email: false, question: false, consent: false })
const errors = computed(() => ({
  name: !name.value.trim() ? 'Это обязательное поле' : '',
  phone: phoneValidity.value === 'empty' ? 'Это обязательное поле' : phoneValidity.value === 'loading' ? 'Дождитесь загрузки проверки номера' : phoneValidity.value === 'invalid' ? 'Введите корректный номер телефона' : '',
  email: !email.value.trim() ? 'Это обязательное поле' : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim()) ? 'Введите корректный адрес почты' : '',
  question: !question.value.trim() ? 'Это обязательное поле' : '',
  consent: !consent.value ? 'Необходимо ваше согласие' : '',
}))

function submit() {
  message.value = ''
  Object.assign(touched, { name: true, phone: true, email: true, question: true, consent: true })
  if (Object.values(errors.value).some(Boolean)) return
  message.value = 'Отправка вопроса пока недоступна.'
}
</script>

<template>
  <section id="form" class="bg-foreground text-primary">
    <div class="container flex flex-col gap-8 pt-12 md:flex-row md:gap-10 md:pt-16">
      <div class="flex flex-1 flex-col">
        <UiHeading as="h2" variant="h3" uppercase class="max-w-65 font-dewi font-semibold leading-6 tracking-[2px]">{{ title }}</UiHeading>
        <NuxtPicture :src="image" alt="" :width="828" :height="776" loading="lazy" class="mt-auto hidden max-w-120 pt-8 md:block" :img-attrs="{ class: 'w-full' }" />
      </div>
      <form class="flex flex-1 flex-col gap-4 pb-12" novalidate @submit.prevent="submit">
        <UiInput v-model="name" label="Имя" placeholder="Имя" name="name" autocomplete="name" :error="touched.name ? errors.name : ''" required @blur="touched.name = true" />
        <UiPhoneInput v-model="phone" name="tel" :error="touched.phone && !!errors.phone" :error-message="errors.phone" required @blur="touched.phone = true" @validity="phoneValidity = $event" />
        <UiInput v-model="email" label="Почта" placeholder="Email" type="email" name="email" autocomplete="email" :error="touched.email ? errors.email : ''" required @blur="touched.email = true" />
        <UiTextarea v-model="question" label="Вопрос" placeholder="Вопрос" name="question" :error="touched.question ? errors.question : ''" required @blur="touched.question = true" />
        <UiCheckbox v-model="consent" :error="touched.consent && !!errors.consent" :error-message="errors.consent" required @blur="touched.consent = true">
          Я подтверждаю, что принимаю <UiAction :to="privacyHref" external target="_blank" variant="link" size="custom" class="inline! underline">соглашение об обработке персональных данных МФТИ</UiAction>
        </UiCheckbox>
        <UiAction type="submit" variant="invert" post-icon="arrow-up" class="mt-5">Задать вопрос</UiAction>
        <UiText v-if="message" role="status">{{ message }}</UiText>
      </form>
    </div>
  </section>
</template>
