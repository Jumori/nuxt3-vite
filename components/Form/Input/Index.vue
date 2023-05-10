<template>
  <div class="flex flex-col gap-3">
    <label
      v-if="!props.floatingLabel && hasLabel"
      :for="props.name"
      class="text-secondary-100 font-semibold"
    >
      {{ label }}
    </label>

    <v-text-field
      :id="props.name"
      :name="props.name"
      :value="props.value"
      :label="props.floatingLabel ? props.label : ''"
      :placeholder="props.placeholder"
      :type="props.type"
      :inputmode="props.inputmode"
      :prepend-inner-icon="hasPrependIcon ? props.prependIcon : null"
      :disabled="props.disabled"
      v-maska:[maskaMask]
      v-inputmask="inputmaskMask"
      variant="solo"
      @input="handleInput"
    />
  </div>
</template>

<script lang="ts" setup>
import {
  getMaskaMask,
  getMaskaMaskOptions,
  getMaskaUnmaskedValue
} from '~/services/maska'
import { getInputmaskMask } from '~/services/inputmask'
import { InputProps, InputEvent } from './types'

const props = withDefaults(defineProps<InputProps>(), {
  floatingLabel: false,
  type: 'text',
  inputmode: 'text',
  disabled: false,
  placeholder: ''
})

const emits = defineEmits(['input'])

const hasLabel = computed(() => props.label !== '')

const hasPrependIcon = computed(
  () => props.prependIcon && props.prependIcon !== ''
)

const maskaMask = computed(() => {
  if (!props.maska) {
    return null
  }

  if (typeof props.maska === 'string') {
    return getMaskaMask(props.maska)
  }

  return props.maska
})

const maskaMaskOptions = computed(() => {
  if (!props.maska) {
    return null
  }

  if (typeof props.maska === 'string') {
    return getMaskaMaskOptions(props.maska)
  }

  return null
})

const inputmaskMask = computed(() => {
  if (!props.inputmask) {
    return null
  }

  if (typeof props.inputmask === 'string') {
    return getInputmaskMask(props.inputmask)
  }

  return props.maska
})

const handleInput = (event: InputEvent) => {
  if (props.maska && maskaMaskOptions.value?.autounmask) {
    const unmaskedValue = getMaskaUnmaskedValue(event.target.value, props.maska)
    console.log(unmaskedValue)
  }

  emits('input', event.target.value)
}
</script>

<script lang="ts">
export default {
  name: 'FormInput'
}
</script>

<style lang="postcss" scoped>
.v-text-field {
  &:deep(.v-field) {
    border: 1px solid theme('colors.transparent');
    border-radius: 0.25rem;
    color: theme('colors.secondary.400');
    caret-color: theme('colors.secondary.400');
    background-color: theme('colors.secondary.800');

    &.v-field--focused {
      transition: all 0.2s ease-in-out;
      border: 1px solid theme('colors.primary.500');
    }
  }
}
</style>
