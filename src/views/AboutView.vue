<template>
  <main>
    <AboutHero />
    <AboutStorySection />
    <AboutTrackRecordSection />
    <AboutWhySection />
    <AboutCTASection />
  </main>
</template>

<script setup>
import AboutHero from "@/components/AboutHero.vue";
import AboutStorySection from "@/components/AboutStorySection.vue";
import AboutTrackRecordSection from "@/components/AboutTrackRecordSection.vue";
import AboutWhySection from "@/components/AboutWhySection.vue";
import AboutCTASection from "@/components/AboutCTASection.vue";
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}
</style>
