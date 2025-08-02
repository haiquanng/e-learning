<template>
  <section
    class="relative min-h-[650px] bg-gradient-to-br from-blue-900 to-indigo-900 text-white opacity-80 overflow-hidden flex items-center"
  >
    <!-- Background Video for Desktop -->
    <video
      class="absolute inset-0 w-full h-full object-cover hidden md:block"
      autoplay
      muted
      loop
      playsinline
    >
      <source
        src="https://learningcenter.demos.wplms.io/wp-content/uploads/2020/09/Pexels-Videos-2916.mp4"
        type="video/mp4"
      />
    </video>

    <!-- Background Image for Mobile -->
    <div class="absolute inset-0 md:hidden">
      <img src="/hero.jpg" class="w-full h-full object-cover" alt="Hero" />
    </div>

    <!-- Background Video Overlay -->
    <div class="absolute inset-0 bg-black/50"></div>

    <div class="relative container mx-auto px-4 text-center">
      <h1 class="text-4xl md:text-6xl font-thin mb-6 leading-tight">
        One App for eLearning - Web or Mobile
      </h1>

      <p class="text-lg md:text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
        WPLMS is the most modern Learning management system for Web.
      </p>

      <button
        class="bg-[#ffae29] hover:bg-[#e69a26] text-white px-8 py-3 text-md font-semibold rounded transition-colors"
      >
        GET YOUR APP
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
// No reactive state needed for this component
</script>

<style scoped></style>
