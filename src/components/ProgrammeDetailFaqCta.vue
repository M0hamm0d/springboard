<template>
  <div>
    <!-- ================= LEVEL FAQS ================= -->
    <section class="faq-section">
      <div class="faq-container">
        <div v-reveal class="faq-header">
          <span class="faq-tag">{{ programme.name }} FAQs</span>
          <h2 class="faq-headline">Common Questions at This Level</h2>
        </div>

        <div class="faq-list">
          <div
            v-for="(faq, index) in programme.faqs"
            :key="index"
            v-reveal="{ delay: 100 + index * 100 }"
            class="faq-item"
            :class="{ opened: openIndex === index }"
          >
            <button
              class="faq-question"
              :aria-expanded="openIndex === index"
              @click="toggle(index)"
            >
              <span>{{ faq.q }}</span>
              <svg
                class="faq-chevron"
                :class="{ open: openIndex === index }"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            <div class="faq-answer" :class="{ open: openIndex === index }">
              <p>{{ faq.a }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ================= FINAL CTA ================= -->
    <section class="detail-cta-section">
      <div class="cta-container">
        <div v-reveal:zoom class="cta-card">
          <div class="cta-glow"></div>
          <div class="cta-content">
            <span class="cta-pill">Admissions Open For Upcoming Diet</span>
            <h2 class="cta-headline">
              Ready to Begin <br />
              <span>{{ programme.name }}?</span>
            </h2>
            <p class="cta-subtext">
              Secure your lectures, study packs and mock exam slots — physical
              at our Tanke, Ilorin centre, or live online.
            </p>
            <div class="cta-actions">
              <a class="btn btn-cream" :href="enrollHref" target="_blank" rel="noopener">
                Enroll Now
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </a>
              <a class="btn btn-outline" href="#" @click.prevent="handleContact">
                Talk to Us
              </a>
            </div>
            <div class="cta-trust-row">
              <span class="trust-pill">ICAN Accredited Tuition</span>
              <span class="trust-sep">•</span>
              <span class="trust-pill">Physical & Online Classes</span>
              <span class="trust-sep">•</span>
              <span class="trust-pill">Installment Plans Available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { waLink } from "@/data/programmes";

export default {
  name: "ProgrammeDetailFaqCta",
  props: {
    programme: { type: Object, required: true },
  },
  data() {
    return {
      openIndex: 0,
    };
  },
  computed: {
    enrollHref() {
      return waLink(
        `Hello Springboard! I'd like to enroll for ${this.programme.name}.`
      );
    },
  },
  methods: {
    toggle(index) {
      this.openIndex = this.openIndex === index ? null : index;
    },
    handleContact() {
      console.log("Navigate to contact");
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

.faq-section {
  width: 100%;
  background-color: #ffffff;
  padding: 88px 24px;
  font-family: "DM Sans", "DM Sans Fallback", "DM Sans", system-ui, sans-serif;
  color: #1f2937;
}

.faq-container {
  max-width: 800px;
  margin: 0 auto;
}

.faq-header {
  text-align: center;
  margin-bottom: 44px;
}

.faq-tag {
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #1e3a8a;
  margin-bottom: 10px;
}

.faq-headline {
  font-family: "Cormorant Garamond", Georgia, serif;
  font-size: 36px;
  font-weight: 700;
  color: #0a192f;
  letter-spacing: -0.02em;
}

.faq-item {
  border: 1px solid #e9dfce;
  border-radius: 12px;
  background-color: #faf8f5;
  margin-bottom: 12px;
  overflow: hidden;
  transition: border-color 0.2s ease;
}

.faq-item.opened {
  border-color: #cbd5e1;
}

.faq-question {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  text-align: left;
  background: transparent;
  border: none;
  padding: 20px 24px;
  font-family: "DM Sans", "DM Sans Fallback", "DM Sans", system-ui, sans-serif;
  font-size: 15px;
  font-weight: 600;
  color: #0a192f;
  cursor: pointer;
}

.faq-chevron {
  flex-shrink: 0;
  color: #64748b;
  transition: transform 0.25s ease;
}

.faq-chevron.open {
  transform: rotate(180deg);
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.faq-answer.open {
  max-height: 260px;
}

.faq-answer p {
  padding: 0 24px 20px;
  font-size: 14px;
  line-height: 1.65;
  color: #4b5563;
}

/* ================= FINAL CTA ================= */
.detail-cta-section {
  width: 100%;
  background-color: #ffffff;
  padding: 0 24px 100px;
  font-family: "DM Sans", "DM Sans Fallback", "DM Sans", system-ui, sans-serif;
}

.cta-container {
  max-width: 1200px;
  margin: 0 auto;
}

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

.cta-glow {
  position: absolute;
  top: -120px;
  left: 50%;
  transform: translateX(-50%);
  width: 500px;
  height: 350px;
  background: radial-gradient(
    circle,
    rgba(245, 230, 200, 0.07) 0%,
    rgba(10, 25, 47, 0) 70%
  );
  animation: glow-breathe 6s ease-in-out infinite;
  pointer-events: none;
}

@keyframes glow-breathe {
  0%,
  100% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
}

.cta-content {
  position: relative;
  z-index: 2;
  max-width: 720px;
  margin: 0 auto;
}

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

.cta-subtext {
  font-size: 16px;
  line-height: 1.65;
  color: #cbd5e1;
  margin-bottom: 36px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

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
  text-decoration: none;
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
  font-size: 12px;
  font-weight: 500;
  color: #94a3b8;
}

.trust-sep {
  color: #334155;
  font-size: 12px;
}

@media (prefers-reduced-motion: reduce) {
  .cta-glow {
    animation: none;
  }

  .faq-chevron,
  .faq-answer,
  .btn {
    transition: none;
  }
}

@media (max-width: 768px) {
  .faq-section {
    padding: 56px 20px;
  }

  .faq-answer.open {
    max-height: 360px;
  }

  .detail-cta-section {
    padding: 0 0 80px;
  }

  .cta-card {
    padding: 56px 20px;
    border-radius: 18px;
  }

  .cta-headline {
    font-size: 38px;
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
