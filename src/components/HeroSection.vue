<template>
  <section class="hero-wrapper">
    <!--
      Entrance choreography (v-reveal stagger):
        badge 0ms -> headline 100ms -> description/CTAs 250ms
        navy card 150ms -> cream card 300ms -> photo card 450ms
      Stat bars then cascade left-to-right (18ms per tick).
    -->
    <div class="hero-container">
      <div class="hero-top">
        <div class="hero-title-col">
          <div v-reveal class="accreditation-badge">
            <span class="badge-icon">★</span>
            <span class="badge-text">ICAN ACCREDITED TUITION CENTRE</span>
          </div>
          <h1 v-reveal="{ delay: 100 }" class="hero-headline">
            Building Future Chartered Accountants; <br />
            <span>through excellence.</span>
          </h1>
        </div>

        <div v-reveal="{ delay: 250 }" class="hero-action-col">
          <p class="hero-description">
            Springboard Associates SATC provides quality ICAN tuition for
            aspiring Accounting Technicians and Chartered Accountants, with
            experienced tutors, proven results, and flexible online and physical
            classes.
          </p>
          <div class="hero-cta-group">
            <button class="btn btn-primary" @click="handleEnroll">
              Enroll Now
            </button>
            <button class="btn btn-outline" @click="handleExplore">
              Explore Programmes
            </button>
          </div>
        </div>
      </div>

      <div class="hero-grid">
        <div v-reveal="{ delay: 150 }" class="card card-navy">
          <div class="card-navy-header">
            <h3 class="card-navy-title">Flexible & Structured Learning</h3>
            <p class="card-navy-sub">
              Comprehensive weekend, weekday, and virtual lectures tailored
              around working professionals.
            </p>
          </div>
          <div class="card-navy-footer">
            <div class="avatar-group">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80"
                alt="Student"
                class="avatar"
              />
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80"
                alt="Student"
                class="avatar"
              />
              <img
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=80&q=80"
                alt="Student"
                class="avatar"
              />
            </div>
            <div class="avatar-label">
              <strong>980+ Students</strong>
              <span>Prepped for ICAN Exams</span>
            </div>
          </div>
        </div>

        <div v-reveal="{ delay: 300 }" class="card card-cream">
          <div class="stat-top">
            <div class="stat-badge">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                />
              </svg>
              <span>ICAN Pass Rate</span>
            </div>
            <span class="stat-big-target">94.2%</span>
          </div>

          <div class="stat-bottom">
            <div class="stat-metric-row">
              <span class="stat-current">Single-Sitting Clearance</span>
              <span class="stat-target-label">Top 10% Nationwide</span>
            </div>

            <div class="stat-bar-container">
              <span
                v-for="n in 34"
                :key="n"
                :class="['bar-tick', { active: n <= 28 }]"
                :style="{ transitionDelay: n * 18 + 'ms' }"
              ></span>
            </div>
          </div>
        </div>

        <div v-reveal="{ delay: 450 }" class="card card-photo">
          <img
            src="/ican-hero.webp"
            alt="Students in classroom"
            class="photo-img"
          />
          <!-- <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80"
            alt="Students in classroom"
            class="photo-img"
          /> -->
          <div class="achievement-pill">
            <div class="achievement-dot"></div>
            <!-- pulsing handled in CSS -->
            <div class="achievement-text">
              <span class="pill-title">National Prize Winners</span>
              <span class="pill-sub">Proven ICAN examination excellence</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroSection",
  methods: {
    handleEnroll() {
      // Add enrollment navigation or modal trigger
      console.log("Navigate to enrollment");
    },
    handleExplore() {
      // Add programmes scroll/route
      console.log("Navigate to programmes");
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.hero-wrapper {
  width: 100%;
  background-color: #ffffff;
  padding: 56px 24px 80px;
  font-family:
    "Plus Jakarta Sans",
    -apple-system,
    BlinkMacSystemFont,
    sans-serif;
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
  margin-bottom: 48px;
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

.btn {
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 14px;
  font-weight: 600;
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid transparent;
}

.btn-primary {
  background-color: #0a192f;
  color: #ffffff;
}

.btn-primary:hover {
  background-color: #172e4d;
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

/* ================= BOTTOM GRID ================= */
.hero-grid {
  display: grid;
  grid-template-columns: 1fr 1.25fr 1.75fr;
  gap: 20px;
  min-height: 380px;
}

.card {
  border-radius: 16px;
  overflow: hidden;
  position: relative;
}

/* Card 1: Navy */
.card-navy {
  background-color: #0a192f;
  color: #ffffff;
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-navy-title {
  font-family: "Cormorant Garamond", Georgia, serif;
  font-size: 26px;
  font-weight: 600;
  line-height: 1.15;
  color: #ffffff;
  margin-bottom: 12px;
}

.card-navy-sub {
  font-size: 13px;
  line-height: 1.5;
  color: #cbd5e1;
}

.card-navy-footer {
  display: flex;
  align-items: center;
  gap: 12px;
  padding-top: 24px;
}

.avatar-group {
  display: flex;
}

.avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid #0a192f;
  margin-left: -8px;
  object-fit: cover;
  transition:
    transform 0.25s ease,
    margin-left 0.25s ease;
}

.avatar-group:hover .avatar {
  margin-left: -3px;
}

.avatar-group:hover .avatar:hover {
  transform: translateY(-4px) scale(1.1);
  z-index: 2;
}

.avatar:first-child {
  margin-left: 0;
}

.avatar-label strong {
  display: block;
  font-size: 12px;
  color: #f5e6c8;
}

.avatar-label span {
  font-size: 11px;
  color: #94a3b8;
}

/* Card 2: Cream/Beige */
.card-cream {
  background-color: #f5e6c8;
  color: #0a192f;
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #e9dfce;
}

.stat-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.stat-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background-color: rgba(255, 255, 255, 0.6);
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  color: #0a192f;
}

.stat-big-target {
  font-size: 18px;
  font-weight: 700;
  color: #0a192f;
}

.stat-metric-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 10px;
}

.stat-current {
  font-size: 14px;
  font-weight: 600;
  color: #0a192f;
}

.stat-target-label {
  font-size: 11px;
  color: #78716c;
  font-weight: 600;
}

.stat-bar-container {
  display: flex;
  gap: 3px;
  align-items: flex-end;
  height: 48px;
}

.bar-tick {
  flex: 1;
  height: 100%;
  background-color: rgba(10, 25, 47, 0.15);
  border-radius: 2px;
  transform-origin: bottom;
  transition:
    background-color 0.5s ease,
    transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.bar-tick.active {
  background-color: #0a192f;
  animation: bar-grow 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) backwards;
}

@keyframes bar-grow {
  from {
    transform: scaleY(0);
  }
  to {
    transform: scaleY(1);
  }
}

.bar-tick.active {
  background-color: #0a192f;
}

/* Card 3: Photo */
.card-photo {
  position: relative;
  overflow: hidden;
}

.photo-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 6s cubic-bezier(0.16, 1, 0.3, 1);
}

.card-photo:hover .photo-img {
  transform: scale(1.05);
}

.achievement-pill {
  position: absolute;
  bottom: 20px;
  left: 20px;
  background-color: #ffffff;
  padding: 10px 16px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 10px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  border: 1px solid #e2e8f0;
}

.achievement-dot {
  width: 8px;
  height: 8px;
  background-color: #1e3a8a;
  border-radius: 50%;
  animation: pulse-dot 2.4s ease-in-out infinite;
}

@keyframes pulse-dot {
  0%,
  100% {
    box-shadow: 0 0 0 0 rgba(30, 58, 138, 0.4);
  }
  50% {
    box-shadow: 0 0 0 6px rgba(30, 58, 138, 0);
  }
}

.pill-title {
  display: block;
  font-size: 12px;
  font-weight: 700;
  color: #0a192f;
}

.pill-sub {
  display: block;
  font-size: 10px;
  color: #64748b;
}

/* ================= RESPONSIVE ================= */
@media (prefers-reduced-motion: reduce) {
  .bar-tick,
  .avatar,
  .photo-img,
  .achievement-dot {
    transition: none;
    animation: none;
  }
}

@media (max-width: 992px) {
  .hero-top {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .hero-headline {
    font-size: 44px;
  }

  .hero-grid {
    grid-template-columns: 1fr;
    min-height: auto;
  }

  .card-photo {
    min-height: 280px;
  }
  .card-cream {
    gap: 82px;
  }
  .stat-metric-row {
    margin-bottom: 15px;
  }
}
</style>
