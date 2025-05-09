<template>
  <header class="fixed inset-x-0 top-0 w-full bg-[#35344b] opacity-90 z-50 font-medieval">
    <div class="max-w-screen-xl mx-auto px-4 lg:px-6 h-14 flex items-center justify-between overflow-visible">
      <!-- Logo -->
      <a href="/" class="flex-shrink-0 overflow-visible">
        <img :src="logo" class="h-32 w-auto" alt="Lumirath Logo" />
      </a>

      <!-- Nav Links -->
      <nav class="hidden lg:flex space-x-8 font-[_'MedievalSharp',serif] lg:text-lg">
        <a href="#" class="text-[#E6C21B] hover:text-[#ebdea2]">Home</a>
        <a href="#" class="text-[#E6C21B] hover:text-[#ebdea2]">Presentation</a>
        <a href="#" class="text-[#E6C21B] hover:text-[#ebdea2]">Download</a>
        <a href="#" class="text-[#E6C21B] hover:text-[#ebdea2]">Shop</a>
        <a href="#" class="text-[#E6C21B] hover:text-[#ebdea2]">Forum</a>
        <a href="#" class="text-[#E6C21B] hover:text-[#ebdea2]">Discord</a>
      </nav>

      <!-- Auth Buttons -->
      <div class="flex space-x-2  font-[_'MedievalSharp',serif] lg:text-lg">
        <a href="#" class="px-4 py-2 text-[#858ea8] bg-transparent rounded hover:bg-[#E6C21B] hover:text-[#35344b]">Log in</a>
        <a href="#" class="px-4 py-2 text-[#858ea8] bg-transparent rounded hover:bg-[#E6C21B] hover:text-[#35344b]">Sign Up</a>
      </div>
    </div>
  </header>
</template>

<script>
import logo from '../assets/lumirathlogo.png';

export default {
  name: 'Header',
  data() {
    return { logo };
  }
}
</script>

<style scoped>
/* nothing extra here */
</style>
