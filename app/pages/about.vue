<template>
  <div>
    <h1 class="text-4xl font-bold">About this site</h1>
    <p class="mb-8 mt-1 text-ink/70">This page uses the same header and footer as the others, plus the InfoCard component.</p>

    <div class="grid gap-4 md:grid-cols-2">
      <InfoCard title="Header and Footer" description="Written once, shown on every page through the default layout." />
      <InfoCard title="StudentCard" description="Takes name, program, year, and email as props and displays them." />
      <InfoCard title="InfoCard" description="Takes a title and a description, which makes it good for short notes like this one." />
      <InfoCard title="AppButton" description="Takes a label and a color, and can also work as a link when given a destination." />
    </div>

    <div class="mt-10 text-center">
      <AppButton label="See the Students" color="green" to="/students" />
    </div>
  </div>
</template>