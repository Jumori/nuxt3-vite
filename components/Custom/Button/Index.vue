<template>
  <v-btn
    :type="props.type"
    :block="props.block"
    :disabled="props.disabled"
    :loading="props.loading"
    @click="emits('click')"
  >
    <slot />
  </v-btn>
</template>

<script lang="ts" setup>
import { CustomButtonProps } from './types'

const props = withDefaults(defineProps<CustomButtonProps>(), {
  type: 'button'
})

const emits = defineEmits(['click'])
</script>

<script lang="ts">
export default {
  name: 'CustomButton'
}
</script>

<style lang="postcss" scoped>
.v-btn {
  height: 2.75rem;
  background: theme('colors.primary.500');
  color: theme('colors.black');
  border-radius: 0.25rem;
  font-weight: 500;
  font-size: 1rem;
  text-transform: none;
  letter-spacing: normal;

  &:hover {
    background: theme('colors.primary.300');
  }

  &.v-btn--disabled {
    background: theme('colors.secondary.400');
  }
}
</style>
