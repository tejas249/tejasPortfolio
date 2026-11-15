import { useEffect, useRef, useState } from "react";

// Minimal, dependency-free "is this element on screen" hook.
// Resolves immediately for content that's already visible at mount
// (above-the-fold), instead of waiting on an IntersectionObserver tick
// that may not fire until the next scroll/paint in some environments.
export const useInView = ({ once = true, margin = "0px", amount = 0 } = {}) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const alreadyVisible =
      rect.bottom > 0 &&
      rect.right > 0 &&
      rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
      rect.left < (window.innerWidth || document.documentElement.clientWidth);

    if (alreadyVisible) {
      setInView(true);
      if (once) return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { rootMargin: margin, threshold: amount }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [once, margin, amount]);

  return [ref, inView];
};
