<template>
  <main>
    <template v-if="programme">
      <ProgrammeDetailHero :programme="programme" />
      <ProgrammeDetailContent :programme="programme" />
      <ProgrammeDetailFaqCta :programme="programme" />
    </template>
  </main>
</template>

<script setup>
import { watch, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getProgrammeBySlug } from "@/data/programmes";
import ProgrammeDetailHero from "@/components/ProgrammeDetailHero.vue";
import ProgrammeDetailContent from "@/components/ProgrammeDetailContent.vue";
import ProgrammeDetailFaqCta from "@/components/ProgrammeDetailFaqCta.vue";

const route = useRoute();
const router = useRouter();

const programme = computed(() => getProgrammeBySlug(route.params.slug));

// Unknown slugs redirect to the programmes index
watch(
  () => route.params.slug,
  (slug) => {
    if (!getProgrammeBySlug(slug)) {
      router.replace({ name: "programmes" });
    }
  },
  { immediate: true }
);
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
