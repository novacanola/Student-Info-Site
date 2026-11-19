<script setup lang="ts">
// students comes from app/utils/students.ts (Nuxt imports it automatically)
const featured = students.slice(0, 3)
const programCount = new Set(students.map((s) => s.program)).size
const yearCount = new Set(students.map((s) => s.year)).size
</script>

<template>
  <div class="space-y-10">
    <section class="grid items-center gap-6 lg:grid-cols-2">
      <div>
        <h1 class="text-4xl font-bold leading-tight sm:text-5xl">
          Hi there!<br />Meet our students.
        </h1>
        <p class="mt-4 max-w-md text-ink/70">
          Explore information about each student in one simple place, built from reusable components.
        </p>
        <div class="mt-6 flex flex-wrap gap-3">
          <AppButton label="View Students" color="dark" to="/students" />
          <AppButton label="About this site" color="light" to="/about" />
          <AppButton label="Contact" color="green" />
        </div>
      </div>

      <div class="grid grid-cols-3 gap-4">
        <InfoCard :title="String(students.length)" description="Students" />
        <InfoCard :title="String(programCount)" description="Programs" />
        <InfoCard :title="String(yearCount)" description="Year levels" />
      </div>
    </section>

    <section>
      <h2 class="mb-4 text-2xl font-bold">Featured students</h2>
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <StudentCard
          v-for="student in featured"
          :key="student.email"
          :name="student.name"
          :program="student.program"
          :year="student.year"
          :email="student.email"
        />
      </div>
    </section>
  </div>
</template>