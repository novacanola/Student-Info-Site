<script setup lang="ts">
const props = defineProps<{
  name: string
  program: string
  year: string
  email: string
}>()

// first letter of the name, used as a simple avatar
const initial = computed(() => props.name.charAt(0))
</script>

<template>
  <article class="rounded-3xl bg-white p-5 shadow-sm">
    <div class="mb-4 flex items-start justify-between gap-3">
      <div class="flex h-14 w-14 items-center justify-center rounded-full bg-leaf text-xl font-bold text-white">
        {{ initial }}
      </div>
      <span class="rounded-full bg-mint px-3 py-1 text-xs font-medium text-forest">{{ year }}</span>
    </div>
    <h3 class="text-lg font-bold">{{ name }}</h3>
    <p class="break-all text-sm text-ink/60">{{ email }}</p>
    <p class="mt-3 border-l-4 border-leaf pl-3 text-sm font-medium">{{ program }}</p>
  </article>
</template>