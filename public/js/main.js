const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");
const navbar = document.getElementById("navbar");

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// --- Preloader: sembunyikan saat halaman siap ---
const preloader = document.getElementById("preloader");
if (preloader) {
  const hidePreloader = () => preloader.classList.add("hide");
  window.addEventListener("load", () => setTimeout(hidePreloader, 500));
  // Fallback: pastikan tidak menggantung lebih dari 4 detik.
  setTimeout(hidePreloader, 4000);
}

// --- Toggle menu mobile (hamburger -> X) ---
menuBtn.addEventListener("click", () => {
  const open = navMenu.classList.toggle("active");
  menuBtn.classList.toggle("open", open);
  menuBtn.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    menuBtn.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

// --- Navbar berubah saat scroll ---
const onScroll = () => {
  navbar.classList.toggle("scrolled", window.scrollY > 30);

  // Parallax halus pada background hero
  if (!reduceMotion) {
    const bg = document.querySelector(".hero-bg");
    if (bg) bg.style.transform = `translateY(${window.scrollY * 0.25}px)`;
  }
};
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// --- Reveal saat masuk viewport ---
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// --- Counter angka pada hero stats ---
const animateCounter = (el) => {
  const target = Number(el.dataset.target) || 0;
  const suffix = el.dataset.suffix || "";

  if (reduceMotion) {
    el.textContent = target + suffix;
    return;
  }

  const duration = 1600;
  let start = null;

  const step = (timestamp) => {
    if (start === null) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    // ease-out
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(target * eased) + suffix;
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
};

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);
document.querySelectorAll(".counter").forEach((el) => counterObserver.observe(el));

// --- Scroll spy: tandai link navbar yang sedang dilihat ---
const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".nav-menu a");

const spy = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach((link) =>
          link.classList.toggle("active", link.getAttribute("href") === `#${id}`)
        );
      }
    });
  },
  { rootMargin: "-45% 0px -50% 0px" }
);
sections.forEach((sec) => spy.observe(sec));
