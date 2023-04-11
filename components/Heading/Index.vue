<template>
  <slot v-if="asChild" class="text-secondary-100 font-bold"></slot>

  <component
    v-else
    :is="componentTag"
    class="text-secondary-100 font-bold"
    :class="classObject"
  >
    <slot />
  </component>
</template>

<script lang="ts" setup>
import { ref, defineProps, withDefaults, onMounted, computed } from 'vue'

import { HeadingProps } from './types'

const props = withDefaults(defineProps<HeadingProps>(), {
  size: 'md',
  class: '',
  asChild: false
})

const componentTag = ref('h2')

const classObject = computed(() => ({
  'text-lg': props.size === 'sm',
  'text-xl': props.size === 'md',
  'text-2xl': props.size === 'lg',
  [props.class]: true
}))

onMounted(() => {
  componentTag.value = props.asChild ? '' : 'h2'
})
</script>
