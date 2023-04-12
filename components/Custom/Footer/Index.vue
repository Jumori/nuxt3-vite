<template>
  <footer class="flex justify-center items-center text-secondary-100 h-16">
    <strong>© {{ currentYear }}</strong>
  </footer>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const currentYear = ref(new Date().getFullYear())
</script>

<script lang="ts">
export default {
  name: 'CustomFooter'
}
</script>
