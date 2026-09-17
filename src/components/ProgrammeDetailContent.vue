<template>
  <section class="detail-content">
    <div class="content-container">
      <div class="content-grid">
        <!-- ============ MAIN COLUMN ============ -->
        <div class="content-main">
          <!-- Entry Requirements -->
          <div v-reveal id="requirements" class="info-block">
            <h2 class="block-title">Entry Requirements</h2>
            <ul class="req-list">
              <li v-for="(req, i) in programme.entryRequirements" :key="i" class="req-item">
                <span class="req-check">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </span>
                <span>{{ req }}</span>
              </li>
            </ul>
            <p class="req-note">
              Requirements can change per ICAN policy —
              <a :href="syllabusUrl" target="_blank" rel="noopener" class="inline-link">see ICAN's official syllabus page</a>
              for the current rules.
            </p>
          </div>

          <!-- Subjects -->
          <div v-reveal id="subjects" class="info-block">
            <h2 class="block-title">Subjects</h2>
            <div class="subject-grid">
              <div v-for="(subject, i) in programme.subjects" :key="i" class="subject-card">
                <span class="subject-index">{{ String(i + 1).padStart(2, "0") }}</span>
                <span class="subject-name">{{ subject }}</span>
              </div>
            </div>
          </div>

          <!-- What you'll learn -->
          <div v-reveal id="learn" class="info-block">
            <h2 class="block-title">What You'll Learn</h2>
            <p class="learn-text">{{ programme.learn }}</p>
          </div>

          <!-- Class options -->
          <div v-reveal id="classes" class="info-block">
            <h2 class="block-title">Class Options</h2>
            <div class="class-grid">
              <div v-for="(option, i) in classOptions" :key="i" class="class-card">
                <div class="class-icon" v-html="option.icon"></div>
                <h3 class="class-name">{{ option.name }}</h3>
                <p class="class-desc">{{ option.desc }}</p>
              </div>
            </div>
          </div>

          <!-- Tutors -->
          <div v-reveal id="tutors" class="info-block">
            <h2 class="block-title">Tutors for This Programme</h2>
            <div class="tutor-row">
              <div class="tutor-chip">
                <span class="tutor-initial">T</span>
                <span class="tutor-name">[Tutor Name]</span>
              </div>
              <div class="tutor-chip">
                <span class="tutor-initial">T</span>
                <span class="tutor-name">[Tutor Name]</span>
              </div>
              <a href="#" class="tutor-link" @click.prevent="handleTutors">
                View all tutors
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </a>
            </div>
          </div>

          <!-- Timetable -->
          <div v-reveal id="timetable" class="info-block">
            <h2 class="block-title">Timetable</h2>
            <div class="timetable-card">
              <p class="timetable-text">
                Weekend, weekday and evening batches are available at every
                level. The full slot-by-slot timetable is published each diet.
              </p>
              <a href="#" class="btn-line" @click.prevent="handleTimetable">
                View Full Timetable
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </a>
            </div>
          </div>

          <!-- Study Materials -->
          <div v-reveal id="materials" class="info-block">
            <h2 class="block-title">Study Materials</h2>
            <div class="materials-row">
              <div v-for="(mat, i) in programme.materials" :key="i" class="material-pill">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                {{ mat }}
              </div>
            </div>
          </div>
        </div>

        <!-- ============ SIDE COLUMN ============ -->
        <aside class="content-side">
          <div v-reveal:zoom class="fees-card">
            <span class="fees-tag">Fees</span>
            <div class="fee-row">
              <span class="fee-label">Full level</span>
              <span class="fee-value">{{ fees.full || "₦[amount]" }}</span>
            </div>
            <div class="fee-row">
              <span class="fee-label">Per subject</span>
              <span class="fee-value">{{ fees.perSubject || "₦[amount]" }}</span>
            </div>
            <div class="fee-row">
              <span class="fee-label">Registration fee</span>
              <span class="fee-value">{{ fees.registration || "₦[amount]" }}</span>
            </div>
            <div class="fees-note">Installment plans available — ask when enrolling.</div>
            <a class="btn-fees" :href="enrollHref" target="_blank" rel="noopener">
              Enroll for {{ programme.name }}
            </a>
          </div>

          <div v-reveal:zoom="{ delay: 150 }" class="diet-card">
            <span class="diet-tag">Next Examination Diet</span>
            <p class="diet-date">{{ dietText }}</p>
            <a class="diet-link" :href="examCalendarUrl" target="_blank" rel="noopener">
              ICAN Exam Calendar
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>
            </a>
          </div>

          <div v-reveal:zoom="{ delay: 250 }" class="quicknav-card">
            <span class="quicknav-tag">On This Page</span>
            <nav class="quicknav-list">
              <a href="#requirements" class="quicknav-link" @click.prevent="scrollTo('requirements')">Entry Requirements</a>
              <a href="#subjects" class="quicknav-link" @click.prevent="scrollTo('subjects')">Subjects</a>
              <a href="#learn" class="quicknav-link" @click.prevent="scrollTo('learn')">What You'll Learn</a>
              <a href="#classes" class="quicknav-link" @click.prevent="scrollTo('classes')">Class Options</a>
              <a href="#tutors" class="quicknav-link" @click.prevent="scrollTo('tutors')">Tutors</a>
              <a href="#timetable" class="quicknav-link" @click.prevent="scrollTo('timetable')">Timetable</a>
              <a href="#materials" class="quicknav-link" @click.prevent="scrollTo('materials')">Study Materials</a>
            </nav>
          </div>
        </aside>
      </div>
    </div>
  </section>
