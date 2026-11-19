<template>
  <div>
    <div class="mb-6 flex flex-wrap items-center justify-between gap-3">
      <div>
        <h1 class="text-4xl font-bold">Students</h1>
        <p class="mt-1 text-ink/70">Each card is the same StudentCard component with different props.</p>
      </div>
      <span class="rounded-full bg-white px-4 py-2 text-sm font-medium">{{ students.length }} students</span>
    </div>

    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <StudentCard
        v-for="student in students"
        :key="student.email"
        :name="student.name"
        :program="student.program"
        :year="student.year"
        :email="student.email"
      />
    </div>

    <div class="mt-10 text-center">
      <AppButton label="Back to Home" color="dark" to="/" />
    </div>
  </div>
</template>