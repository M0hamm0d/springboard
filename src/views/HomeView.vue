<script setup>
import HeroSection from "@/components/HeroSection.vue";
import HomeAboutUsSection from "@/components/HomeAboutUsSection.vue";
import HomeCTA from "@/components/HomeCTA.vue";
import HomeProgramSection from "@/components/HomeProgramSection.vue";
import HomeStatSection from "@/components/HomeStatSection.vue";
import HomeTestimonial from "@/components/HomeTestimonial.vue";
import HomeTutorSection from "@/components/HomeTutorSection.vue";
import TrustStripe from "@/components/TrustStripe.vue";
</script>

<template>
  <main>
    <HeroSection />
    <TrustStripe />
    <HomeAboutUsSection />
    <HomeProgramSection />
    <HomeStatSection />
    <HomeTutorSection />
    <HomeTestimonial />
    <HomeCTA />
  </main>
</template>
<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}
</style>
