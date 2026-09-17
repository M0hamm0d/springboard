<template>
  <section class="programmes-hero">
    <div class="hero-container">
      <div class="hero-top">
        <div class="hero-title-col">
          <div v-reveal class="accreditation-badge">
            <span class="badge-icon">★</span>
            <span class="badge-text">ICAN ACCREDITED TUITION CENTRE</span>
          </div>
          <h1 v-reveal="{ delay: 100 }" class="hero-headline">
            Find the Right <br />
            <span>ICAN Programme</span> for You
          </h1>
        </div>

        <div v-reveal="{ delay: 250 }" class="hero-action-col">
          <p class="hero-description">
            Whether you're just starting out or picking up from where you left
            off, Springboard has a programme for every stage of the ICAN
            journey — from ATS I through to the Professional level.
          </p>
          <!-- V2: becomes the "Find Your Path" questionnaire.
               Currently a placeholder that opens WhatsApp. -->
          <div class="hero-cta-group">
            <a
              class="btn btn-primary"
              :href="whatsappHref"
              target="_blank"
              rel="noopener"
            >
              Not Sure Where to Start?
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
            </a>
          </div>
        </div>
      </div>

      <!-- Trust strip: mirrors TrustStripe rhythm -->
      <div v-reveal="{ delay: 400 }" class="hero-meta-row">
        <div class="meta-item">
          <span class="meta-value">6</span>
          <span class="meta-label">Programme Levels</span>
        </div>
        <div class="meta-divider"></div>
        <div class="meta-item">
          <span class="meta-value">2</span>
          <span class="meta-label">Pathways: ATSWA & Professional</span>
        </div>
        <div class="meta-divider"></div>
        <div class="meta-item">
          <span class="meta-value">Physical + Online</span>
          <span class="meta-label">Every Level, Both Modes</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { waLink } from "@/data/programmes";

export default {
  name: "ProgrammesHero",
  computed: {
    whatsappHref() {
      return waLink(
        "Hello Springboard! I'm not sure which ICAN programme fits my level. Can you help me choose?"
      );
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,400&family=DM+Sans:wght@400;500;600;700&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.programmes-hero {
  width: 100%;
  background-color: #ffffff;
  padding: 56px 24px 72px;
  font-family: "DM Sans", "DM Sans Fallback", "DM Sans", system-ui, sans-serif;
  color: #1f2937;
}

.hero-container {
  max-width: 1200px;
  margin: 0 auto;
}

/* ================= TOP ROW ================= */
.hero-top {
  display: grid;
  grid-template-columns: 1.25fr 1fr;
  gap: 48px;
  align-items: flex-end;
}

.accreditation-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #0a192f;
  margin-bottom: 16px;
}

.badge-icon {
  color: #d97706;
  font-size: 14px;
}

.hero-headline {
  font-family: "Cormorant Garamond", Georgia, serif;
  font-size: 54px;
  line-height: 1.05;
  font-weight: 600;
  color: #0a192f;
  letter-spacing: -0.02em;
}

.hero-headline span {
  font-style: italic;
  font-weight: 400;
  color: #1e3a8a;
}

.hero-action-col {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-bottom: 6px;
}

.hero-description {
  font-size: 15px;
  line-height: 1.6;
  color: #4b5563;
  margin-bottom: 24px;
  max-width: 480px;
}

.hero-cta-group {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

/* ================= CTA BUTTON ================= */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: "DM Sans", "DM Sans Fallback", "DM Sans", system-ui, sans-serif;
  font-size: 14px;
  font-weight: 600;
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid transparent;
  text-decoration: none;
}

.btn svg {
  transition: transform 0.2s ease;
}

.btn:hover svg {
  transform: translateX(4px);
}

.btn-primary {
  background-color: #0a192f;
  color: #ffffff;
}

.btn-primary:hover {
  background-color: #172e4d;
  transform: translateY(-1px);
}

/* ================= META STRIP ================= */
.hero-meta-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-top: 56px;
  padding: 24px 32px;
  background-color: #faf8f5;
  border: 1px solid #e9dfce;
  border-radius: 14px;
}

.meta-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 3px;
  flex: 1;
}

.meta-value {
  font-size: 18px;
  font-weight: 800;
  color: #0a192f;
  letter-spacing: -0.01em;
}

.meta-label {
  font-size: 12px;
  color: #64748b;
  font-weight: 500;
}

.meta-divider {
  width: 1px;
  height: 36px;
  background-color: #e9dfce;
  flex-shrink: 0;
}

/* ================= RESPONSIVE ================= */
@media (max-width: 992px) {
  .hero-top {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .hero-headline {
    font-size: 44px;
  }

  .hero-meta-row {
    flex-direction: column;
    gap: 18px;
    padding: 24px;
  }

  .meta-divider {
    width: 40px;
    height: 1px;
  }
}
</style>
