const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");

if (menuButton && navLinks) {
  menuButton.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");

    menuButton.setAttribute("aria-expanded", isOpen);
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}


/* =========================
   PHOTO MOUSE MOVEMENT
========================= */

const heroPhoto = document.querySelector(".hero-photo");

if (heroPhoto && window.innerWidth > 800) {
  document.addEventListener("mousemove", (event) => {

    const x =
      (event.clientX / window.innerWidth - 0.5) * 12;

    const y =
      (event.clientY / window.innerHeight - 0.5) * 12;

    heroPhoto.style.marginLeft = `${x}px`;
    heroPhoto.style.marginTop = `${y}px`;

  });
}
