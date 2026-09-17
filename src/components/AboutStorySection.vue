<template>
  <section class="story-section">
    <div class="story-container">
      <!-- Part 1: Top Brand Story Split (Matches Reference Top) -->
      <div class="story-top-split">
        <!-- Narrative Column -->
        <div v-reveal class="story-text-col">
          <span class="section-tag">Our History</span>
          <h2 v-reveal="{ delay: 100 }" class="story-title">Excellence Shouldn't Require Relocation.</h2>
          <p v-reveal="{ delay: 200 }" class="story-desc">
            Springboard Associates SATC was established to provide aspiring
            accountants in North Central Nigeria access to tier-one,
            syllabus-aligned ICAN and ATSWA tuition without having to relocate
            to commercial capitals.
          </p>
          <p v-reveal="{ delay: 300 }" class="story-desc placeholder-note">
            [Insert founding story — who started it, why, what gap it filled.]
          </p>
          <p v-reveal="{ delay: 400 }" class="story-desc">
            From our very first ATS cohort to producing full chartered
            professionals (ACAs), our model remains simple: seasoned examiners,
            disciplined class schedules, and relentless practice.
          </p>
        </div>

        <!-- Video / Media Showcase Column -->
        <div v-reveal:zoom="{ delay: 150 }" class="story-media-col">
          <div class="media-frame">
            <img
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=80"
              alt="Springboard Lecture Hall"
              class="media-img"
            />
            <div class="media-overlay"></div>
            <!-- Play / Video Reel Button -->
            <button
              class="play-btn"
              @click="openTourVideo"
              aria-label="Play Centre Video"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
            <div class="media-badge">
              <span>Campus Tour & Faculty Insight</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Divider line separating both halves cleanly -->
      <div class="horizontal-rule"></div>

      <!-- Part 2: Bottom 3-Pillar Shelf (Matches Reference Bottom) -->
      <div class="ethos-bottom">
        <div v-reveal class="ethos-header">
          <span class="section-tag">Institutional Ethos</span>
          <h3 class="ethos-headline">Structured for Academic Rigor</h3>
          <p class="ethos-lead">
            Every lecture, mock exam, and syllabus breakdown is guided by our
            institutional principles.
          </p>
        </div>

        <!-- 3 Horizontal Pillars (Mission, Vision, Motto) -->
        <div class="pillars-grid">
          <!-- Pillar 1: Mission -->
          <div v-reveal="{ delay: 100 }" class="pillar-item">
            <div class="pillar-icon-box">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="6" />
                <circle cx="12" cy="12" r="2" />
              </svg>
            </div>
            <h4 class="pillar-title">Our Mission</h4>
            <p class="pillar-desc">
              To provide accessible, result-oriented accounting education that
              clears exams on the first attempt and builds long-term career
              competence.
            </p>
          </div>

          <!-- Pillar 2: Vision -->
          <div v-reveal="{ delay: 200 }" class="pillar-item">
            <div class="pillar-icon-box">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>
            <h4 class="pillar-title">Our Vision</h4>
            <p class="pillar-desc">
              To be the benchmark ICAN tuition centre in the region, recognized
              for consistently producing national prize winners and ethical
              leaders.
            </p>
          </div>

          <!-- Pillar 3: Motto -->
          <div v-reveal="{ delay: 300 }" class="pillar-item">
            <div class="pillar-icon-box">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
                />
              </svg>
            </div>
            <h4 class="pillar-title">Ora Et Labora</h4>
            <p class="pillar-desc">
              "Pray and Work." Balancing deliberate academic effort with
              personal discipline, integrity, and faith in the process.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutStorySection",
  methods: {
    openTourVideo() {
      console.log("Open video modal or campus tour stream");
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

.story-section {
  width: 100%;
  background-color: #ffffff;
  padding: 96px 24px 104px;
  font-family: "DM Sans", "DM Sans Fallback", "DM Sans", system-ui, sans-serif;
  color: #1f2937;
}

.story-container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-tag {
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #1e3a8a;
  margin-bottom: 12px;
}

/* Slow ambient drift so the media card never feels static */
.media-img {
  animation: media-drift 20s ease-in-out infinite alternate;
}

@keyframes media-drift {
  from {
    transform: scale(1) translateX(0);
  }
  to {
    transform: scale(1.06) translateX(-8px);
  }
}

/* ================= TOP BRAND STORY SPLIT ================= */
.story-top-split {
  display: grid;
  grid-template-columns: 1.15fr 1.25fr;
  gap: 56px;
  align-items: center;
  margin-bottom: 72px;
}

.story-text-col {
  display: flex;
  flex-direction: column;
}

.story-title {
  font-family: "Cormorant Garamond", Georgia, serif;
  font-size: 44px;
  font-weight: 700;
  color: #0a192f;
  letter-spacing: -0.02em;
  line-height: 1.15;
  margin-bottom: 20px;
}

.story-desc {
  font-size: 15px;
  line-height: 1.7;
  color: #4b5563;
  margin-bottom: 16px;
}

.placeholder-note {
  color: #94a3b8;
  font-style: italic;
  border-left: 2px solid #e9dfce;
  padding-left: 14px;
}

/* Media / Video Card */
.story-media-col {
  width: 100%;
}

.media-frame {
  position: relative;
  width: 100%;
  height: 360px;
  border-radius: 18px;
  overflow: hidden;
  border: 1px solid #e9dfce;
  box-shadow: 0 16px 36px -12px rgba(10, 25, 47, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
}

.media-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.media-overlay {
  position: absolute;
  inset: 0;
  background: rgba(10, 25, 47, 0.25);
  transition: background-color 0.4s ease;
}

/* Deepen the overlay as the cursor arrives — signals interactivity */
.media-frame:hover .media-overlay {
  background: rgba(10, 25, 47, 0.4);
}

.play-btn {
  position: relative;
  z-index: 2;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: #ffffff;
  color: #0a192f;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  transition:
    transform 0.2s ease,
    background-color 0.2s ease;
}

/* Expanding ripple ring behind the play button */
.play-btn::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.7);
  animation: play-ripple 2.4s ease-out infinite;
  pointer-events: none;
}

@keyframes play-ripple {
  0% {
    transform: scale(1);
    opacity: 0.8;
  }
  100% {
    transform: scale(1.8);
    opacity: 0;
  }
}

.play-btn:hover {
  transform: scale(1.08);
  background-color: #f5e6c8;
}

.media-badge {
  position: absolute;
  bottom: 16px;
  left: 16px;
  background-color: rgba(10, 25, 47, 0.85);
  backdrop-filter: blur(4px);
  color: #f5e6c8;
  font-size: 11px;
  font-weight: 600;
  padding: 6px 12px;
  border-radius: 6px;
}

/* Horizontal Rule Divider */
.horizontal-rule {
  width: 100%;
  height: 1px;
  background-color: #e9dfce;
  margin-bottom: 72px;
}

/* ================= BOTTOM 3-PILLAR SHELF ================= */
.ethos-bottom {
  display: flex;
  flex-direction: column;
}

.ethos-header {
  text-align: center;
  max-width: 620px;
  margin: 0 auto 52px;
}

.ethos-headline {
  font-family: "Cormorant Garamond", Georgia, serif;
  font-size: 36px;
  font-weight: 700;
  color: #0a192f;
  margin-bottom: 12px;
}

.ethos-lead {
  font-size: 14px;
  line-height: 1.6;
  color: #64748b;
}

.pillars-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 36px;
}

