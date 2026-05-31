import { useEffect } from "react";

export function useScrollReveal(selector = ".reveal-on-scroll", options = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }) {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-reveal");
          entry.target.classList.remove("opacity-0", "translate-y-4"); // if we set initial state
          observer.unobserve(entry.target);
        }
      });
    }, options);

    const elements = document.querySelectorAll(selector);
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, [selector, options]);
}

