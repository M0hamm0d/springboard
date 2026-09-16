<template>
  <section class="programmes-section">
    <div class="programmes-container">
      <!-- Section Header -->
      <div v-reveal class="section-header">
        <span class="header-tag">Academic Pathways</span>
        <h2 class="section-title">Your Journey. Your Level. Your Future.</h2>
        <p class="section-subtitle">
          Structured exam preparation designed around each milestone of the
          ATSWA and ICAN qualification syllabus.
        </p>
      </div>

      <!-- 6 Programmes Grid (3 cols x 2 rows) -->
      <div class="programmes-grid">
        <div
          v-for="(prog, index) in programmes"
          :key="index"
          v-reveal="{ delay: (index % 3) * 120 + Math.floor(index / 3) * 200 }"
          class="programme-card"
        >
          <!-- Card Icon Badge with Soft Accent Disc -->
          <div class="icon-wrapper">
            <span class="icon-disc"></span>
            <div class="icon-symbol" v-html="prog.icon"></div>
          </div>

          <!-- Programme Meta Tag -->
          <span class="programme-category">{{ prog.category }}</span>

          <!-- Card Content -->
          <h3 class="programme-title">{{ prog.title }}</h3>
          <p class="programme-desc">{{ prog.description }}</p>

          <!-- Action Link -->
          <a
            href="#"
            class="learn-more-link"
            @click.prevent="openProgramme(prog.title)"
          >
            <span>Learn More</span>
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
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProgrammesSection",
  data() {
    return {
      programmes: [
        {
          category: "ATSWA Stage 1",
          title: "ATS I",
          description:
            "Build your foundation in accounting and begin your professional journey.",
          icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0A192F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 6h10"/></svg>`,
        },
        {
          category: "ATSWA Stage 2",
          title: "ATS II",
          description:
            "Develop your accounting knowledge and progress toward professional qualification.",
          icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0A192F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
        },
        {
          category: "ATSWA Stage 3",
          title: "ATS III",
          description:
            "Advance your technical knowledge and prepare for the next stage.",
          icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0A192F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
        },
        {
          category: "ICAN Stage 1",
          title: "FOUNDATION",
          description:
            "Start your ICAN journey with a strong academic foundation.",
          icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0A192F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="m9 8 6 4-6 4Z"/></svg>`,
        },
        {
          category: "ICAN Stage 2",
          title: "SKILLS",
          description:
            "Develop the practical knowledge and skills needed for professional success.",
          icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0A192F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>`,
        },
        {
          category: "Final Stage",
          title: "PROFESSIONAL",
          description:
            "Prepare for the professional level with focused tuition and experienced guidance.",
          icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0A192F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>`,
        },
      ],
    };
  },
  methods: {
    openProgramme(title) {
      console.log("Navigate to programme details:", title);
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Plus+Jakarta+Sans:wght@500;600;700&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.programmes-section {
  width: 100%;
  background-color: #faf8f5;
  padding: 96px 24px 104px;
  font-family: "Plus Jakarta Sans", sans-serif;
  color: #1f2937;
}

.programmes-container {
  max-width: 1200px;
  margin: 0 auto;
}

/* ================= SECTION HEADER ================= */
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

/* ================= 6-CARD GRID ================= */
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
  position: relative;
}

.programme-card:hover {
  transform: translateY(-4px);
  border-color: #cbd5e1;
  box-shadow: 0 12px 28px -8px rgba(10, 25, 47, 0.08);
}

/* --- Icon with Offset Soft Disc (Reference Image Style) --- */
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
}

.icon-symbol {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* --- Card Details --- */
.programme-category {
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #64748b;
  margin-bottom: 6px;
}

.programme-title {
  font-family: "Plus Jakarta Sans", sans-serif;
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

/* --- CTA Action Link --- */
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

.learn-more-link:hover {
  color: #1e3a8a;
}

.programme-card:hover .learn-more-link {
  color: #1e3a8a;
}

.programme-card:hover .arrow-icon {
  transform: translateX(4px);
}

/* ================= RESPONSIVE ================= */
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
