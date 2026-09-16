// Count-up directive: animates a number from 0 to its target the first time
// it scrolls into view.
//
// Usage:
//   v-count-up="{ target: 1200, suffix: '+', duration: 1600 }"
//
// Elements without a numeric target (e.g. placeholder text like "XXXX+") are
// left untouched, so real numbers can be dropped in later without changes.

const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

const configs = new WeakMap();
let observer = null;

function getObserver() {
  if (observer) return observer;
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        observer.unobserve(entry.target);
        const { target, duration, suffix } = configs.get(entry.target) || {};
        if (target == null) continue;
        animate(entry.target, target, duration, suffix);
      }
    },
    { threshold: 0.4 }
  );
  return observer;
}

function animate(el, target, duration, suffix) {
  const render = (value) => {
    el.textContent = Math.round(value).toLocaleString() + suffix;
  };

  const start = performance.now();
  const tick = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    render(target * easeOutCubic(progress));
    if (progress < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

export const countUp = {
  mounted(el, binding) {
    const opts = binding.value || {};
    let { duration = 1500 } = opts;
    let target = Number(opts.target);
    let suffix = opts.suffix || "";

    // No explicit target: derive it from the element's own text (e.g. "1,200+"
    // -> 1200 with a "+" suffix). Placeholder text like "XXXX+" has no digits
    // and is left untouched, so real numbers start animating automatically.
    if (!Number.isFinite(target)) {
      const match = (el.textContent || "").trim().match(/([\d.,]+)\s*(.*)$/);
      if (match) {
        target = Number(match[1].replace(/,/g, ""));
        suffix = suffix || match[2];
      }
    }

    if (!Number.isFinite(target)) return; // placeholder text — leave as-is

    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      el.textContent = Math.round(target).toLocaleString() + suffix;
      return;
    }

    configs.set(el, { target, duration, suffix });
    el.textContent = "0" + suffix;
    getObserver().observe(el);
  },
  unmounted(el) {
    observer?.unobserve(el);
    configs.delete(el);
  },
};

export default countUp;
