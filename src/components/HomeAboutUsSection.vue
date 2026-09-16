<template>
  <section class="about-section">
    <div class="about-container">
      <!-- Top Centered Heading -->
      <div class="about-header">
        <span v-reveal class="about-pill">About Springboard Associates</span>
        <h2 v-reveal="{ delay: 100 }" class="about-headline">Where Ambition Meets Excellence</h2>
      </div>

      <!-- Asymmetric 5-Block Grid Matching Reference Image -->
      <div class="mosaic-grid">
        <!-- Column 1: Stat (Top) + Classroom Photo (Bottom) -->
        <div class="mosaic-col">
          <div v-reveal="{ delay: 100 }" class="card card-navy-stat">
            <span v-count-up="{ target: 1200, suffix: '+', duration: 1800 }" class="stat-number">1,200+</span>
            <p class="stat-caption">
              Associate Accounting Technicians (AATs) and Chartered Accountants
              (ACAs) produced through our structured diets.
            </p>
          </div>
          <div v-reveal="{ delay: 250 }" class="card card-image-short">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
              alt="Students collaborating during review"
              class="grid-img"
            />
          </div>
        </div>

        <!-- Column 2: Center Tall Photo with Quality Seal -->
        <div class="mosaic-col">
          <div v-reveal:zoom class="card card-tall-photo">
            <img
              src="/ican-1.webp"
              alt="Student preparing accounting materials"
              class="grid-img"
            />
            <!-- <img
              src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1000&q=80"
              alt="Student preparing accounting materials"
              class="grid-img"
            /> -->
            <div class="tall-card-overlay">
              <span class="overlay-tag">ICAN Recognized Center</span>
              <p class="overlay-title">Syllabus-Aligned Rigor & Mentorship</p>
            </div>
          </div>
        </div>

        <!-- Column 3: Faculty Photo (Top) + Institutional Motto (Bottom) -->
        <div class="mosaic-col">
          <div v-reveal="{ delay: 100 }" class="card card-image-short">
            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80"
              alt="Faculty tutor mentoring candidates"
              class="grid-img"
            />
          </div>

          <!-- Motto Block (Cream #F5E6C8) -->
          <div v-reveal="{ delay: 250 }" class="card card-motto">
            <div class="motto-badge">Our Institutional Motto</div>
            <div class="motto-body">
              <h3 class="motto-latin">Ora Et Labora</h3>
              <p class="motto-translation">"Pray and Work"</p>
            </div>
            <p class="motto-note">
              Balancing relentless intellectual effort with core institutional
              values and discipline.
            </p>
          </div>
        </div>
      </div>

      <!-- Bottom Split Narrative Row -->
      <div class="about-bottom">
        <div v-reveal="{ delay: 100 }" class="about-bottom-left">
          <h3 class="bottom-punchline">
            Preparing tomorrow’s chartered accountants through expert teaching
            and proven exam success.
          </h3>
        </div>
        <div v-reveal="{ delay: 220 }" class="about-bottom-right">
          <p class="bottom-text">
            Springboard Associates SATC is an ICAN Accredited Tuition Centre
            committed to providing quality professional accounting education.
            Through dedicated tutors, structured learning, and a strong culture
            of discipline, we prepare aspiring candidates to clear their diets
            decisively and step confidently into the global financial
            marketplace.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutSection",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;1,400;1,600&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.about-section {
  width: 100%;
  background-color: #ffffff;
  padding: 88px 24px 96px;
  font-family: "Plus Jakarta Sans", sans-serif;
  color: #1f2937;
}

.about-container {
  max-width: 1200px;
  margin: 0 auto;
}

/* ================= SECTION HEADER ================= */
.about-header {
  text-align: center;
  margin-bottom: 56px;
}

.about-pill {
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #1e3a8a;
  background-color: #faf8f5;
  border: 1px solid #e9dfce;
  padding: 5px 14px;
  border-radius: 999px;
  margin-bottom: 14px;
}

.about-headline {
  font-family: "Cormorant Garamond", Georgia, serif;
  font-size: 46px;
  font-weight: 700;
  color: #0a192f;
  letter-spacing: -0.02em;
  line-height: 1.15;
}

/* ================= MOSAIC GRID ================= */
.mosaic-grid {
  display: grid;
  grid-template-columns: 1fr 1.25fr 1fr;
  gap: 20px;
  margin-bottom: 64px;
}

.mosaic-col {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.card {
  border-radius: 18px;
  overflow: hidden;
  position: relative;
}

.grid-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* --- Left Column: Navy Stat Card --- */
.card-navy-stat {
  background-color: #0a192f;
  color: #ffffff;
  padding: 32px 24px;
  min-height: 190px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid #172e4d;
}

.stat-number {
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 42px;
  font-weight: 800;
  color: #f5e6c8;
  line-height: 1;
  margin-bottom: 12px;
  letter-spacing: -0.03em;
}

.stat-caption {
  font-size: 13px;
  line-height: 1.55;
  color: #cbd5e1;
}

/* --- Photo heights --- */
.card-image-short {
  height: 220px;
}

/* --- Center Column: Tall Photo --- */
.card-tall-photo {
  height: 430px;
  position: relative;
}

.tall-card-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 32px 24px 24px;
  background: linear-gradient(
    180deg,
    rgba(10, 25, 47, 0) 0%,
    rgba(10, 25, 47, 0.85) 100%
  );
  color: #ffffff;
}

.overlay-tag {
  display: inline-block;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #f5e6c8;
  margin-bottom: 6px;
}

.overlay-title {
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  line-height: 1.3;
}

/* --- Right Column: Motto Card (#F5E6C8) --- */
.card-motto {
  background-color: #f5e6c8;
  padding: 28px 24px;
  min-height: 190px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #e9dfce;
}

.motto-badge {
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #78716c;
}

.motto-body {
  margin: 10px 0;
}

.motto-latin {
  font-family: "Cormorant Garamond", Georgia, serif;
  font-size: 28px;
  font-weight: 700;
  font-style: italic;
  color: #0a192f;
  line-height: 1.1;
}

.motto-translation {
  font-size: 14px;
  font-weight: 600;
  color: #1e3a8a;
  margin-top: 4px;
}

.motto-note {
  font-size: 11px;
  line-height: 1.45;
  color: #57534e;
}

/* ================= BOTTOM SPLIT NARRATIVE ================= */
.about-bottom {
  display: grid;
  grid-template-columns: 1.1fr 1.25fr;
  gap: 56px;
  align-items: flex-start;
  padding-top: 36px;
  border-top: 1px solid #e9dfce;
}

.bottom-punchline {
  font-family: "Cormorant Garamond", Georgia, serif;
  font-size: 32px;
  font-weight: 600;
  color: #0a192f;
  line-height: 1.25;
  letter-spacing: -0.01em;
}

.bottom-text {
  font-size: 15px;
  line-height: 1.7;
  color: #4b5563;
}

/* ================= RESPONSIVE ================= */
@media (max-width: 960px) {
  .about-headline {
    font-size: 38px;
  }

  .mosaic-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .card-tall-photo {
    height: 320px;
  }

  .card-image-short {
    height: 240px;
  }

  .about-bottom {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .bottom-punchline {
    font-size: 26px;
  }
}
</style>
