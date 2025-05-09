<template>
  <article
      ref="card"
      class="flex flex-col items-center text-center gap-4
           rounded-lg border border-gray-100 bg-white p-6
           dark:border-[#242334] dark:bg-[#242334]
           transform transition-transform duration-200 ease-out
           hover:scale-105 hover:shadow-lg">
    <span
        class="rounded-full bg-[#858ea8] p-3"
    >
      <slot name="icon">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"
             stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round"
                d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"/>
        </svg>
      </slot>
    </span>
    <div>
      <p class="text-2xl font-medium text-[#ebdea2]">{{ displayValue }}</p>
      <p class="text-sm text-[#f4edcc]">{{ label }}</p>
    </div>
  </article>
</template>

<script>
export default {
  name: 'StatsCard',
  props: {
    value: {
      type: Number,
      required: true
    },
    label: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      displayValue: 0,
      observer: null
    }
  },
  methods: {
    startCount() {
      const duration = 2000; // 2 seconds
      const start = performance.now();
      const initial = 0;
      const change = this.value - initial;
      const animate = (now) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        this.displayValue = Math.floor(initial + change * progress);
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  },
  mounted() {
    // Only start counting when in viewport
    this.observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            this.startCount();
            this.observer.disconnect();
          }
        },
        {threshold: 0.5}
    );
    this.observer.observe(this.$refs.card);
  },
  beforeUnmount() {
    if (this.observer) this.observer.disconnect();
  }
}
</script>

<style scoped>
/* No extra styles */
</style>
