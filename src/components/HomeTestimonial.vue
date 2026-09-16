<template>
  <section class="testimonials-section">
    <div class="testimonials-container">
      <!-- Top Centered Header (Matches Reference) -->
      <div v-reveal class="testimonials-header">
        <h2 class="header-main-title">Validated Student Success</h2>
        <div class="header-rating-row">
          <div class="rating-stars">
            <span v-for="i in 5" :key="i" class="star-icon">★</span>
          </div>
          <span class="rating-score">4.9 / 5.0</span>
          <span class="rating-divider">•</span>
          <span class="rating-source"
            >Based on candidate exit feedback across ATSWA & ICAN diets</span
          >
        </div>
      </div>

      <!-- Main Carousel Layout: Left Anchor Column + Right Cards -->
      <div class="testimonials-body">
        <!-- Left Column: Big Quote Icon, Title & Navigation Arrows -->
        <div v-reveal="{ delay: 120 }" class="quote-intro-col">
          <div class="large-quote-mark">“</div>
          <h3 class="quote-side-title">What our students are saying</h3>

          <!-- Slider Navigation Controls -->
          <div class="slider-controls">
            <button class="nav-arrow" @click="prevSlide" aria-label="Previous">
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
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
            </button>
            <div class="slider-track">
              <div
                class="slider-thumb"
                :style="{ transform: `translateX(${currentIndex * 100}%)` }"
              ></div>
            </div>
            <button class="nav-arrow" @click="nextSlide" aria-label="Next">
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
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>

        <!-- Right Carousel Cards Shelf -->
        <div v-reveal="{ delay: 240 }" class="cards-carousel-wrapper">
          <div
            class="cards-track"
            :style="{
              transform: `translateX(-${currentIndex * (cardWidth + cardGap)}px)`,
            }"
          >
            <div
              v-for="(item, idx) in testimonials"
              :key="idx"
              class="testimonial-card-item"
            >
              <!-- Speech Bubble Container -->
              <div class="speech-bubble">
                <p class="quote-text">“{{ item.quote }}”</p>

                <div class="bubble-stars">
                  <span v-for="s in 5" :key="s" class="star-mini">★</span>
                </div>

                <!-- Speech Bubble Tail pointing downward -->
                <div class="bubble-tail"></div>
              </div>

              <!-- Student Profile Under Bubble -->
              <div class="student-author-row">
                <div class="author-avatar-placeholder">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#64748B"
                    stroke-width="1.75"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div class="author-info">
                  <strong class="author-name">— {{ item.studentName }}</strong>
                  <span class="author-qualification">{{
                    item.designation
                  }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "TestimonialsSection",
  data() {
    return {
      currentIndex: 0,
      cardWidth: 320,
      cardGap: 24,
      // Placeholders waiting for real verified feedback
      testimonials: [
        {
          quote:
            "My experience at Springboard helped me clear all my papers in a single sitting. The revision sessions and mock exams simulated the actual ICAN exam environment perfectly.",
          studentName: "[Student Name]",
          designation: "ACA (November Diet)",
        },
        {
          quote:
            "The tutors break down complex case studies into practical, digestible steps. Working full-time and studying was tough, but the flexible lecture schedule made it achievable.",
          studentName: "[Student Name]",
          designation: "ACA (May Diet)",
        },
        {
          quote:
            "Springboard provided the structure, discipline, and constant mentorship I needed to transition smoothly from ATSWA directly into the ICAN Skills level with confidence.",
          studentName: "[Student Name]",
          designation: "AAT, ACA Candidate",
        },
        {
          quote:
            "The emphasis on past questions, examiner's reports, and intensive weekend drills gave me the edge required to win a national prize in Financial Reporting.",
          studentName: "[Student Name]",
          designation: "National Prize Winner, ACA",
        },
      ],
    };
  },
  methods: {
    nextSlide() {
      if (this.currentIndex < this.testimonials.length - 2) {
        this.currentIndex++;
      } else {
        this.currentIndex = 0;
      }
    },
    prevSlide() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      } else {
        this.currentIndex = this.testimonials.length - 2;
      }
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.testimonials-section {
  width: 100%;
  background-color: #faf8f5; /* Warm background */
  padding: 92px 24px 104px;
  font-family: "Plus Jakarta Sans", sans-serif;
  color: #1f2937;
  overflow: hidden;
}

.testimonials-container {
  max-width: 1200px;
  margin: 0 auto;
}

/* ================= SECTION HEADER ================= */
.testimonials-header {
  text-align: center;
  margin-bottom: 64px;
}

.header-main-title {
  font-family: "Cormorant Garamond", Georgia, serif;
  font-size: 48px;
  font-weight: 700;
  color: #0a192f;
  letter-spacing: -0.02em;
  margin-bottom: 12px;
}

.header-rating-row {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background-color: #ffffff;
  border: 1px solid #e9dfce;
  padding: 8px 18px;
  border-radius: 999px;
  font-size: 13px;
}

.rating-stars {
  display: flex;
  gap: 2px;
  color: #0a192f;
}

.star-icon {
  font-size: 14px;
}

.rating-score {
  font-weight: 700;
  color: #0a192f;
}

.rating-divider {
  color: #cbd5e1;
}

.rating-source {
  color: #64748b;
  font-weight: 500;
}

/* ================= SECTION BODY ================= */
.testimonials-body {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 48px;
  align-items: flex-start;
}

/* --- Left Column --- */
.quote-intro-col {
  display: flex;
  flex-direction: column;
  padding-top: 10px;
}

.large-quote-mark {
  font-family: "Cormorant Garamond", Georgia, serif;
  font-size: 96px;
  line-height: 0.65;
  color: #f5e6c8; /* Brand Cream Accent */
  margin-bottom: 24px;
  user-select: none;
}

.quote-side-title {
  font-family: "Cormorant Garamond", Georgia, serif;
  font-size: 36px;
  font-weight: 700;
  color: #0a192f;
  line-height: 1.15;
  margin-bottom: 32px;
}

.slider-controls {
  display: flex;
  align-items: center;
  gap: 12px;
}

.nav-arrow {
  background-color: #ffffff;
  border: 1px solid #e9dfce;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0a192f;
  cursor: pointer;
  transition: all 0.2s ease;
}

.nav-arrow:hover {
  background-color: #0a192f;
  color: #ffffff;
  border-color: #0a192f;
}

.slider-track {
  width: 56px;
  height: 3px;
  background-color: #e9dfce;
  border-radius: 2px;
  overflow: hidden;
  position: relative;
}

.slider-thumb {
  width: 50%;
  height: 100%;
  background-color: #0a192f;
  transition: transform 0.3s ease;
}

/* --- Right Column: Carousel --- */
.cards-carousel-wrapper {
  width: 100%;
  overflow: hidden;
  padding: 10px 0 24px;
}

.cards-track {
  display: flex;
  gap: 24px;
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.testimonial-card-item {
  flex: 0 0 320px;
  display: flex;
  flex-direction: column;
}

/* Speech Bubble Matching Image */
.speech-bubble {
  background-color: #ffffff;
  border: 1px solid #e9dfce;
  border-radius: 18px;
  padding: 28px 24px 32px;
  position: relative;
  box-shadow: 0 4px 16px rgba(10, 25, 47, 0.03);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 230px;
}

.quote-text {
  font-size: 14px;
  line-height: 1.65;
  color: #4b5563;
  margin-bottom: 20px;
}

.bubble-stars {
  color: #d97706; /* Star rating color */
  display: flex;
  gap: 2px;
  font-size: 13px;
}

/* Speech Bubble Tail */
.bubble-tail {
  position: absolute;
  bottom: -10px;
  left: 36px;
  width: 18px;
  height: 18px;
  background-color: #ffffff;
  border-bottom: 1px solid #e9dfce;
  border-right: 1px solid #e9dfce;
  transform: rotate(45deg);
}

/* --- Author Details Under Bubble --- */
.student-author-row {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 22px;
  padding-left: 24px;
}

.author-avatar-placeholder {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background-color: #f1efea;
  border: 1px solid #e9dfce;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.author-info {
  display: flex;
  flex-direction: column;
}

.author-name {
  font-size: 13px;
  font-weight: 700;
  color: #0a192f;
  letter-spacing: -0.01em;
}

.author-qualification {
  font-size: 11px;
  font-weight: 600;
  color: #1e3a8a;
  margin-top: 1px;
}

/* ================= RESPONSIVE ================= */
@media (max-width: 960px) {
  .testimonials-body {
    grid-template-columns: 1fr;
    gap: 36px;
  }

  .header-main-title {
    font-size: 38px;
  }

  .quote-intro-col {
    align-items: flex-start;
  }

  .quote-side-title {
    font-size: 30px;
    margin-bottom: 20px;
  }

  .cards-carousel-wrapper {
    overflow-x: auto;
    scrollbar-width: none;
  }

  .cards-carousel-wrapper::-webkit-scrollbar {
    display: none;
  }
}
</style>