</template>

<script>
import {
  ICAN_EXAM_CALENDAR_URL,
  ICAN_SYLLABUS_URL,
  waLink,
  classOptions,
} from "@/data/programmes";

export default {
  name: "ProgrammeDetailContent",
  props: {
    programme: { type: Object, required: true },
  },
  data() {
    return {
      classOptions,
      syllabusUrl: ICAN_SYLLABUS_URL,
      examCalendarUrl: ICAN_EXAM_CALENDAR_URL,
    };
  },
  computed: {
    fees() {
      return this.programme.fees || {};
    },
    dietText() {
      // PLACEHOLDER: keep synced with ICAN's official exam calendar
      return "[Month/Year]";
    },
    enrollHref() {
      return waLink(
        `Hello Springboard! I'd like to enroll for ${this.programme.name}. Please share the current fees.`
      );
    },
  },
  methods: {
    handleTutors() {
      console.log("Navigate to tutors page");
    },
    handleTimetable() {
      console.log("Navigate to full timetable");
    },
    scrollTo(id) {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.detail-content {
  width: 100%;
  background-color: #faf8f5;
  border-top: 1px solid #e9dfce;
  border-bottom: 1px solid #e9dfce;
  padding: 72px 24px 88px;
  font-family: "DM Sans", "DM Sans Fallback", "DM Sans", system-ui, sans-serif;
  color: #1f2937;
}

.content-container {
  max-width: 1200px;
  margin: 0 auto;
}

.content-grid {
  display: grid;
  grid-template-columns: 1.6fr 1fr;
  gap: 40px;
  align-items: start;
}

.content-main {
  display: flex;
  flex-direction: column;
  gap: 44px;
}

/* ================= INFO BLOCKS ================= */
.block-title {
  font-family: "Cormorant Garamond", Georgia, serif;
  font-size: 30px;
  font-weight: 700;
  color: #0a192f;
  letter-spacing: -0.01em;
  margin-bottom: 20px;
}

/* --- Requirements --- */
.req-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 14px;
}

.req-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 14px;
  line-height: 1.6;
  color: #4b5563;
}

.req-check {
  width: 20px;
  height: 20px;
  border-radius: 6px;
  background-color: #f5e6c8;
  color: #0a192f;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 1px;
}

.req-note {
  font-size: 12px;
  color: #94a3b8;
  line-height: 1.5;
}

.inline-link {
  color: #1e3a8a;
  font-weight: 600;
  text-decoration: underline;
}

/* --- Subjects --- */
.subject-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

.subject-card {
  background-color: #ffffff;
  border: 1px solid #e9dfce;
  border-radius: 12px;
  padding: 16px 18px;
  display: flex;
  align-items: center;
  gap: 14px;
  transition:
    transform 0.2s ease,
    border-color 0.2s ease;
}

.subject-card:hover {
  transform: translateY(-2px);
  border-color: #cbd5e1;
}

.subject-index {
  font-size: 12px;
  font-weight: 800;
  color: #1e3a8a;
  letter-spacing: 0.04em;
}

.subject-name {
  font-size: 14px;
  font-weight: 600;
  color: #0a192f;
}

/* --- Learn --- */
.learn-text {
  font-size: 15px;
  line-height: 1.7;
  color: #4b5563;
  max-width: 640px;
}

/* --- Class options --- */
.class-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.class-card {
  background-color: #ffffff;
  border: 1px solid #e9dfce;
  border-radius: 14px;
  padding: 24px;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.class-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 24px -10px rgba(10, 25, 47, 0.12);
}

.class-icon {
  width: 42px;
  height: 42px;
  border-radius: 10px;
  background-color: #f5e6c8;
  color: #0a192f;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
}

.class-name {
  font-size: 15px;
  font-weight: 700;
  color: #0a192f;
  margin-bottom: 6px;
}

.class-desc {
  font-size: 13px;
  line-height: 1.6;
  color: #4b5563;
}

/* --- Tutors --- */
.tutor-row {
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
}

.tutor-chip {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background-color: #ffffff;
  border: 1px solid #e9dfce;
  border-radius: 999px;
  padding: 8px 16px 8px 8px;
}

.tutor-initial {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #0a192f;
  color: #f5e6c8;
  font-size: 12px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
}

.tutor-name {
  font-size: 13px;
  font-weight: 600;
  color: #0a192f;
}

.tutor-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  font-weight: 700;
  color: #1e3a8a;
  text-decoration: none;
}

