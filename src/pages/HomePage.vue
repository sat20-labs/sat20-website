<template>
  <div class="home-page">
    <HeroSection />
    <CoreFeatures />
    <SatoshiNet />
    <Ecosystem />
    <!-- <DynamicStats /> -->
    <Developers />
    <!-- <Roadmap /> -->
    <Partners />
    <!-- <CallToAction /> -->
  </div>
</template>

<script setup>
import HeroSection from '@/components/sections/HeroSection.vue';
import CoreFeatures from '@/components/sections/CoreFeatures.vue';
import SatoshiNet from '@/components/sections/SatoshiNet.vue';
import Ecosystem from '@/components/sections/Ecosystem.vue';
import CallToAction from '@/components/sections/CallToAction.vue';
import DynamicStats from '@/components/sections/DynamicStats.vue';
import Roadmap from '@/components/sections/Roadmap.vue';
import Partners from '@/components/sections/Partners.vue';
import Developers from '@/components/sections/Developers.vue';
</script>

<style scoped>
.home-page {
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
}
</style>