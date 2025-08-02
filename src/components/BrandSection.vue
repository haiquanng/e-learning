<template>
  <section class="py-20 bg-gray-100">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-thin text-gray-900 mb-4">
          Trusted by <strong>fortune 500</strong> brands
        </h2>
        <h5 class="text-lg text-gray-600 max-w-3xl mx-auto">
          From startups to fortune 500 brands.
          <br class="hidden md:block" />
          WPLMS is the number 1 choice to start an educational venture.
        </h5>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-items-center">
        <div
          v-for="brand in brands"
          :key="brand.id"
          class="flex items-center justify-center h-20 w-full"
        >
          <img
            :src="brand.logo || '/placeholder.svg'"
            :alt="brand.name"
            class="max-h-16 max-w-full w-auto object-contain hover:scale-110 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { brands } from '@/data/mockData'
</script>

<style scoped></style>
