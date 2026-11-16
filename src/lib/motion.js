// Shared Framer Motion variants used across sections for a consistent, premium feel.
//
// These use `animate` (mount-triggered), not `whileInView`: Framer Motion's
// native whileInView/IntersectionObserver trigger has proven unreliable in
// this stack (see SplitText's custom useInView hook for the same issue) and
// was leaving content stuck at opacity:0. Mount-triggered animation is less
// fancy (no true "reveal on scroll") but is guaranteed to actually show the
// content.

export const EASE = [0.22, 1, 0.36, 1];

export const fadeUp = (delay = 0, distance = 24) => ({
  initial: { opacity: 0, y: distance },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: EASE },
});

export const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.7, delay, ease: EASE },
});

export const staggerParent = (stagger = 0.06, delayChildren = 0) => ({
  initial: "hidden",
  animate: "visible",
  variants: {
    visible: { transition: { staggerChildren: stagger, delayChildren } },
  },
});

export const staggerChild = (distance = 16) => ({
  hidden: { opacity: 0, y: distance },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
});

export const scaleIn = (delay = 0) => ({
  initial: { opacity: 0, scale: 0.92 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, delay, ease: EASE },
});
