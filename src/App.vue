<script setup lang="ts">
import TheHeader from './components/TheHeader.vue'
import HeroSection from './components/HeroSection.vue'
import AppFeature from './components/AppFeature.vue'
import CourseSection from './components/CourseSection.vue'
import DeviceSection from './components/DeviceSection.vue'
import TestimonialSection from './components/TestimonialSection.vue'
import BrandSection from './components/BrandSection.vue'
import CallForAction from './components/CallForAction.vue'
import TheFooter from './components/TheFooter.vue'
import ScrollToTop from './components/common/ScrollToTop.vue'
</script>

<template>
  <div class="min-h-screen bg-white App">
    <TheHeader />
    <div class="bg-gray-100 min-h-[650px] lg:mb-[320px] md:mb-[600px] mb-[720px]">
      <HeroSection />
      <AppFeature />
      <DeviceSection />
      <CourseSection />
      <BrandSection />
      <TestimonialSection />
      <CallForAction />
    </div>
    <TheFooter />
    <ScrollToTop />
  </div>
</template>

<style scoped></style>
