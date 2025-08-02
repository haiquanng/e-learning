<template>
  <section class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          What out <strong>Customers say</strong> about us
        </h2>
        <h5 class="text-xl text-gray-600 max-w-3xl mx-auto">
          Excellence speaks for itself. Coporates, Students, Instructors and Academy.
        </h5>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="testimonial in testimonials" :key="testimonial.id" class="bg-white">
          <div class="mb-6">
            <h4 class="text-xl font-semibold text-gray-900 mb-3">{{ testimonial.title }}</h4>
            <p class="text-gray-600 leading-relaxed">
              {{ testimonial.content }}
              <a
                href="#"
                class="text-[#ffae29] hover:text-[#e69a26] ml-1 inline-flex items-center group"
              >
                <span>READ MORE</span>
                <ArrowRight
                  class="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200"
                />
              </a>
            </p>
          </div>

          <div class="flex items-center">
            <img
              :src="testimonial.avatar || '/placeholder.svg'"
              :alt="testimonial.name"
              class="w-16 h-16 rounded-full object-cover mr-4"
            />
            <div>
              <h4 class="font-semibold text-gray-900">{{ testimonial.name }}</h4>
              <small class="text-gray-600">{{ testimonial.company }}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { testimonials } from '@/data/mockData'
import { ArrowRight } from 'lucide-vue-next'
</script>

<style scoped></style>
