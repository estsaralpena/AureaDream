/**
 * Header: mostrar/ocultar según scroll y hover
 */
const navbar = document.querySelector(".contentHeader-sectionHero-aureaDream");

if (navbar) {
  let scrollTimeout = null;
  const HIDE_DELAY = 1200;

  window.addEventListener("scroll", () => {
    navbar.classList.remove("header-hidden");
    navbar.classList.toggle("activeBgHeaderPage", window.scrollY > 0);

    clearTimeout(scrollTimeout);
    if (window.scrollY > 0) {
      scrollTimeout = setTimeout(() => navbar.classList.add("header-hidden"), HIDE_DELAY);
    }
  });

  navbar.addEventListener("mouseenter", () => {
    clearTimeout(scrollTimeout);
    navbar.classList.remove("header-hidden");
  });

  navbar.addEventListener("mouseleave", () => {
    if (window.scrollY > 0) {
      scrollTimeout = setTimeout(() => navbar.classList.add("header-hidden"), HIDE_DELAY);
    }
  });
}
