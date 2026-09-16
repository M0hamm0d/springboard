<template>
  <section class="tutors-section">
    <div class="tutors-container">
      <!-- Section Header -->
      <div v-reveal class="section-header">
        <span class="header-badge">Distinguished Faculty</span>
        <h2 class="section-title">Learn From Experienced Professionals</h2>
        <p class="section-desc">
          Our classes are delivered by qualified and experienced tutors who
          combine professional knowledge with a commitment to helping students
          understand and succeed.
        </p>
      </div>

      <!-- Tutor Cards Grid (4 Columns) -->
      <div class="tutors-grid">
        <div
          v-for="(tutor, index) in tutors"
          :key="index"
          v-reveal="{ delay: index * 120 }"
          class="tutor-card"
        >
          <!-- Portrait Placeholder Area -->
          <div class="tutor-photo-wrapper">
            <div class="tutor-avatar-placeholder">
              <svg
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#64748B"
                stroke-width="1.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <!-- Discipline Badge -->
            <span class="subject-tag">{{ tutor.discipline }}</span>
          </div>

          <!-- Tutor Credentials & Info -->
          <div class="tutor-info">
            <h3 class="tutor-name">{{ tutor.name }}</h3>
            <p class="tutor-designation">{{ tutor.qualification }}</p>
            <span class="tutor-experience">{{ tutor.experience }}</span>
          </div>

          <!-- Profile Link -->
          <div class="tutor-footer">
            <a
              href="#"
              class="profile-link"
              @click.prevent="viewProfile(tutor.name)"
            >
              <span>View Profile</span>
              <svg
                class="link-arrow"
                width="14"
                height="14"
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

      <!-- Bottom Accreditation Footnote -->
      <div v-reveal="{ delay: 200 }" class="tutors-footer-banner">
        <div class="banner-icon">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#0A192F"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="m9 12 2 2 4-4" />
          </svg>
        </div>
        <p class="banner-text">
          All Springboard lecture streams are led by certified ICAN Fellows and
          seasoned practitioner associates.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "TutorsSection",
  data() {
    return {
      tutors: [
        {
          name: "[Tutor Name]",
          qualification: "B.Sc, FCA, ACTI",
          discipline: "Financial Reporting & Audit",
          experience: "Lead ICAN Faculty Member",
        },
        {
          name: "[Tutor Name]",
          qualification: "M.Sc, ACA, ACCA",
          discipline: "Taxation & Fiscal Policy",
          experience: "Senior Tax Consultant",
        },
        {
          name: "[Tutor Name]",
          qualification: "B.Sc, ACA, ACMA",
          discipline: "Management Accounting & PM",
          experience: "Corporate Finance Lead",
        },
        {
          name: "[Tutor Name]",
          qualification: "MBA, FCA",
          discipline: "Corporate Strategy & Governance",
          experience: "Past Diet Assessor",
        },
      ],
    };
  },
  methods: {
    viewProfile(name) {
      console.log("Open profile for:", name);
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

.tutors-section {
  width: 100%;
  background-color: #faf8f5; /* Warm background */
  padding: 92px 24px 100px;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-family: Satoshi;
  color: #1f2937;
}

.tutors-container {
  max-width: 1200px;
  margin: 0 auto;
}
/* ================= SECTION HEADER ================= */
.section-header {
  text-align: center;
  max-width: 680px;
  margin: 0 auto 56px;
}

.header-badge {
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #1e3a8a;
  background-color: #ffffff;
  border: 1px solid #e9dfce;
  padding: 5px 14px;
  border-radius: 999px;
  margin-bottom: 14px;
}

.section-title {
  font-family: "Cormorant Garamond", Georgia, serif;
  font-size: 44px;
  font-weight: 700;
  color: #0a192f;
  letter-spacing: -0.02em;
  line-height: 1.15;
  margin-bottom: 14px;
}

.section-desc {
  font-size: 15px;
  line-height: 1.65;
  color: #4b5563;
}

/* ================= TUTORS GRID ================= */
.tutors-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 22px;
  margin-bottom: 48px;
}

.tutor-card {
  background-color: #ffffff;
  border: 1px solid #e9dfce;
  border-radius: 14px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    border-color 0.2s ease;
}

.tutor-card:hover {
  transform: translateY(-4px);
  border-color: #cbd5e1;
  box-shadow: 0 12px 24px -6px rgba(10, 25, 47, 0.08);
}

/* --- Placeholder Photo Framing --- */
.tutor-photo-wrapper {
  position: relative;
  width: 100%;
  height: 220px;
  background-color: #f1efea;
  border-bottom: 1px solid #e9dfce;
  display: flex;
  align-items: center;
  justify-content: center;
}

.tutor-avatar-placeholder {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background-color: #faf8f5;
  border: 1px solid #e9dfce;
  display: flex;
  align-items: center;
  justify-content: center;
}

.subject-tag {
  position: absolute;
  bottom: 12px;
  left: 12px;
  background-color: rgba(10, 25, 47, 0.9);
  color: #f5e6c8;
  font-size: 10px;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 6px;
  letter-spacing: 0.02em;
}

/* --- Info Section --- */
.tutor-info {
  padding: 22px 20px 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.tutor-name {
  font-size: 18px;
  font-weight: 700;
  color: #0a192f;
  letter-spacing: -0.01em;
  margin-bottom: 6px;
}

.tutor-designation {
  font-size: 13px;
  font-weight: 600;
  color: #1e3a8a;
  margin-bottom: 6px;
  letter-spacing: 0.02em;
}

.tutor-experience {
  font-size: 12px;
  color: #64748b;
  line-height: 1.4;
}

/* --- Footer Link --- */
.tutor-footer {
  padding: 14px 20px 20px;
  border-top: 1px solid #faf8f5;
}

.profile-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  font-weight: 700;
  color: #0a192f;
  text-decoration: none;
  transition:
    gap 0.2s ease,
    color 0.2s ease;
}

.link-arrow {
  transition: transform 0.2s ease;
}

.profile-link:hover {
  color: #1e3a8a;
}

.tutor-card:hover .link-arrow {
  transform: translateX(4px);
}

.tutor-card:hover .profile-link {
  color: #1e3a8a;
}

/* ================= BOTTOM FOOTNOTE BANNER ================= */
.tutors-footer-banner {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background-color: #ffffff;
  border: 1px solid #e9dfce;
  padding: 16px 24px;
  border-radius: 10px;
  max-width: 800px;
  margin: 0 auto;
}

.banner-icon {
  width: 32px;
  height: 32px;
  border-radius: 6px;
  background-color: #f5e6c8;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.banner-text {
  font-size: 13px;
  color: #4b5563;
  font-weight: 500;
  line-height: 1.4;
}

/* ================= RESPONSIVE ================= */
@media (max-width: 1024px) {
  .tutors-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
}

@media (max-width: 640px) {
  .tutors-grid {
    grid-template-columns: 1fr;
  }

  .tutors-section {
    padding: 64px 20px 72px;
  }

  .section-title {
    font-size: 32px;
  }

  .tutors-footer-banner {
    flex-direction: column;
    text-align: center;
  }
}
</style>
