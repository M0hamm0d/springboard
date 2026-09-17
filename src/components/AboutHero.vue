<template>
  <section class="about-hero">
    <div class="hero-inner">
      <!-- Left Editorial Narrative -->
      <div class="hero-content">
        <!-- Entrance choreography (v-reveal stagger):
             pill 0ms -> title 100ms -> lead 250ms -> CTA 350ms
             kicker 150ms -> photo 300ms; photo then slow zooms via CSS -->
        <div v-reveal class="category-pill">About Us</div>

        <h1 v-reveal="{ delay: 100 }" class="hero-title">
          Shaping the Next Generation of <span>Chartered Accountants.</span>
        </h1>

        <p v-reveal="{ delay: 250 }" class="hero-lead">
          Springboard Associates SATC provides structured, syllabus-aligned ICAN
          & ATSWA tuition. We pair veteran accounting practitioners with a
          disciplined academic environment to ensure first-attempt examination
          success.
        </p>

        <div v-reveal="{ delay: 350 }" class="hero-cta-wrapper">
          <button class="btn-primary" @click="handleProgrammes">
            <span>Explore Our Programmes</span>
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

      <!-- Right Editorial Image & Institutional Watermark -->
      <div class="hero-visual-side">
        <!-- Floating Corner Metric (matches "When Design Meets Impact") -->
        <div v-reveal="{ delay: 150 }" class="floating-kicker">
          <span class="kicker-motto">Ora Et Labora</span>
          <h3 class="kicker-heading">
            Rigor.<br />Excellence.<br />Integrity.
          </h3>
          <span class="kicker-caption">ICAN Accredited Tuition</span>
        </div>

        <!-- Masked Photo with Subtle Inner Soft Glow -->
        <div v-reveal:zoom="{ delay: 300 }" class="photo-container">
          <img
            src="/flier-2.jpeg"
            alt="Springboard Associates Faculty and Students"
            class="faculty-img"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutHero",
  methods: {
    handleProgrammes() {
      this.$router.push("/programmes");
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;1,400&family=DM+Sans:wght@400;500;600;700&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.about-hero {
  width: 100%;
  background-color: #ffffff;
  position: relative;
  overflow: hidden;
  font-family: "DM Sans", "DM Sans Fallback", "DM Sans", system-ui, sans-serif;
  padding: 80px 32px 100px;
}

.hero-inner {
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.15fr 1.35fr;
  gap: 64px;
  align-items: center;
}

/* ================= LEFT CONTENT ================= */
.hero-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 2;
}

.category-pill {
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #1e3a8a;
  background-color: #faf8f5;
  border: 1px solid #e9dfce;
  padding: 6px 14px;
  border-radius: 999px;
  margin-bottom: 24px;
}

.hero-title {
  font-family: "Cormorant Garamond", Georgia, serif;
  font-size: 58px;
  line-height: 1.08;
  font-weight: 700;
  color: #0a192f;
  letter-spacing: -0.02em;
  margin-bottom: 24px;
}

.hero-title span {
  font-style: italic;
  font-weight: 400;
  color: #1e3a8a;
}

.hero-lead {
  font-size: 16px;
  line-height: 1.7;
  color: #4b5563;
  max-width: 490px;
  margin-bottom: 36px;
}

.hero-cta-wrapper {
  display: flex;
  align-items: center;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background-color: #0a192f;
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  padding: 14px 28px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-primary:hover {
  background-color: #172e4d;
  transform: translateY(-1px);
}

.btn-primary svg {
  transition: transform 0.2s ease;
}

.btn-primary:hover svg {
  transform: translateX(3px);
}

/* ================= RIGHT VISUAL ================= */
.hero-visual-side {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

/* Floating Kicker (Right-side text in reference image) */
.floating-kicker {
  position: absolute;
  top: 10px;
  left: 20px;
  z-index: 3;
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(6px);
  padding: 16px 20px;
  border-radius: 12px;
  border: 1px solid #e9dfce;
  box-shadow: 0 10px 30px -10px rgba(10, 25, 47, 0.08);
  /* Gentle vertical bob so the card reads as "floating" */
  animation: kicker-float 5s ease-in-out infinite;
}

@keyframes kicker-float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}

.kicker-motto {
  display: block;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #1e3a8a;
  margin-bottom: 4px;
}

.kicker-heading {
  font-family: "Cormorant Garamond", Georgia, serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.15;
  color: #0a192f;
  margin-bottom: 6px;
}

.kicker-caption {
  display: block;
  font-size: 11px;
  color: #64748b;
  font-weight: 600;
}

/* Photo Mask & Gradient Blend */
.photo-container {
  position: relative;
  width: 100%;
  height: 500px;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 20px 45px -15px rgba(10, 25, 47, 0.1);
  border: 1px solid #e9dfce;
}

.faculty-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  /* Ambient Ken Burns drift so the photo feels alive, not static */
  animation: ken-burns 18s ease-in-out infinite alternate;
}

@keyframes ken-burns {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.07);
  }
}

/* Soft white fade to bleed into the background smoothly */
.photo-container::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.25) 0%,
    rgba(255, 255, 255, 0) 40%
  );
  pointer-events: none;
}

/* ================= RESPONSIVE ================= */
@media (prefers-reduced-motion: reduce) {
  .faculty-img,
  .floating-kicker {
    animation: none;
  }

  .btn-primary,
  .btn-primary svg {
    transition: none;
  }
}

@media (max-width: 1024px) {
  .hero-inner {
    grid-template-columns: 1fr;
    gap: 48px;
  }

  .hero-title {
    font-size: 44px;
  }

  .photo-container {
    height: 380px;
  }

  .floating-kicker {
    left: 12px;
    top: 12px;
  }
}

@media (max-width: 640px) {
  .about-hero {
    padding: 56px 20px 64px;
  }

  .hero-title {
    font-size: 34px;
  }

  .photo-container {
    height: 300px;
  }

  .btn-primary {
    width: 100%;
    justify-content: center;
  }
}
</style>
