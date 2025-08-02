<template>
  <section class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-thin text-gray-900 mb-4">
          Get <strong>Free App</strong> for your Education & LMS Site.
        </h2>
        <h5 class="text-lg text-gray-600 max-w-4xl mx-auto">
          Huge savings of <strong>Time and Money</strong>. The WPLMS PWA plays equally good on
          <br class="hidden md:block" />
          <strong>Mobile, Desktop, Tablets, and TV's.</strong>
        </h5>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="(feature, index) in features" :key="index" class="text-center">
          <div class="text-xl mb-4 flex justify-center text-gray-500" v-html="feature.icon" />
          <h3 class="text-xl font-semibold text-gray-900 mb-3">
            {{ feature.title }}
          </h3>
          <p class="text-gray-600">{{ feature.description }}</p>
        </div>
      </div>

      <div class="text-center mt-12">
        <button
          class="bg-[#ffae29] hover:bg-[#e69a26] text-white px-8 py-3 text-md font-semibold rounded transition-colors cursor-pointer"
        >
          See all feature
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { features } from '@/data/mockData'
</script>

<style scoped></style>
