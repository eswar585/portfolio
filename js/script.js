const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});

const orb = document.querySelector(".hero-orb");

document.addEventListener("mousemove", (event) => {
  if (!orb) return;

  const x = (event.clientX / window.innerWidth - 0.5) * 25;
  const y = (event.clientY / window.innerHeight - 0.5) * 25;

  orb.style.marginLeft = `${x}px`;
  orb.style.marginTop = `${y}px`;
});
