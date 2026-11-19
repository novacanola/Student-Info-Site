<template>
  <div class="flex min-h-screen bg-white p-3 font-body text-ink sm:p-6">
    <div class="mx-auto flex w-full max-w-6xl flex-col rounded-3xl bg-sand p-4 sm:p-8">
      <AppHeader />
      <main class="flex-1 py-8">
        <slot />
      </main>
      <AppFooter />
    </div>
  </div>
</template>