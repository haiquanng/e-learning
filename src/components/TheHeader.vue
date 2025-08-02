<template>
  <header
    :class="`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`"
  >
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <!-- Logo - 1st -->
        <div class="flex items-center">
          <img src="/logo.png" alt="Learning Center" class="h-12" />
        </div>

        <!-- Navigation + Search Group - 2nd -->
        <div class="hidden md:flex items-center space-x-8 mr-8">
          <!-- Desktop Navigation -->
          <nav class="flex space-x-6">
            <div v-for="item in navigation" :key="item.id" class="relative group">
              <a
                :href="item.href"
                :class="`px-3 py-2 text-sm font-medium flex items-center transition-colors ${
                  isScrolled
                    ? 'text-gray-900 hover:text-[#ffae29]'
                    : 'text-white hover:text-[#ffae29]'
                }`"
              >
                <strong>{{ item.label }}</strong>
              </a>
              <div
                v-if="item.children"
                class="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
              >
                <a
                  v-for="child in item.children"
                  :key="child.id"
                  :href="child.href"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#ffae29]"
                >
                  {{ child.label }}
                </a>
              </div>
            </div>
          </nav>

          <!-- Search in the same group -->
          <button
            :class="`ml-4 cursor-pointer transition-colors ${
              isScrolled ? 'text-gray-900 hover:text-[#ffae29]' : 'text-white hover:text-[#ffae29]'
            }`"
          >
            <Search class="h-5 w-5" />
          </button>
        </div>

        <!-- Login + Cart Group - Right -->
        <div class="flex items-center space-x-4">
          <div class="hidden md:flex items-center space-x-4">
            <a
              :href="'#login'"
              :class="`text-sm font-medium transition-colors ${
                isScrolled
                  ? 'text-gray-900 hover:text-[#ffae29]'
                  : 'text-white hover:text-[#ffae29]'
              }`"
            >
              <span>LOGIN</span>
            </a>
            <button
              :class="`relative cursor-pointer transition-colors ${
                isScrolled
                  ? 'text-gray-900 hover:text-[#ffae29]'
                  : 'text-white hover:text-[#ffae29]'
              }`"
            >
              <ShoppingCart class="h-5 w-5" />
              <span
                class="absolute -top-2 -right-2 bg-[#ffae29] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
              >
                0
              </span>
            </button>
          </div>

          <!-- Mobile menu button -->
          <button
            @click="isOpen = !isOpen"
            :class="`md:hidden transition-colors ${
              isScrolled ? 'text-gray-900 hover:text-[#ffae29]' : 'text-white hover:text-[#ffae29]'
            }`"
          >
            <X v-if="isOpen" class="h-6 w-6" />
            <Menu v-else class="h-6 w-6" />
          </button>
        </div>
      </div>

      <!-- Mobile Navigation - Slide from right -->
      <div
        :class="`md:hidden fixed top-0 right-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`"
      >
        <div class="flex flex-col h-full">
          <!-- Mobile header -->
          <div class="flex items-center justify-between p-4 border-b bg-red-500">
            <span class="text-white font-bold text-lg">Menu</span>
            <button @click="isOpen = false" class="text-white hover:text-[#ffae29]">
              <X class="h-6 w-6" />
            </button>
          </div>

          <!-- Mobile navigation links -->
          <div class="flex-1 overflow-y-auto">
            <div class="px-4 py-6 space-y-4">
              <a
                v-for="item in navigation"
                :key="item.id"
                :href="item.href"
                class="block text-gray-700 hover:text-[#ffae29] py-3 text-lg font-medium border-b border-gray-100 transition-colors duration-200"
                @click="isOpen = false"
              >
                {{ item.label }}
              </a>

              <!-- Search bar in mobile -->
              <div class="pt-4 border-t border-gray-200">
                <div class="flex items-center space-x-2 bg-gray-100 rounded-lg px-4 py-3">
                  <Search class="h-5 w-5 text-gray-500" />
                  <input
                    type="text"
                    placeholder="Search..."
                    class="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-500"
                  />
                </div>
              </div>

              <!-- Login link in mobile -->
              <div class="pt-4">
                <a
                  href="#login"
                  class="block text-gray-700 hover:text-[#ffae29] py-3 text-lg font-medium transition-colors duration-200"
                  @click="isOpen = false"
                >
                  LOGIN
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile overlay -->
      <div
        v-if="isOpen"
        class="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
        @click="isOpen = false"
      />
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Menu, X, Search, ShoppingCart } from 'lucide-vue-next'
import { navigation } from '@/data/mockData'

const isOpen = ref(false)
const isScrolled = ref(false)

const handleScroll = () => {
  const scrollTop = window.scrollY
  isScrolled.value = scrollTop > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped></style>
