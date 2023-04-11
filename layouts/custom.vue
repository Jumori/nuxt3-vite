<template>
  <v-app>
    <div
      class="w-screen flex flex-col justify-center bg-secondary-900 font-sans"
    >
      <main>
        <slot />
      </main>

      <Footer />
    </div>
  </v-app>
</template>

<script lang="ts" setup></script>
