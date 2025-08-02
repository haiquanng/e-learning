<template>
  <footer
    class="bg-[#232b40] text-white min-h-[400px] md:min-h-[320px] pt-[30px] fixed bottom-0 left-0 right-0 w-[100%] z-[-1]"
  >
    <div class="container mx-auto px-4 mb-4">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        <!-- Brand Section -->
        <div class="col-span-1 sm:col-span-2 lg:col-span-1 text-center sm:text-left">
          <div class="mb-4">
            <img
              src="/logo.png"
              alt="Learning Center"
              class="max-w-[100px] md:max-w-[120px] mb-2 h-10 md:h-12 object-contain mx-auto sm:mx-0"
            />
            <span class="block text-gray-400 text-sm md:text-base">We make great apps</span>
          </div>
        </div>

        <!-- Footer Sections -->
        <div
          v-for="section in footerSections"
          :key="section.title"
          class="text-center sm:text-left"
        >
          <h4 class="text-base md:text-lg font-semibold mb-3 md:mb-4">
            <span>{{ section.title }}</span>
          </h4>
          <ul class="space-y-1 md:space-y-2">
            <li v-for="link in section.links" :key="link.label">
              <a
                :href="link.href"
                class="text-gray-400 hover:text-white transition-colors text-sm md:text-base"
              >
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Certificate Validation -->
        <div class="col-span-1 sm:col-span-2 lg:col-span-1">
          <h4 class="text-base md:text-lg font-semibold mb-3 md:mb-4 text-center sm:text-left">
            <span>Certificate Code</span>
          </h4>
          <form class="space-y-3 max-w-xs mx-auto sm:mx-0">
            <input
              type="text"
              placeholder="Enter Certificate Code"
              class="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded text-white placeholder-gray-400 focus:outline-none focus:border-[#ffae29] text-sm"
            />
            <button
              type="submit"
              class="w-full sm:w-auto bg-[#fa7252] hover:bg-[#e66b4f] text-white px-4 py-2 rounded text-sm font-medium transition-colors cursor-pointer"
            >
              Validate
            </button>
          </form>
        </div>
      </div>
    </div>

    <!-- Bottom Footer -->
    <div class="bg-[#232b40] border-t border-gray-700 text-center">
      <div class="container mx-auto px-4 py-2 md:py-6">
        <div class="flex flex-col items-center justify-center">
          <div class="flex flex-col sm:flex-row items-center">
            <img src="/logo.png" alt="Learning Center" class="h-5 md:h-6 sm:mb-0 sm:mr-3" />
            <span class="text-gray-400 text-xs md:text-sm">
              E-Learning ©{{ new Date().getFullYear() }}. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { footerSections } from '@/data/mockData'
</script>

<style scoped></style>
