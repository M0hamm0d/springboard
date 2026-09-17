<template>
  <section id="programmes" class="programmes-section">
    <div class="programmes-container">
      <!-- Section Header -->
      <div v-reveal class="section-header">
        <span class="header-tag">Academic Pathways</span>
        <h2 class="section-title">Every Stage. One Centre.</h2>
        <p class="section-subtitle">
          Three ATSWA levels and three Professional levels — each with its own
          structured tuition, mocks and materials.
        </p>
      </div>

      <!-- 6 Programme Cards -->
      <div class="programmes-grid">
        <div
          v-for="(prog, index) in programmes"
          :key="prog.slug"
          v-reveal="{ delay: (index % 3) * 120 + Math.floor(index / 3) * 200 }"
          class="programme-card"
        >
          <!-- Icon with Offset Soft Disc -->
          <div class="icon-wrapper">
            <span class="icon-disc"></span>
            <div class="icon-symbol" v-html="prog.icon"></div>
          </div>

          <span class="programme-category">{{ prog.category }}</span>
          <h3 class="programme-title">{{ prog.name }}</h3>
          <p class="programme-desc">{{ prog.whoFor }}</p>

          <!-- Action Link: real router link to the detail page -->
          <router-link :to="`/programmes/${prog.slug}`" class="learn-more-link">
            <span>View Programme</span>
            <svg
              class="arrow-icon"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { programmes } from "@/data/programmes";

// Card icons per programme (kept here so the data module stays UI-agnostic)
const icons = {
  "ats-1": `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0A192F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 6h10"/></svg>`,
  "ats-2": `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0A192F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
  "ats-3": `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0A192F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  foundation: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0A192F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="m9 8 6 4-6 4Z"/></svg>`,
  skills: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0A192F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>`,
  professional: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0A192F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>`,
};

export default {
  name: "ProgrammesGrid",
  data() {
    return {
      programmes: programmes.map((p) => ({ ...p, icon: icons[p.slug] })),
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=DM+Sans:wght@500;600;700&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.programmes-section {
  width: 100%;
  background-color: #faf8f5;
  padding: 96px 24px 104px;
  font-family: "DM Sans", "DM Sans Fallback", "DM Sans", system-ui, sans-serif;
  color: #1f2937;
}

.programmes-container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  max-width: 680px;
  margin: 0 auto 56px;
}

.header-tag {
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #1e3a8a;
  background-color: #ffffff;
  border: 1px solid #e9dfce;
  padding: 5px 14px;
  border-radius: 999px;
  margin-bottom: 14px;
}

.section-title {
  font-family: "Cormorant Garamond", Georgia, serif;
  font-size: 44px;
  font-weight: 700;
  color: #0a192f;
  letter-spacing: -0.02em;
  line-height: 1.15;
  margin-bottom: 14px;
}

.section-subtitle {
  font-size: 15px;
  line-height: 1.6;
  color: #4b5563;
}

.programmes-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.programme-card {
  background-color: #ffffff;
  border: 1px solid #e9dfce;
  border-radius: 16px;
  padding: 36px 28px 32px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    border-color 0.2s ease;
}

.programme-card:hover {
  transform: translateY(-4px);
  border-color: #cbd5e1;
  box-shadow: 0 12px 28px -8px rgba(10, 25, 47, 0.08);
}

.icon-wrapper {
  position: relative;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 22px;
}

.icon-disc {
  position: absolute;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background-color: #f5e6c8;
  top: -4px;
  right: -6px;
  z-index: 1;
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.programme-card:hover .icon-disc {
  transform: scale(1.2);
}

.icon-symbol {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
}

.programme-card:hover .icon-symbol {
  transform: translateY(-2px);
}

.programme-category {
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #64748b;
  margin-bottom: 6px;
}

.programme-title {
  font-size: 20px;
  font-weight: 700;
  color: #0a192f;
  letter-spacing: -0.01em;
  margin-bottom: 12px;
}

.programme-desc {
  font-size: 14px;
  line-height: 1.6;
  color: #4b5563;
  margin-bottom: 28px;
  flex-grow: 1;
}

.learn-more-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  font-weight: 700;
  color: #0a192f;
  text-decoration: none;
  transition:
    gap 0.2s ease,
    color 0.2s ease;
}

.arrow-icon {
  transition: transform 0.2s ease;
}

.programme-card:hover .learn-more-link {
  color: #1e3a8a;
}

.programme-card:hover .arrow-icon {
  transform: translateX(4px);
}

@media (prefers-reduced-motion: reduce) {
  .programme-card,
  .icon-disc,
  .icon-symbol,
  .arrow-icon {
    transition: none;
  }
}

@media (max-width: 992px) {
  .programmes-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  .section-title {
    font-size: 38px;
  }
}

@media (max-width: 640px) {
  .programmes-grid {
    grid-template-columns: 1fr;
  }

  .programmes-section {
    padding: 64px 20px 72px;
  }

  .section-title {
    font-size: 32px;
  }
}
</style>
