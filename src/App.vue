<script setup>
import { RouterView } from "vue-router";
import HeaderNav from "./components/HeaderNav.vue";
import FooterSection from "./components/FooterSection.vue";
</script>

<template>
  <HeaderNav />
  <RouterView />
  <FooterSection />
</template>

<style scoped></style>
