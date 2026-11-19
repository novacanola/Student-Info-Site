<script setup lang="ts">
// label = the text inside the button
// color = dark, green, or light
// to = (optional) if given, the button works as a link to that page
const props = defineProps<{
  label: string
  color?: 'dark' | 'green' | 'light'
  to?: string
}>()

// full class names are written out so Tailwind can find them
const colorClasses = {
  dark: 'bg-ink text-white hover:bg-leaf',
  green: 'bg-leaf text-white hover:bg-forest',
  light: 'bg-white text-ink hover:bg-mint'
}
</script>

<template>
  <NuxtLink
    v-if="to"
    :to="to"
    class="inline-block rounded-full px-6 py-3 text-sm font-bold transition-colors"
    :class="colorClasses[props.color ?? 'dark']"
  >
    {{ label }}
  </NuxtLink>
  <button
    v-else
    type="button"
    class="inline-block rounded-full px-6 py-3 text-sm font-bold transition-colors"
    :class="colorClasses[props.color ?? 'dark']"
  >
    {{ label }}
  </button>
</template>