<template>
  <div class="relative w-full h-[90vh] overflow-hidden">
    <!-- full-screen background video -->
    <video
        autoplay
        muted
        loop
        class="absolute w-full h-[90vh] object-fill"
    >
      <source src="/src/assets/landing.mp4" type="video/mp4" />
      <!-- fallback text if video fails -->
      Your browser doesn’t support HTML5 video.
    </video>

    <!-- fixed header sits on top -->
    <Header />
  </div>
</template>

<script>
import Header from './Header.vue'

export default {
  name: 'HelloWorld',
  components: { Header }
}
</script>

<style scoped>
/* Tailwind’s object-cover does the work; nothing else needed */
</style>
