<template>
  <section>
    <h2 class="text-4xl font-[_'MedievalSharp',serif] mb-6 text-[#E6C21B] text-center">Server Statistics</h2>
    <!-- Stats Grid -->
    <div
        class="max-w-screen-lg mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 font-[_'MedievalSharp',serif]">
      <StatsCard value="240" label="Accounts">
        <template #icon>
          <img
              src="../assets/account.png"
              alt="Accounts icon"
              class="w-8 h-8 object-contain"
          />
        </template>
      </StatsCard>
      <StatsCard value="150" label="Online Players">
        <template #icon>
          <img
              src="../assets/online.png"
              alt="Online icon"
              class="w-8 h-8 object-contain"
          />
        </template>
      </StatsCard>
      <StatsCard value="853" label="Characters">
        <template #icon>
          <img
              src="../assets/character.png"
              alt="Characters icon"
              class="w-8 h-8 object-contain"
          />
        </template>
      </StatsCard>
      <StatsCard value="320" label="Offline Shops">
        <template #icon>
          <img
              src="../assets/shop.png"
              alt="Shops icon"
              class="w-8 h-8 object-contain"
          />
        </template>
      </StatsCard>
      <StatsCard value="178" label="Guilds">
        <template #icon>
          <img
              src="../assets/guild.png"
              alt="Guild icon"
              class="w-8 h-8 object-contain"
          />
        </template>
      </StatsCard>
      <StatsCard value="1240" label="Closed Tickets">
        <template #icon>
          <img
              src="../assets/ticket.png"
              alt="Ticket icon"
              class="w-8 h-8 object-contain"
          />
        </template>
      </StatsCard>

    </div>
  </section>
</template>

<script>
import StatsCard from './StatsCard.vue'

export default {
  name: 'StatsOverview',
  components: {StatsCard}
}
</script>
