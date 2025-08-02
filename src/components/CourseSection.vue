<template>
  <section class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-thin text-gray-900 mb-4">
          Get <strong>unlimited access</strong> to our courses.
        </h2>
        <h5 class="text-lg text-gray-600 max-w-3xl mx-auto">
          Get instant access to <strong>over 2500 online courses</strong>.
          <br class="hidden md:block" />
          Join <strong>560,000 Students</strong> enrolled in the site.
        </h5>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="course in courses"
          :key="course.id"
          class="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow relative"
        >
          <div class="relative">
            <img :src="course.image" :alt="course.title" class="w-full h-48 object-cover" />
            <div
              class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6"
            >
              <h4
                class="text-2xl font-semibold text-white mb-2 hover:text-[#ffae29] transition-colors relative pl-4"
              >
                <div class="absolute left-0 top-0 bottom-0 w-1 bg-[#ffae29]"></div>
                <a :href="course.href">{{ course.title }}</a>
              </h4>
              <div class="text-sm text-white font-medium pl-4">
                {{ course.category.toUpperCase() }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center mt-12">
        <button
          class="bg-[#ffae29] hover:bg-[#e69a26] text-white px-8 py-3 text-md font-semibold rounded transition-colors cursor-pointer"
        >
          See all courses
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { courses } from '@/data/mockData'
</script>

<style scoped></style>
