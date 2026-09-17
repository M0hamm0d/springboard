<template>
  <section class="track-section">
    <div class="track-container">
      <!-- Section Header Matching Reference Image -->
      <div v-reveal class="track-header">
        <span class="track-tag">TRUSTED BY CANDIDATES • PROVEN BY RESULTS</span>
        <h2 class="track-title">Numbers That Speak For Us</h2>
        <p class="track-subtitle">
          Behind every figure is a dedicated student who trusted Springboard
          Associates with their professional diet.
        </p>
      </div>

      <!-- Horizontal 4-Metric Shelf with Vertical Dividers -->
      <div class="metrics-shelf">
        <div
          v-for="(metric, index) in keyMetrics"
          :key="metric.label"
          v-reveal="{ delay: 100 + index * 120 }"
          class="metric-item"
        >
          <!-- Left Icon Box with soft accent disc -->
          <div class="metric-icon" v-html="metric.icon"></div>

          <!-- Number & Label Stack -->
          <div class="metric-info">
            <span class="metric-value" v-count-up="metric.countUp">
              {{ metric.number }}
            </span>
            <span class="metric-label">{{ metric.label }}</span>
          </div>

          <!-- Divider between items (hidden on last item) -->
          <div v-if="index < keyMetrics.length - 1" class="shelf-divider"></div>
        </div>
      </div>

      <!-- Institutional Credibility Bar (Matches Bottom Logo Strip in Reference) -->
      <div v-reveal="{ delay: 200 }" class="accreditation-strip">
        <span class="strip-label">Tuition Recognized By & Aligned With</span>
        <div class="partner-pills">
          <div class="inst-badge">
            <span class="badge-accent">ICAN</span>
            <span class="badge-name">Accredited Tuition Centre</span>
          </div>
          <div class="inst-badge">
            <span class="badge-accent">ATSWA</span>
            <span class="badge-name">West Africa Accounting Framework</span>
          </div>
          <div class="inst-badge">
            <span class="badge-accent">CITN</span>
            <span class="badge-name">Taxation Examination Syllabus</span>
          </div>
          <div class="inst-badge">
            <span class="badge-accent">ACCA</span>
            <span class="badge-name">Global Exemption Pathways</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutTrackRecordSection",
  data() {
    return {
      // Streamlined to the 4 most prestigious institutional metrics
      keyMetrics: [
        {
          number: "XXXX+",
          label: "Qualified ACAs Produced",
          countUp: {},
          icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1E3A8A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`,
        },
        {
          number: "XXXX+",
          label: "AATs Certified",
          countUp: {},
          icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1E3A8A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
        },
        {
          number: "XX+",
          label: "National Prize Winners",
          countUp: {},
          icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1E3A8A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>`,
        },
        {
          number: "XX+",
          label: "Years of Excellence",
          countUp: {},
          icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1E3A8A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
        },
      ],
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;0,9..40,800;1,9..40,400&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.track-section {
  width: 100%;
  background-color: #ffffff;
  padding: 72px 24px 80px;
  font-family: "DM Sans", "DM Sans Fallback", "DM Sans", system-ui, sans-serif;
  color: #1f2937;
  border-bottom: 1px solid #e9dfce;
}

.track-container {
  max-width: 1180px;
  margin: 0 auto;
}

/* ================= SECTION HEADER ================= */
.track-header {
  text-align: center;
  max-width: 640px;
  margin: 0 auto 48px;
}

.track-tag {
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #1e3a8a;
  margin-bottom: 10px;
}

.track-title {
  font-size: 38px;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #0a192f;
  line-height: 1.2;
  margin-bottom: 10px;
}

.track-subtitle {
  font-size: 14px;
  line-height: 1.6;
  color: #64748b;
}

/* ================= HORIZONTAL METRIC SHELF ================= */
.metrics-shelf {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #faf8f5; /* Warm background */
  border: 1px solid #e9dfce;
  border-radius: 16px;
  padding: 36px 32px;
  box-shadow: 0 4px 16px rgba(10, 25, 47, 0.02);
}

.metric-item {
  display: flex;
  align-items: center;
  flex: 1;
  position: relative;
  justify-content: center;
  gap: 16px;
  transition: transform 0.25s ease;
}

/* Gentle lift + icon pulse on hover */
.metric-item:hover {
  transform: translateY(-3px);
}

.metric-item:hover .metric-icon {
  animation: metric-icon-pop 0.45s cubic-bezier(0.34, 1.56, 0.64, 1);
}

@keyframes metric-icon-pop {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.12);
  }
  100% {
    transform: scale(1);
  }
}

.metric-icon {
  width: 46px;
  height: 46px;
  border-radius: 10px;
  background-color: #ffffff;
  border: 1px solid #e9dfce;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: border-color 0.25s ease;
}

.metric-item:hover .metric-icon {
  border-color: #1e3a8a;
}

.metric-info {
  display: flex;
  flex-direction: column;
}

.metric-value {
  font-size: 32px;
  font-weight: 800;
  color: #0a192f;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

.metric-label {
  font-size: 13px;
  font-weight: 500;
  color: #64748b;
  margin-top: 2px;
  white-space: nowrap;
}

/* Divider separating metrics */
.shelf-divider {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 1px;
  height: 44px;
  background-color: #e9dfce;
}

/* ================= CREDIBILITY BOTTOM ROW ================= */
.accreditation-strip {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 48px;
  padding-top: 36px;
  border-top: 1px solid #faf8f5;
}

.strip-label {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #94a3b8;
  margin-bottom: 20px;
}

.partner-pills {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
}

.inst-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background-color: #ffffff;
  border: 1px solid #e2e8f0;
  padding: 8px 16px;
  border-radius: 8px;
  transition: border-color 0.2s ease;
}

.inst-badge:hover {
  border-color: #cbd5e1;
}

.badge-accent {
  font-size: 12px;
  font-weight: 800;
  color: #0a192f;
  letter-spacing: 0.04em;
}

.badge-name {
  font-size: 12px;
  color: #64748b;
  font-weight: 500;
}

/* ================= RESPONSIVE ================= */
@media (prefers-reduced-motion: reduce) {
  .metric-item,
  .metric-icon,
  .inst-badge {
    transition: none;
    animation: none;
  }
}

@media (max-width: 992px) {
  .metrics-shelf {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 32px 20px;
    padding: 28px 20px;
  }

  .metric-item {
    justify-content: flex-start;
  }

  .shelf-divider {
    display: none;
  }

  .track-title {
    font-size: 32px;
  }
}

@media (max-width: 600px) {
  .metrics-shelf {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .metric-value {
    font-size: 28px;
  }

  .partner-pills {
    flex-direction: column;
    width: 100%;
  }

  .inst-badge {
    width: 100%;
    justify-content: center;
  }
}
</style>
