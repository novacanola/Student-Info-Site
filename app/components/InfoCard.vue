<script setup lang="ts">
defineProps<{
  title: string
  description: string
}>()
</script>

<template>
  <section class="rounded-3xl bg-white p-5 shadow-sm">
    <h3 class="mb-1 text-2xl font-bold text-forest">{{ title }}</h3>
    <p class="text-sm text-ink/70">{{ description }}</p>
  </section>
</template>