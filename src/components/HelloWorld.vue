<template>
  <div>
    <!-- 1) Sticky Hero + Header -->
    <div class="sticky top-0 z-0 h-[90vh] bg-[#35344b] overflow-hidden">
      <video
          autoplay
          muted
          loop
          playsinline
          :src="videoSrc"
          class="absolute inset-0 w-full h-full object-cover"
      ></video>
      <Header class="relative z-10" />
    </div>

    <!-- 2) Stats Section: slides up over the sticky hero -->
    <section
        class="relative z-20 bg-[#35344b] border-t-[4px] border-[#ebdea2] pt-16 p-6"
    >
      <StatsOverview />
    </section>
  </div>
</template>

<script>
import Header from './Header.vue'
import StatsOverview from './StatsOverview.vue'
// point to your MP4 in src/assets
import videoSrc from '../assets/landing.mp4'

export default {
  name: 'HelloWorld',
  components: { Header, StatsOverview },
  data() {
    return { videoSrc }
  }
}
</script>

<style scoped>
/* nothing else needed */
</style>
