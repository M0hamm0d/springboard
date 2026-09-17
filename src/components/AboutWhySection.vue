<template>
  <section class="why-section">
    <div class="why-container">
      <!-- Section Header -->
      <div class="why-header">
        <span v-reveal class="why-pill">Why Springboard</span>
        <h2 v-reveal="{ delay: 100 }" class="why-headline">
          The Springboard <span>Difference</span>
        </h2>
        <p v-reveal="{ delay: 200 }" class="why-subtitle">
          Five reasons candidates across North Central Nigeria choose us — and
          stay until they're chartered.
        </p>
      </div>

      <!-- Reasons Grid (data-driven) -->
      <div class="why-grid">
        <div
          v-for="(reason, index) in reasons"
          :key="reason.title"
          v-reveal="{ delay: (index % 3) * 120 + Math.floor(index / 3) * 200 }"
          class="reason-card"
        >
          <div class="icon-wrapper">
            <span class="icon-disc"></span>
            <div class="icon-symbol" v-html="reason.icon"></div>
          </div>
          <h3 class="reason-title">{{ reason.title }}</h3>
          <p class="reason-desc">{{ reason.desc }}</p>
        </div>

        <!-- Highlight Card (Navy) -->
        <div v-reveal="{ delay: 240 }" class="reason-card highlight-card">
          <span class="highlight-tag">From First Registration to Certification</span>
          <p class="highlight-text">
            We walk with you through every diet — lectures, study packs, mock
            exams, registration, and results.
          </p>
          <button class="btn-highlight" @click="handleProgrammes">
            View Our Programmes
            <svg
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
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutWhySection",
  data() {
    return {
      reasons: [
        {
          title: "ICAN-Accredited Tuition Centre",
          desc: "Fully recognized by the Institute of Chartered Accountants of Nigeria — your diet counts, from day one.",
          icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0A192F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>`,
        },
        {
          title: "Experienced, Qualified Tutors",
          desc: "FCA and ACA faculty with real industry depth, teaching the syllabus with exam discipline.",
          icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0A192F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 6h10"/></svg>`,
        },
        {
          title: "Physical & Online Classes",
          desc: "Weekend, weekday, and virtual lectures built around working professionals and full-time students alike.",
          icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0A192F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>`,
        },
        {
          title: "Proven Exam Results",
          desc: "National prize winners and a track record of students clearing their diets decisively.",
          icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0A192F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
        },
        {
          title: "Support From Start to Finish",
          desc: "Ongoing guidance from your first ATS registration through to full ICAN certification.",
          icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0A192F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
        },
      ],
    };
  },
  methods: {
    handleProgrammes() {
      this.$router.push("/programmes");
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;1,400;1,600&family=DM+Sans:wght@400;500;600;700&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.why-section {
  width: 100%;
  background-color: #ffffff;
  padding: 88px 24px 96px;
  font-family: "DM Sans", "DM Sans Fallback", "DM Sans", system-ui, sans-serif;
  color: #1f2937;
}

.why-container {
  max-width: 1200px;
  margin: 0 auto;
}

/* ================= SECTION HEADER ================= */
.why-header {
  text-align: center;
  max-width: 680px;
  margin: 0 auto 56px;
}

.why-pill {
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #1e3a8a;
  background-color: #faf8f5;
  border: 1px solid #e9dfce;
  padding: 5px 14px;
  border-radius: 999px;
  margin-bottom: 14px;
}

.why-headline {
  font-family: "Cormorant Garamond", Georgia, serif;
  font-size: 44px;
  font-weight: 700;
  color: #0a192f;
  letter-spacing: -0.02em;
  line-height: 1.15;
  margin-bottom: 14px;
}

.why-headline span {
  font-style: italic;
  font-weight: 400;
  color: #1e3a8a;
}

.why-subtitle {
  font-size: 15px;
  line-height: 1.6;
  color: #4b5563;
}

/* ================= REASONS GRID ================= */
.why-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.reason-card {
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

.reason-card:hover {
  transform: translateY(-4px);
  border-color: #cbd5e1;
  box-shadow: 0 12px 28px -8px rgba(10, 25, 47, 0.08);
}

/* --- Icon with Offset Soft Disc (same as HomeProgramSection) --- */
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
  transition:
    transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1),
    background-color 0.3s ease;
}

/* Disc swells behind the glyph as the card is entered */
.reason-card:hover .icon-disc {
  transform: scale(1.2);
  background-color: #ede0bf;
}

.icon-symbol {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
}

.reason-card:hover .icon-symbol {
  transform: translateY(-2px);
}

.reason-title {
  font-size: 18px;
  font-weight: 700;
  color: #0a192f;
  letter-spacing: -0.01em;
  margin-bottom: 10px;
  line-height: 1.3;
}

.reason-desc {
  font-size: 14px;
  line-height: 1.6;
  color: #4b5563;
}

/* ================= HIGHLIGHT CARD (Navy) ================= */
.highlight-card {
  background-color: #0a192f;
  border: 1px solid #172e4d;
  justify-content: center;
  gap: 14px;
}

.highlight-tag {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #f5e6c8;
  line-height: 1.6;
}

.highlight-text {
  font-family: "Cormorant Garamond", Georgia, serif;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.35;
  color: #ffffff;
  flex-grow: 1;
}

.btn-highlight {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background-color: #f5e6c8;
  color: #0a192f;
  border: 1px solid #e9dfce;
  font-family: "DM Sans", "DM Sans Fallback", "DM Sans", system-ui, sans-serif;
  font-size: 13px;
  font-weight: 700;
  padding: 12px 22px;
  border-radius: 8px;
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    transform 0.2s ease;
}

.btn-highlight:hover {
  background-color: #ede0bf;
  transform: translateY(-1px);
}

.btn-highlight svg {
  transition: transform 0.2s ease;
}

.btn-highlight:hover svg {
  transform: translateX(4px);
}

/* ================= RESPONSIVE ================= */
@media (prefers-reduced-motion: reduce) {
  .reason-card,
  .icon-disc,
  .icon-symbol,
  .btn-highlight,
  .btn-highlight svg {
    transition: none;
  }
}

@media (max-width: 992px) {
  .why-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  .why-headline {
    font-size: 38px;
  }
}

@media (max-width: 640px) {
  .why-grid {
    grid-template-columns: 1fr;
  }

  .why-section {
    padding: 64px 20px 72px;
  }

  .why-headline {
    font-size: 32px;
  }
}
</style>