.pillar-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.25s ease;
}

.pillar-item:hover {
  transform: translateY(-4px);
}

.pillar-icon-box {
  width: 52px;
  height: 52px;
  border-radius: 12px;
  background-color: #faf8f5;
  border: 1px solid #e9dfce;
  color: #0a192f;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  transition:
    background-color 0.25s ease,
    border-color 0.25s ease,
    transform 0.25s ease;
}

.pillar-item:hover .pillar-icon-box {
  background-color: #f5e6c8;
  border-color: #e9dfce;
  transform: scale(1.08);
}

.pillar-title {
  font-family: "DM Sans", "DM Sans Fallback", "DM Sans", system-ui, sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: #0a192f;
  margin-bottom: 10px;
}

.pillar-desc {
  font-size: 14px;
  line-height: 1.65;
  color: #4b5563;
  max-width: 320px;
}

/* ================= RESPONSIVE ================= */
@media (prefers-reduced-motion: reduce) {
  .media-img,
  .play-btn::before {
    animation: none;
  }

  .media-overlay,
  .pillar-item,
  .pillar-icon-box,
  .play-btn {
    transition: none;
  }
}

@media (max-width: 960px) {
  .story-top-split {
    grid-template-columns: 1fr;
    gap: 40px;
    margin-bottom: 48px;
  }

  .story-title {
    font-size: 36px;
  }

  .pillars-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .horizontal-rule {
    margin-bottom: 48px;
  }
}
</style>
