<template>
  <footer class="footer-wrapper">
    <div class="footer-container">
      <!-- Main Upper Grid (Matches Reference Layout) -->
      <div class="footer-grid">
        <!-- Left Brand Identity Column -->
        <div class="brand-col">
          <div class="brand-logo">
            <div class="logo-mark">
              <img src="/logo.jpeg" alt="Springboard Associates Logo" />
            </div>
            <span class="logo-text">Springboard Associates SATC</span>
          </div>
          <p class="brand-tagline">An ICAN Accredited Tuition Centre</p>
          <div class="motto-badge">
            <span class="motto-latin">Ora Et Labora</span>
            <span class="motto-sep">•</span>
            <span class="motto-eng">Pray and Work</span>
          </div>
        </div>

        <!-- Right Columns Wrapper -->
        <div class="columns-group">
          <!-- Column 1: Navigation -->
          <div class="footer-col">
            <h4 class="col-title">Navigation</h4>
            <ul class="col-links">
              <li><a href="#" @click.prevent="navigate('home')">Home</a></li>
              <li><a href="#" @click.prevent="navigate('about')">About</a></li>
              <li>
                <a href="#" @click.prevent="navigate('programmes')"
                  >Programmes</a
                >
              </li>
              <li>
                <a href="#" @click.prevent="navigate('tutors')">Tutors</a>
              </li>
              <li>
                <a href="#" @click.prevent="navigate('achievements')"
                  >Achievements</a
                >
              </li>
              <li>
                <a href="#" @click.prevent="navigate('contact')">Contact</a>
              </li>
            </ul>
          </div>

          <!-- Column 2: Contact Information -->
          <div class="footer-col">
            <h4 class="col-title">Contact</h4>
            <ul class="col-links">
              <li><a href="tel:+2340000000000">Phone</a></li>
              <li>
                <a href="https://wa.me/" target="_blank" rel="noopener"
                  >WhatsApp</a
                >
              </li>
              <li><a href="mailto:info@springboard.com">Email</a></li>
              <li><span class="static-detail">Study Centre Address</span></li>
            </ul>
          </div>

          <!-- Column 3: Connect / Social Media -->
          <div class="footer-col">
            <h4 class="col-title">Social Media</h4>
            <ul class="col-links">
              <li><a href="#" target="_blank" rel="noopener">LinkedIn</a></li>
              <li>
                <a href="#" target="_blank" rel="noopener">Twitter / X</a>
              </li>
              <li><a href="#" target="_blank" rel="noopener">Instagram</a></li>
              <li><a href="#" target="_blank" rel="noopener">Facebook</a></li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Bottom Minimalist Copyright Row -->
      <div class="footer-bottom">
        <p class="copyright-text">
          © 2026 Springboard Associates SATC. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "MainFooter",
  methods: {
    navigate(target) {
      console.log("Navigate to:", target);
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

img {
  width: 40px;
  height: 40px;
  object-fit: contain;
}

.footer-wrapper {
  width: 100%;
  background-color: #faf8f5; /* Crisp, clean institutional background */
  border-top: 1px solid #e9dfce;
  padding: 72px 24px 36px;
  font-family:
    "Plus Jakarta Sans",
    -apple-system,
    BlinkMacSystemFont,
    sans-serif;
  color: #1f2937;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
}

/* ================= UPPER GRID ================= */
.footer-grid {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 48px;
  padding-bottom: 64px;
}

/* Brand Column (Left) */
.brand-col {
  max-width: 360px;
  display: flex;
  flex-direction: column;
}

.brand-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;
}

.logo-mark {
  width: 28px;
  height: 28px;
  background-color: #0a192f;
  border: 1px solid #e9dfce;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.logo-mark span {
  color: #f5e6c8;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.05em;
}

.logo-text {
  font-size: 17px;
  font-weight: 700;
  color: #0a192f;
  letter-spacing: -0.02em;
}

.brand-tagline {
  font-size: 13px;
  color: #64748b;
  font-weight: 500;
  margin-bottom: 16px;
}

.motto-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background-color: #f5e6c8;
  border: 1px solid #e9dfce;
  padding: 4px 12px;
  border-radius: 999px;
  width: fit-content;
}

.motto-latin {
  font-size: 11px;
  font-weight: 700;
  color: #0a192f;
  letter-spacing: 0.04em;
}

.motto-sep {
  color: #78716c;
  font-size: 10px;
}

.motto-eng {
  font-size: 11px;
  color: #4b5563;
  font-weight: 500;
}

/* Link Columns Group (Right) */
.columns-group {
  display: flex;
  gap: 72px;
}

.footer-col {
  display: flex;
  flex-direction: column;
}

.col-title {
  font-size: 13px;
  font-weight: 700;
  color: #0a192f;
  margin-bottom: 20px;
  letter-spacing: -0.01em;
}

.col-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.col-links li a {
  font-size: 13px;
  color: #64748b;
  text-decoration: none;
  transition: color 0.15s ease;
}

.col-links li a:hover {
  color: #0a192f;
}

.static-detail {
  font-size: 13px;
  color: #64748b;
}

/* ================= COPYRIGHT ROW ================= */
.footer-bottom {
  border-top: 1px solid #e9dfce;
  padding-top: 24px;
}

.copyright-text {
  font-size: 12px;
  color: #94a3b8;
  line-height: 1.5;
}

/* ================= RESPONSIVE ================= */
@media (max-width: 860px) {
  .footer-grid {
    flex-direction: column;
    gap: 40px;
  }

  .columns-group {
    width: 100%;
    justify-content: space-between;
    gap: 24px;
  }
}

@media (max-width: 560px) {
  .columns-group {
    flex-direction: column;
    gap: 32px;
  }

  .footer-wrapper {
    padding: 56px 20px 28px;
  }
}
</style>
