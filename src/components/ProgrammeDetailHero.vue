<template>
  <section class="detail-hero">
    <div class="hero-container">
      <div class="hero-split">
        <!-- Left: Breadcrumb, title, who-for, CTAs -->
        <div class="hero-copy">
          <nav v-reveal class="breadcrumb" aria-label="Breadcrumb">
            <router-link to="/programmes" class="crumb-link"
              >Programmes</router-link
            >
            <span class="crumb-sep">/</span>
            <span class="crumb-current">{{ programme.name }}</span>
          </nav>

          <span v-reveal="{ delay: 100 }" class="track-badge">
            {{ programme.track }} • {{ programme.stage }}
          </span>

          <h1 v-reveal="{ delay: 150 }" class="hero-title">
            {{ programme.name }}<br />
            <span>{{ programme.fullTitle }}</span>
          </h1>

          <p v-reveal="{ delay: 250 }" class="who-for">
            <strong class="who-for-label">Who is this for?</strong>
            {{ programme.whoFor }}
</p>

          <div v-reveal="{ delay: 350 }" class="hero-ctas">
            <a class="btn btn-primary" :href="enrollHref" target="_blank" rel="noopener">
              Enroll Now
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
            <router-link class="btn btn-outline" to="/programmes">
              All Programmes
            </router-link>
          </div>
        </div>

        <!-- Right: stage progress card -->
        <div v-reveal:zoom="{ delay: 200 }" class="stage-card">
          <span class="stage-card-tag">Your Pathway</span>
          <div class="stage-list">
            <div
              v-for="(stage, index) in stages"
              :key="stage"
              class="stage-row"
              :class="{ done: index < currentIndex, current: index === currentIndex }"
            >
              <div class="stage-node"></div>
              <span class="stage-name">{{ stage }}</span>
              <span class="stage-state">
                {{ index < currentIndex ? "Done" : index === currentIndex ? "You are here" : "Upcoming" }}
              </span>
            </div>
          </div>
          <p class="stage-note">
            Typical route — exemptions may move you ahead. Confirm with ICAN or
            talk to us.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { waLink } from "@/data/programmes";

const STAGES = ["ATS I", "ATS II", "ATS III", "Foundation", "Skills", "Professional"];

export default {
  name: "ProgrammeDetailHero",
  props: {
    programme: { type: Object, required: true },
  },
  computed: {
    currentIndex() {
      return STAGES.indexOf(this.programme.name);
    },
    stages() {
      return STAGES;
    },
    enrollHref() {
      return waLink(`Hello Springboard! I'd like to enroll for ${this.programme.name}.`);
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

.detail-hero {
  width: 100%;
  background-color: #ffffff;
  padding: 48px 24px 72px;
  font-family: "DM Sans", "DM Sans Fallback", "DM Sans", system-ui, sans-serif;
  color: #1f2937;
}

.hero-container {
  max-width: 1200px;
  margin: 0 auto;
}

.hero-split {
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 56px;
  align-items: start;
}

/* ---------- Left column ---------- */
.breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  margin-bottom: 22px;
}

.crumb-link {
  color: #64748b;
  text-decoration: none;
  transition: color 0.15s ease;
}

.crumb-link:hover {
  color: #0a192f;
}

.crumb-sep {
  color: #cbd5e1;
}

.crumb-current {
  color: #0a192f;
  font-weight: 600;
}

.track-badge {
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
  margin-bottom: 16px;
}

.hero-title {
  font-family: "Cormorant Garamond", Georgia, serif;
  font-size: 50px;
  line-height: 1.06;
  font-weight: 700;
  color: #0a192f;
  letter-spacing: -0.02em;
  margin-bottom: 18px;
}

.hero-title span {
  font-style: italic;
  font-weight: 400;
  color: #1e3a8a;
  font-size: 0.62em;
  display: block;
  margin-top: 6px;
  line-height: 1.2;
}

.who-for {
  font-size: 15px;
  line-height: 1.65;
  color: #4b5563;
  max-width: 520px;
  margin-bottom: 28px;
}

.who-for-label {
  color: #0a192f;
}

.hero-ctas {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

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

.btn-outline {
  background-color: #ffffff;
  color: #0a192f;
  border-color: #e2e8f0;
}

.btn-outline:hover {
  background-color: #f8fafc;
  border-color: #cbd5e1;
}

/* ---------- Right column: stage card ---------- */
.stage-card {
  background-color: #faf8f5;
  border: 1px solid #e9dfce;
  border-radius: 16px;
  padding: 28px 24px;
  position: sticky;
  top: 96px;
}

.stage-card-tag {
  display: block;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #78716c;
  margin-bottom: 18px;
}

.stage-list {
  display: flex;
  flex-direction: column;
}

.stage-row {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 7px 0;
}

.stage-row {
  position: relative;
}

.stage-node {
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background-color: #e2e8f0;
  border: 2px solid #cbd5e1;
  flex-shrink: 0;
  position: relative;
  z-index: 1;
}

.stage-row::before {
  content: "";
  position: absolute;
  left: 5px;
  top: -7px;
  bottom: -7px;
  width: 1px;
  background-color: #e2e8f0;
}

.stage-row:first-child::before {
  display: none;
}

.stage-row.done .stage-node {
  background-color: #1e3a8a;
  border-color: #1e3a8a;
}

.stage-row.current .stage-node {
  background-color: #f5e6c8;
  border-color: #1e3a8a;
  box-shadow: 0 0 0 4px rgba(30, 58, 138, 0.12);
}

.stage-name {
  font-size: 14px;
  font-weight: 600;
  color: #0a192f;
  flex: 1;
}

.stage-row:not(.current):not(.done) .stage-name {
  color: #94a3b8;
}

.stage-state {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.stage-row.done .stage-state {
  color: #1e3a8a;
}

.stage-row.current .stage-state {
  color: #0a192f;
  background-color: #f5e6c8;
  padding: 2px 8px;
  border-radius: 999px;
}

.stage-row:not(.current):not(.done) .stage-state {
  color: #cbd5e1;
}

.stage-note {
  font-size: 11px;
  line-height: 1.5;
  color: #94a3b8;
  margin-top: 18px;
  padding-top: 14px;
  border-top: 1px solid #e9dfce;
}

/* ---------- Responsive ---------- */
@media (prefers-reduced-motion: reduce) {
  .btn,
  .btn svg,
  .crumb-link {
    transition: none;
  }
}

@media (max-width: 992px) {
  .hero-split {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .hero-title {
    font-size: 40px;
  }

  .stage-card {
    position: static;
  }
}
</style>
