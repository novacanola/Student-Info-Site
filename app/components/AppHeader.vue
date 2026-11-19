<script setup lang="ts">
const links = [
  { label: 'Home', to: '/' },
  { label: 'Students', to: '/students' },
  { label: 'About', to: '/about' }
]
</script>

<template>
  <header class="flex flex-wrap items-center justify-between gap-4">
    <NuxtLink to="/" class="flex items-center gap-3">
      <span class="flex h-10 w-10 items-center justify-center rounded-full bg-leaf font-bold text-white">S</span>
      <span class="text-lg font-bold">Student Info</span>
    </NuxtLink>

    <nav class="rounded-full bg-white p-1.5">
      <ul class="flex gap-1">
        <li v-for="link in links" :key="link.to">
          <NuxtLink
            :to="link.to"
            class="block rounded-full px-5 py-2 text-sm font-medium hover:bg-mint"
            exact-active-class="!bg-ink !text-white"
          >
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>