// LENIS SMOOTH SCROLL
const lenis = new Lenis({
  lerp: 0.1,
  wheelMultiplier: 0.7,
  gestureOrientation: "vertical",
  normalizeWheel: false,
  smoothTouch: false,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Scroll event for navbar animation
let lastScrollTop = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  let scrollTop = window.scrollY;

  if (scrollTop > lastScrollTop) {
    // Scroller ned → skjul navbar
    navbar.style.transform = "translateY(-100%)";
  } else {
    // Scroller op → vis navbar
    navbar.style.transform = "translateY(0)";
  }

  lastScrollTop = scrollTop;
});

// Optional: Controls for Lenis Smooth Scroll
document.querySelectorAll("[data-lenis-start]").forEach((el) => {
  el.addEventListener("click", () => lenis.start());
});

document.querySelectorAll("[data-lenis-stop]").forEach((el) => {
  el.addEventListener("click", () => lenis.stop());
});

document.querySelectorAll("[data-lenis-toggle]").forEach((el) => {
  el.addEventListener("click", function () {
    this.classList.toggle("stop-scroll");
    if (this.classList.contains("stop-scroll")) {
      lenis.stop();
    } else {
      lenis.start();
    }
  });
});
