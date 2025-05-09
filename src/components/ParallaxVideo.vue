<template>
  <div ref="wrapper" :style="{ height }" class="relative w-full overflow-hidden">
    <video
        :src="src"
        autoplay
        muted
        loop
        playsinline
        class="absolute inset-0 w-full h-auto min-h-full object-cover will-change-transform"
        :style="{ transform: `translateY(${offset}px)` }"
    ></video>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'ParallaxVideo',
  props: {
    src: { type: String, required: true },
    speed: { type: Number, default: 0.3 },
    height: { type: String, default: '50vh' }
  },
  setup(props) {
    const wrapper = ref(null)
    const offset = ref(0)

    const onScroll = () => {
      if (!wrapper.value) return
      const rect = wrapper.value.getBoundingClientRect()
      offset.value = -rect.top * props.speed
    }

    onMounted(() => {
      window.addEventListener('scroll', onScroll, { passive: true })
      onScroll()
    })
    onUnmounted(() => {
      window.removeEventListener('scroll', onScroll)
    })

    return { wrapper, offset }
  }
}
</script>

<style scoped>
/* no extra CSS needed */
</style>
