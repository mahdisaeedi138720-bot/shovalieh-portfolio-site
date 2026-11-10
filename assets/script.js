// Shovalieh Tech portfolio — small interactions
document.addEventListener("DOMContentLoaded", () => {
  // reveal cards/sections on scroll
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("in"); obs.unobserve(e.target); }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll(".card, .facts li, .hero h1").forEach((el) => {
    el.classList.add("reveal");
    obs.observe(el);
  });
});
