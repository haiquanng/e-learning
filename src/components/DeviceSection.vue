<template>
  <section class="py-20 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          One app for all devices Mobile, Tablet, Desktop & TV
        </h2>
        <h5 class="text-xl text-gray-300 max-w-4xl mx-auto">
          Install and setup WPLMS version 4. Upload your App icon and splash image
          <br class="hidden md:block" />
          and <span class="text-white">get your App in few clicks</span> from the options panel
        </h5>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div class="space-y-6 content-center">
          <div>
            <h6 class="text-2xl font-thin mb-2">Mobile first design</h6>
            <p class="text-gray-300">
              The version 4 is built with mobile centeric design pattern and the latest Progressive
              web app technology.
            </p>
          </div>
          <div>
            <h6 class="text-lg font-base">Course pursue screen for students</h6>
          </div>
          <div>
            <h6 class="text-lg font-base">Course creation module for Instructors</h6>
          </div>
        </div>

        <div class="flex justify-center">
          <div class="relative">
            <div class="w-64 h-[600px] bg-black rounded-[36px] p-1 shadow-xl">
              <div class="w-full h-full bg-gray-800 rounded-[32px] overflow-hidden">
                <img
                  src="/mobile-demo1.png"
                  alt="Mobile App"
                  class="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="flex justify-center">
          <div class="relative">
            <div class="w-64 h-[600px] bg-black rounded-[36px] p-1 shadow-xl">
              <div class="w-full h-full bg-gray-800 rounded-[32px] overflow-hidden">
                <img
                  src="/mobile-demo2.png"
                  alt="Course Creation"
                  class="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// No reactive state needed for this component
</script>

<style scoped></style>
