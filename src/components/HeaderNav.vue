<template>
  <header class="header-wrapper">
    <!-- Slim Accreditation Top Bar
    <div class="top-bar">
      <div class="header-container top-bar-content">
        <div class="top-bar-left">
          <span class="diet-badge">Next Diet Enrollment Open</span>
          <span class="top-text">ICAN Tuition & Revision Masterclasses</span>
        </div>
        <div class="top-bar-right">
          <a href="tel:+2340000000000" class="top-link">Inquiries & Support</a>
          <span class="top-divider">•</span>
          <span class="top-link">Ilorin & Virtual Campus</span>
        </div>
      </div>
    </div> -->

    <!-- Main Navigation Bar -->
    <nav class="main-nav">
      <div class="header-container nav-content">
        <!-- Institutional Logo Mark -->
        <a href="#" class="brand-logo" @click.prevent="navigate('home')">
          <div class="logo-shield">
            <img src="/logo.jpeg" alt="Springboard Associates Logo" />
          </div>
          <div class="brand-names">
            <span class="brand-title">Springboard Associates</span>
            <span class="brand-subtitle">SATC • ICAN ACCREDITED</span>
          </div>
        </a>

        <!-- Desktop Navigation Links -->
        <ul class="nav-links">
          <li v-for="link in navLinks" :key="link.id">
            <a
              href="#"
              :class="['nav-link', { active: currentRoute === link.id }]"
              @click.prevent="navigate(link.id)"
            >
              {{ link.label }}
            </a>
          </li>
        </ul>

        <!-- Action / CTA Button -->
        <div class="nav-action">
          <button class="btn-enroll" @click="handleEnroll">Enroll Now</button>

          <!-- Mobile Hamburger Toggle -->
          <button
            class="mobile-toggle"
            :class="{ open: isMobileMenuOpen }"
            @click="toggleMobileMenu"
            aria-label="Toggle Menu"
          >
            <span class="hamburger-bar"></span>
            <span class="hamburger-bar"></span>
            <span class="hamburger-bar"></span>
          </button>
        </div>
      </div>
    </nav>

    <!-- Mobile Drawer Navigation -->
    <div v-if="isMobileMenuOpen" class="mobile-drawer">
      <ul class="mobile-links">
        <li v-for="link in navLinks" :key="'mobile-' + link.id">
          <a
            href="#"
            :class="['mobile-link', { active: currentRoute === link.id }]"
            @click.prevent="navigate(link.id)"
          >
            {{ link.label }}
          </a>
        </li>
      </ul>
      <button class="btn-enroll mobile-cta" @click="handleEnroll">
        Enroll Now
      </button>
    </div>
  </header>
</template>

<script>
export default {
  name: "NavbarHeader",
  data() {
    return {
      currentRoute: "home",
      isMobileMenuOpen: false,
      navLinks: [
        { id: "home", label: "Home" },
        { id: "about", label: "About Us" },
        { id: "programmes", label: "Programmes" },
        { id: "tutors", label: "Tutors" },
        { id: "achievements", label: "Achievements" },
        { id: "contact", label: "Contact" },
      ],
    };
  },
  methods: {
    navigate(routeId) {
      this.currentRoute = routeId;
      this.isMobileMenuOpen = false;
      console.log("Navigating to:", routeId);
    },
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
    handleEnroll() {
      this.isMobileMenuOpen = false;
      console.log("Open enrollment form/modal");
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.header-wrapper {
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: #ffffff;
  font-family: "Plus Jakarta Sans", sans-serif;
  box-shadow: 0 1px 3px rgba(10, 25, 47, 0.05);
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

/* ================= SLIM PRE-HEADER ================= */
.top-bar {
  background-color: #0a192f;
  border-bottom: 1px solid #172e4d;
  padding: 6px 0;
  font-size: 11px;
}

.top-bar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.top-bar-left,
.top-bar-right {
  display: flex;
  align-items: center;
  gap: 10px;
}

.diet-badge {
  background-color: #f5e6c8;
  color: #0a192f;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 4px;
  letter-spacing: 0.02em;
}

.top-text {
  color: #cbd5e1;
}

.top-link {
  color: #94a3b8;
  text-decoration: none;
}

.top-divider {
  color: #475569;
}

/* ================= MAIN NAV BAR ================= */
.main-nav {
  background-color: #ffffff;
  border-bottom: 1px solid #e9dfce;
}

.nav-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
}

/* Brand Identity */
.brand-logo {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
}

.logo-shield {
  /* width: 42px;
  height: 42px; */
  /* background-color: #0a192f; */
  /* border: 1px solid #e9dfce; */
  /* border-radius: 8px; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.logo-shield img {
  width: 40px;
  height: 40px;
  object-fit: contain;
}

.shield-text {
  font-size: 16px;
  font-weight: 800;
  color: #f5e6c8;
  letter-spacing: 0.05em;
}

.brand-names {
  display: flex;
  flex-direction: column;
}

.brand-title {
  font-size: 16px;
  font-weight: 700;
  color: #0a192f;
  letter-spacing: -0.01em;
  line-height: 1.2;
}

.brand-subtitle {
  font-size: 10px;
  font-weight: 600;
  color: #1e3a8a;
  letter-spacing: 0.08em;
  margin-top: 2px;
}

/* Navigation Links */
.nav-links {
  display: flex;
  align-items: center;
  gap: 28px;
  list-style: none;
}

.nav-link {
  font-size: 14px;
  font-weight: 500;
  color: #4b5563;
  text-decoration: none;
  padding: 8px 0;
  position: relative;
  transition: color 0.2s ease;
}

.nav-link:hover {
  color: #0a192f;
}

.nav-link.active {
  color: #0a192f;
  font-weight: 600;
}

.nav-link.active::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #0a192f;
  border-radius: 2px;
}

/* CTA & Mobile Controls */
.nav-action {
  display: flex;
  align-items: center;
  gap: 16px;
}

.btn-enroll {
  background-color: #0a192f;
  color: #ffffff;
  border: 1px solid #0a192f;
  padding: 10px 22px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-enroll:hover {
  background-color: #172e4d;
  border-color: #172e4d;
}

/* Hamburger Icon */
.mobile-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 24px;
  height: 18px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
}

.hamburger-bar {
  width: 100%;
  height: 2px;
  background-color: #0a192f;
  border-radius: 2px;
  transition:
    transform 0.2s ease,
    opacity 0.2s ease;
}

.mobile-toggle.open .hamburger-bar:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}

.mobile-toggle.open .hamburger-bar:nth-child(2) {
  opacity: 0;
}

.mobile-toggle.open .hamburger-bar:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

/* ================= MOBILE DRAWER ================= */
.mobile-drawer {
  display: none;
  flex-direction: column;
  background-color: #faf8f5;
  border-bottom: 1px solid #e9dfce;
  padding: 24px;
}

.mobile-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
}

.mobile-link {
  font-size: 15px;
  font-weight: 600;
  color: #4b5563;
  text-decoration: none;
}

.mobile-link.active {
  color: #0a192f;
}

.mobile-cta {
  width: 100%;
  padding: 12px;
  text-align: center;
}

/* ================= RESPONSIVE ================= */
@media (max-width: 900px) {
  .top-bar {
    display: none;
  }

  .nav-links {
    display: none;
  }

  .mobile-toggle {
    display: flex;
  }

  .mobile-drawer {
    display: flex;
  }
  .brand-names {
    display: none;
  }
}
</style>
