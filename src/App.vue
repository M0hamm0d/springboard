<script setup>
import { RouterView } from "vue-router";
import HeaderNav from "./components/HeaderNav.vue";
import FooterSection from "./components/FooterSection.vue";
</script>

<template>
  <HeaderNav />
  <!--
    Page transition between routes:
      - "out-in" -> old page fades out first, new page fades in after
      - leave is a quick 0.18s fade; enter is a 0.45s fade + upward drift
      - easing matches the v-reveal scroll animations (0.16, 1, 0.3, 1)
  -->
  <RouterView v-slot="{ Component }">
    <Transition name="page" mode="out-in">
      <component :is="Component" :key="$route.fullPath" />
    </Transition>
  </RouterView>
  <FooterSection />
</template>

<style scoped></style>
