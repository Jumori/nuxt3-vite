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
        name="email"
        label="Endereço de e-mail"
        :value="formData.email"
        prependIcon="mdi-email-outline"
        inputmode="email"
        type="email"
        @input="value => (formData.email = value)"
      />
      <FormInput
        name="password"
        label="Sua senha"
        :value="formData.password"
        prependIcon="mdi-lock-outline"
        type="password"
        @input="value => (formData.password = value)"
      />

      <v-btn type="submit" class="mt-4">Entrar na plataforma</v-btn>
    </v-form>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'default'
})

const isLoggedIn = ref(false)
const formData = reactive({
  email: null,
  password: null
})

const handleSubmit = () => {
  console.log('submit')
}
</script>
