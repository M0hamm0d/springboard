<template>
  <section class="trust-strip">
    <div class="trust-container">
      <!-- Overline Label matching reference layout -->
      <p v-reveal class="trust-label">Why Candidates Choose Springboard SATC</p>

      <!-- Credibility Items Row -->
      <div class="trust-grid">
        <!-- Item 1 -->
        <div v-reveal="{ delay: 100 }" class="trust-item">
          <div class="trust-icon-box">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
          </div>
          <div class="trust-text">
            <strong class="trust-title">ICAN Accredited</strong>
            <span class="trust-desc">Recognized Tuition Centre</span>
          </div>
        </div>

        <div class="divider"></div>

        <!-- Item 2 -->
        <div v-reveal="{ delay: 200 }" class="trust-item">
          <div class="trust-icon-box">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"
              />
              <path d="M6 6h10" />
              <path d="M6 10h10" />
            </svg>
          </div>
          <div class="trust-text">
            <strong class="trust-title">FCA & ACA Faculty</strong>
            <span class="trust-desc">Seasoned Industry Leaders</span>
          </div>
        </div>

        <div class="divider"></div>

        <!-- Item 3 -->
        <div v-reveal="{ delay: 300 }" class="trust-item">
          <div class="trust-icon-box">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect width="20" height="14" x="2" y="3" rx="2" />
              <line x1="8" x2="16" y1="21" y2="21" />
              <line x1="12" x2="12" y1="17" y2="21" />
            </svg>
          </div>
          <div class="trust-text">
            <strong class="trust-title">Dual-Mode Delivery</strong>
            <span class="trust-desc">Physical & Virtual Classes</span>
          </div>
        </div>

        <div class="divider"></div>

        <!-- Item 4 -->
        <div v-reveal="{ delay: 400 }" class="trust-item">
          <div class="trust-icon-box">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="8" r="6" />
              <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
            </svg>
          </div>
          <div class="trust-text">
            <strong class="trust-title">Proven Track Record</strong>
            <span class="trust-desc">National Prize Winners</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "TrustStrip",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@500;600;700&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.trust-strip {
  width: 100%;
  background-color: #faf8f5;
  border-top: 1px solid #e9dfce;
  border-bottom: 1px solid #e9dfce;
  padding: 32px 24px 36px;
  font-family: "DM Sans", "DM Sans Fallback", "DM Sans", system-ui, sans-serif;
}

.trust-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Centered Overline (similar to "40+ partner have put their trust in us") */
.trust-label {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #64748b;
  margin-bottom: 24px;
  text-align: center;
}

/* Credibility Items Container */
.trust-grid {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.trust-item {
  display: flex;
  align-items: center;
  gap: 14px;
  flex: 1;
  justify-content: center;
  transition: transform 0.25s ease;
}

.trust-item:hover {
  transform: translateY(-3px);
}

.trust-icon-box {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background-color: #f5e6c8;
  color: #0a192f;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border: 1px solid #e9dfce;
}

.trust-text {
  display: flex;
  flex-direction: column;
}

.trust-title {
  font-size: 14px;
  font-weight: 700;
  color: #0a192f;
  letter-spacing: -0.01em;
  line-height: 1.25;
}

.trust-desc {
  font-size: 12px;
  color: #64748b;
  margin-top: 2px;
  font-weight: 500;
}

/* Vertical Divider Lines */
.divider {
  width: 1px;
  height: 36px;
  background-color: #e2e8f0;
  flex-shrink: 0;
}

/* Responsive Handling */
@media (max-width: 960px) {
  .trust-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px 16px;
  }

  .divider {
    display: none;
  }

  .trust-item {
    justify-content: flex-start;
  }
}

@media (max-width: 540px) {
  .trust-grid {
    grid-template-columns: 1fr;
    gap: 18px;
  }

  .trust-strip {
    padding: 28px 20px;
  }
}
</style>
