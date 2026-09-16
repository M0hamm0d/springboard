// Scroll-reveal directive: animates an element the first time it enters the viewport.
//
// Usage:
//   v-reveal                      -> fade up (default)
//   v-reveal:left                 -> slide in from the left
//   v-reveal:right                -> slide in from the right
//   v-reveal:zoom                 -> scale up from slightly smaller
//   v-reveal="{ delay: 120 }"     -> fade up with a 120ms stagger delay
//
// Inline styles are cleaned up once the transition finishes so component-level
// hover transitions (transform, box-shadow...) keep working afterwards.

const TRANSFORMS = {
  up: "translateY(28px)",
  left: "translateX(-36px)",
  right: "translateX(36px)",
  zoom: "scale(0.94)",
};

const EASE = "cubic-bezier(0.16, 1, 0.3, 1)";

const configs = new WeakMap();
let observer = null;

function getObserver() {
  if (observer) return observer;
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        observer.unobserve(entry.target);
        revealElement(entry.target);
      }
    },
    { threshold: 0.15, rootMargin: "0px 0px -48px 0px" }
  );
  return observer;
}

function revealElement(el) {
  const { delay = 0 } = configs.get(el) || {};

  el.style.transition = `opacity 0.8s ${EASE} ${delay}ms, transform 0.8s ${EASE} ${delay}ms`;
  el.style.opacity = "1";
  el.style.transform = "none";

  const cleanup = () => {
    el.style.opacity = "";
    el.style.transform = "";
    el.style.transition = "";
    el.style.willChange = "";
  };

  el.addEventListener("transitionend", cleanup, { once: true });
  // Fallback in case transitionend never fires (e.g. background tab).
  setTimeout(cleanup, delay + 1000);
}

export const reveal = {
  mounted(el, binding) {
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;

    const value = binding.value;
    const options = typeof value === "number" ? { delay: value } : value || {};
    const delay = Number(options.delay) || 0;

    configs.set(el, { delay });
    el.style.opacity = "0";
    el.style.transform = TRANSFORMS[binding.arg] || TRANSFORMS.up;
    el.style.willChange = "opacity, transform";

    getObserver().observe(el);
  },
  unmounted(el) {
    observer?.unobserve(el);
    configs.delete(el);
  },
};

export default reveal;
