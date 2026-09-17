<template>
  <main>
    <ProgrammesHero />
    <ProgrammesGrid />
    <ProgrammesCTA />
  </main>
</template>

<script setup>
import ProgrammesHero from "@/components/ProgrammesHero.vue";
import ProgrammesGrid from "@/components/ProgrammesGrid.vue";
import ProgrammesCTA from "@/components/ProgrammesCTA.vue";
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
