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

    <!-- 3) Stats Section: slides up over the sticky hero -->
    <section class="relative z-20 bg-[#35344b] border-t-[4px] border-[#ebdea2] pt-16 p-6">
      <!-- Transparent shadow overlay -->
      <img
          :src="shadowImg"
          alt="shadow overlay"
          class="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none z-10"
      />

      <!-- Content above overlay -->
      <div class="relative z-20">
        <StatsOverview />
      </div>
    </section>
  </div>
</template>

<script>
import Header from './Header.vue'
import StatsOverview from './StatsOverview.vue'
import videoSrc from '../assets/landing.mp4'
import shadowImg from '../assets/thunders.png'

export default {
  name: 'HelloWorld',
  components: { Header, StatsOverview },
  data() {
    return {
      videoSrc,
      shadowImg
    }
  }
}
</script>

<style scoped>
/* no additional styles needed */
</style>
