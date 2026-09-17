<template>
  <section class="achievements-section">
    <div class="achievements-container">
      <!-- Top Row: Split Title & Header CTA (Matches Reference) -->
      <div v-reveal class="achievements-header">
        <div class="header-left">
          <span class="achievements-tag">Validated Impact</span>
          <h2 class="achievements-title">A Track Record Built on Results</h2>
          <p class="achievements-subtitle">
            Our students have won several national prizes, reflecting our
            commitment to academic and professional excellence.
          </p>
        </div>

        <div class="header-right">
          <button class="btn-achievements-cta" @click="handleAction">
            View Merit List
          </button>
        </div>
      </div>

      <!-- Bottom Row: 4 Metric Cards Shelf -->
      <div class="metrics-grid">
        <!-- Card 1: AATs -->
        <div v-reveal="{ delay: 100 }" class="metric-card">
          <div class="metric-icon-box">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#F5E6C8"
              stroke-width="1.75"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
          <div class="metric-body">
            <span class="metric-number">XXXX+</span>
            <span class="metric-label">AATs Produced</span>
          </div>
        </div>

        <!-- Card 2: ACAs -->
        <div v-reveal="{ delay: 200 }" class="metric-card">
          <div class="metric-icon-box">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#F5E6C8"
              stroke-width="1.75"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              <path d="M6 12v5c3 3 9 3 12 0v-5" />
            </svg>
          </div>
          <div class="metric-body">
            <span class="metric-number">XXXX+</span>
            <span class="metric-label">ACAs Produced</span>
          </div>
        </div>

        <!-- Card 3: Years -->
        <div v-reveal="{ delay: 300 }" class="metric-card">
          <div class="metric-icon-box">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#F5E6C8"
              stroke-width="1.75"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
          </div>
          <div class="metric-body">
            <span class="metric-number">XX+</span>
            <span class="metric-label">Years of Excellence</span>
          </div>
        </div>

        <!-- Card 4: National Awards -->
        <div v-reveal="{ delay: 400 }" class="metric-card">
          <div class="metric-icon-box">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#F5E6C8"
              stroke-width="1.75"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="8" r="6" />
              <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
            </svg>
          </div>
          <div class="metric-body">
            <span class="metric-number">XX+</span>
            <span class="metric-label">National Awards & Prizes</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AchievementsSection",
  methods: {
    handleAction() {
      console.log("Navigate to prize winners / achievements archive");
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=DM+Sans:wght@400;500;600;700;800&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.achievements-section {
  width: 100%;
  background-color: #0a192f; /* Deep Navy institutional anchor */
  padding: 88px 24px 96px;
  font-family: "DM Sans", "DM Sans Fallback", "DM Sans", system-ui, sans-serif;
  color: #ffffff;
}

.achievements-container {
  max-width: 1200px;
  margin: 0 auto;
}

/* ================= SECTION HEADER ================= */
.achievements-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 48px;
  gap: 32px;
}

.header-left {
  max-width: 640px;
}

.achievements-tag {
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #f5e6c8;
  margin-bottom: 12px;
}

.achievements-title {
  font-family: "Cormorant Garamond", Georgia, serif;
  font-size: 46px;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #ffffff;
  line-height: 1.1;
  margin-bottom: 12px;
}

.achievements-subtitle {
  font-size: 15px;
  line-height: 1.6;
  color: #94a3b8;
}

/* Header Action Button (Clean contrast using Cream #F5E6C8) */
.btn-achievements-cta {
  background-color: #f5e6c8;
  color: #0a192f;
  border: 1px solid #e9dfce;
  font-size: 14px;
  font-weight: 700;
  padding: 12px 24px;
  border-radius: 6px;
  cursor: pointer;
  white-space: nowrap;
  transition:
    background-color 0.2s ease,
    transform 0.2s ease;
}

.btn-achievements-cta:hover {
  background-color: #ede0bf;
  transform: translateY(-1px);
}

/* ================= METRIC CARDS GRID ================= */
.metrics-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.metric-card {
  background-color: #0e223d; /* Slightly elevated navy surface */
  border: 1px solid #1a3459;
  border-radius: 12px;
  padding: 36px 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 230px;
  transition:
    transform 0.2s ease,
    border-color 0.2s ease;
}

.metric-card:hover {
  transform: translateY(-3px);
  border-color: #2e4e7e;
}

.metric-icon-box {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  margin-bottom: 24px;
}

.metric-body {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.metric-number {
  font-family: "DM Sans", "DM Sans Fallback", "DM Sans", system-ui, sans-serif;
  font-size: 44px;
  font-weight: 800;
  letter-spacing: -0.03em;
  color: #ffffff;
  line-height: 1;
}

.metric-label {
  font-size: 13px;
  font-weight: 600;
  color: #94a3b8;
  letter-spacing: 0.01em;
}

/* ================= RESPONSIVE ================= */
@media (max-width: 1024px) {
  .metrics-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .achievements-title {
    font-size: 38px;
  }
}

@media (max-width: 680px) {
  .achievements-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }

  .metrics-grid {
    grid-template-columns: 1fr;
  }

  .achievements-section {
    padding: 64px 20px 72px;
  }

  .achievements-title {
    font-size: 32px;
  }
}
</style>
