<script setup lang="ts">
import { TheHeader } from "~/widgets/header";
</script>

<template>
  <div class="flex flex-col pt-5">
    <TheHeader />
    <main class="flex flex-col space-y-8 mt-16">
      <slot />
    </main>
    <footer>Footer</footer>
  </div>
</template>