.tutor-link svg {
  transition: transform 0.2s ease;
}

.tutor-link:hover svg {
  transform: translateX(4px);
}

/* --- Timetable --- */
.timetable-card {
  background-color: #ffffff;
  border: 1px solid #e9dfce;
  border-radius: 14px;
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
}

.timetable-text {
  font-size: 14px;
  line-height: 1.6;
  color: #4b5563;
  max-width: 420px;
}

.btn-line {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  font-weight: 700;
  color: #0a192f;
  background-color: #f5e6c8;
  border: 1px solid #e9dfce;
  padding: 10px 18px;
  border-radius: 8px;
  text-decoration: none;
  transition: background-color 0.2s ease;
}

.btn-line:hover {
  background-color: #ede0bf;
}

/* --- Materials --- */
.materials-row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  max-width: 640px;
}

.material-pill {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  font-size: 12px;
  font-weight: 600;
  color: #0a192f;
  background-color: #ffffff;
  border: 1px solid #e9dfce;
  border-radius: 999px;
  padding: 8px 14px;
}

.material-pill svg {
  color: #1e3a8a;
}

/* ================= SIDE COLUMN ================= */
.content-side {
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: sticky;
  top: 96px;
}

.fees-card {
  background-color: #0a192f;
  border: 1px solid #172e4d;
  border-radius: 16px;
  padding: 28px 24px;
  color: #ffffff;
}

.fees-tag {
  display: block;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #f5e6c8;
  margin-bottom: 18px;
}

.fee-row {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 10px 0;
  border-bottom: 1px dashed rgba(255, 255, 255, 0.15);
}

.fee-row:last-of-type {
  border-bottom: none;
}

.fee-label {
  font-size: 13px;
  color: #94a3b8;
}

.fee-value {
  font-size: 16px;
  font-weight: 800;
  color: #ffffff;
}

.fees-note {
  font-size: 11px;
  color: #94a3b8;
  margin-top: 14px;
}

.btn-fees {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5e6c8;
  color: #0a192f;
  font-size: 14px;
  font-weight: 700;
  padding: 13px 20px;
  border-radius: 8px;
  margin-top: 20px;
  text-decoration: none;
  transition: background-color 0.2s ease;
}

.btn-fees:hover {
  background-color: #ede0bf;
}

.diet-card {
  background-color: #f5e6c8;
  border: 1px solid #e9dfce;
  border-radius: 16px;
  padding: 24px;
}

.diet-tag {
  display: block;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 8px;
  color: #78716c;
}

.diet-date {
  font-family: "Cormorant Garamond", Georgia, serif;
  font-size: 26px;
  font-weight: 700;
  color: #0a192f;
  margin-bottom: 10px;
}

.diet-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-weight: 700;
  color: #1e3a8a;
  text-decoration: none;
}

.diet-link svg {
  transition: transform 0.2s ease;
}

.diet-link:hover svg {
  transform: translate(2px, -2px);
}

.quicknav-card {
  background-color: #ffffff;
  border: 1px solid #e9dfce;
  border-radius: 16px;
  padding: 22px 24px;
}

.quicknav-tag {
  display: block;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #94a3b8;
  margin-bottom: 12px;
}

.quicknav-list {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.quicknav-link {
  font-size: 13px;
  font-weight: 600;
  color: #4b5563;
  text-decoration: none;
  padding: 6px 0;
  transition: color 0.15s ease;
}

.quicknav-link:hover {
  color: #0a192f;
}

/* ================= RESPONSIVE ================= */
@media (max-width: 992px) {
  .content-grid {
    grid-template-columns: 1fr;
  }

  .content-side {
    position: static;
  }

  .subject-grid,
  .class-grid {
    grid-template-columns: 1fr;
  }

  .detail-content {
    padding: 56px 20px 64px;
  }
}
</style>
