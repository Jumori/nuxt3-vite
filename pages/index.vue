<template>
  <div class="flex flex-col justify-center items-center h-screen">
    <header class="flex flex-col justify-center items-center">
      <Logo />

      <Heading size="lg" class="mt-4"> Nuxt 3 </Heading>
      <Heading size="lg" className="text-secondary-400 mt-1">
        Faça login e comece a usar!
      </Heading>
    </header>

    <v-form
      ref="form"
      class="flex flex-col gap-4 items-stretch w-full max-w-sm mt-10"
      @submit.prevent="handleSubmit"
    >
      <FormInput
        v-for="(field, fieldIndex) in formFields"
        :key="field.name"
        :name="field.name"
        :label="field.label"
        :value="formFields[fieldIndex].value"
        :prependIcon="field.prependIcon || undefined"
        :inputmode="field.inputmode || 'text'"
        :type="field.type || 'text'"
        :maska="field.maska"
        :inputmask="field.inputmask"
        @input="value => (formFields[fieldIndex].value = value)"
      />

      <CustomButton type="button" class="mt-4">
        Entrar na plataforma
      </CustomButton>
    </v-form>
  </div>
</template>

<script lang="ts" setup>
import { InputProps } from '~/components/Form/Input/types'

definePageMeta({
  layout: 'default'
})

const isLoggedIn = ref(false)
const formFields = ref<InputProps[]>([
  {
    name: 'email',
    label: 'Endereço de e-mail',
    value: '',
    prependIcon: 'mdi-email-outline',
    inputmode: 'email',
    type: 'email'
  },
  {
    name: 'password',
    label: 'Sua senha',
    value: '',
    prependIcon: 'mdi-lock-outline',
    type: 'password'
  }
])

const handleSubmit = () => {
  console.log('submit')
}
</script>
