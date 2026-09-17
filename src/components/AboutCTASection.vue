<template>
  <section class="about-cta-section">
    <div class="cta-container">
      <div v-reveal:zoom class="cta-card">
        <div class="cta-glow-disc"></div>

        <div class="cta-content">
          <!-- Inner cascade: pill 150ms -> headline 250ms -> subtext 400ms
               -> actions 550ms -> trust row 700ms, after the card zooms in -->
          <span v-reveal="{ delay: 150 }" class="cta-pill">Admissions Open For Upcoming Diet</span>

          <!-- Main Climax Headline -->
          <h2 v-reveal="{ delay: 250 }" class="cta-headline">
            Ready to Start <br />
            <span>Your Journey?</span>
          </h2>

          <!-- Descriptive Subtext -->
          <p v-reveal="{ delay: 400 }" class="cta-subtext">
            Join hundreds of candidates building their careers with
            Springboard Associates SATC. Explore our ATS and ICAN programmes
            and take the first step toward becoming a chartered accountant.
          </p>

          <!-- Button Actions -->
          <div v-reveal="{ delay: 550 }" class="cta-actions">
            <button class="btn btn-cream" @click="handleProgrammes">
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
            <button class="btn btn-outline" @click="handleContact">
              Talk to Us
            </button>
          </div>

          <!-- Bottom Micro-Trust Bar -->
          <div v-reveal="{ delay: 700 }" class="cta-trust-row">
            <div class="trust-pill">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>ICAN Accredited Tuition</span>
            </div>
            <span class="trust-sep">•</span>
            <div class="trust-pill">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>Physical & Online Classes</span>
            </div>
            <span class="trust-sep">•</span>
            <div class="trust-pill">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>Registration to Certification Support</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutCTASection",
  methods: {
    handleProgrammes() {
      this.$router.push("/programmes");
    },
    handleContact() {
      console.log("Navigate or scroll to contact section");
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

.about-cta-section {
  width: 100%;
  background-color: #ffffff;
  padding: 60px 24px 100px;
  font-family: "DM Sans", "DM Sans Fallback", "DM Sans", system-ui, sans-serif;
}

.cta-container {
  max-width: 1200px;
  margin: 0 auto;
}

/* Large Navy Card Container */
.cta-card {
  background-color: #0a192f;
  border-radius: 24px;
  padding: 80px 32px;
  position: relative;
  overflow: hidden;
  border: 1px solid #172e4d;
  text-align: center;
  box-shadow: 0 20px 40px -15px rgba(10, 25, 47, 0.18);
}

/* Soft Warm Glow Behind Text — breathing halo */
.cta-glow-disc {
  position: absolute;
  top: -120px;
  left: 50%;
  transform: translateX(-50%);
  width: 500px;
  height: 350px;
  pointer-events: none;
  background: radial-gradient(
    circle,
    rgba(245, 230, 200, 0.07) 0%,
    rgba(10, 25, 47, 0) 70%
  );
  animation: glow-breathe 6s ease-in-out infinite;
}

@keyframes glow-breathe {
  0%,
  100% {
    opacity: 0.5;
  }
  50% 	{
    opacity: 1;
  }
}

.cta-content {
  position: relative;
  z-index: 2;
  max-width: 760px;
  margin: 0 auto;
}

/* Overline Badge */
.cta-pill {
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #f5e6c8;
  background-color: rgba(245, 230, 200, 0.1);
  border: 1px solid rgba(245, 230, 200, 0.2);
  padding: 6px 16px;
  border-radius: 999px;
  margin-bottom: 24px;
}

/* Headline */
.cta-headline {
  font-family: "Cormorant Garamond", Georgia, serif;
  font-size: 52px;
  line-height: 1.1;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: -0.02em;
  margin-bottom: 20px;
}

.cta-headline span {
  font-style: italic;
  font-weight: 400;
  color: #f5e6c8;
}

/* Subtitle */
.cta-subtext {
  font-size: 16px;
  line-height: 1.65;
  color: #cbd5e1;
  margin-bottom: 36px;
  max-width: 620px;
  margin-left: auto;
  margin-right: auto;
}

/* Button Group */
.cta-actions {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 40px;
}

.btn {
  font-family: "DM Sans", "DM Sans Fallback", "DM Sans", system-ui, sans-serif;
  font-size: 14px;
  font-weight: 700;
  padding: 14px 28px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid transparent;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.btn svg {
  transition: transform 0.2s ease;
}

.btn:hover svg {
  transform: translateX(4px);
}

.btn-cream {
  background-color: #f5e6c8;
  color: #0a192f;
  border-color: #f5e6c8;
}

.btn-cream:hover {
  background-color: #ede0bf;
  border-color: #ede0bf;
  transform: translateY(-1px);
}

.btn-outline {
  background-color: transparent;
  color: #ffffff;
  border-color: rgba(255, 255, 255, 0.3);
}

.btn-outline:hover {
  background-color: rgba(255, 255, 255, 0.08);
  border-color: #ffffff;
  transform: translateY(-1px);
}

/* Micro-Trust Strip Below Buttons */
.cta-trust-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
  padding-top: 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.trust-pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-weight: 500;
  color: #94a3b8;
}

.trust-pill svg {
  color: #f5e6c8;
}

.trust-sep {
  color: #334155;
  font-size: 12px;
}

/* ================= RESPONSIVE ================= */
@media (prefers-reduced-motion: reduce) {
  .cta-glow-disc {
    animation: none;
  }
}

@media (max-width: 768px) {
  .about-cta-section {
    padding: 60px 0px 100px;
  }

  .cta-card {
    padding: 56px 20px;
    border-radius: 18px;
  }

  .cta-headline {
    font-size: 38px;
  }

  .cta-subtext {
    font-size: 14px;
  }

  .cta-actions {
    flex-direction: column;
    width: 100%;
    gap: 12px;
  }

  .btn {
    width: 100%;
    justify-content: center;
  }

  .cta-trust-row {
    flex-direction: column;
    gap: 10px;
  }

  .trust-sep {
    display: none;
  }
}
</style>
