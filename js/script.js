/* =====================================================
   MOBILE MENU
===================================================== */

const menuButton =
  document.querySelector(".menu-button");

const navLinks =
  document.querySelector(".nav-links");


if (menuButton && navLinks) {

  menuButton.addEventListener("click", () => {

    const isOpen =
      navLinks.classList.toggle("open");

    menuButton.setAttribute(
      "aria-expanded",
      isOpen
    );

  });


  document
    .querySelectorAll(".nav-links a")
    .forEach((link) => {

      link.addEventListener("click", () => {

        navLinks.classList.remove("open");

        menuButton.setAttribute(
          "aria-expanded",
          "false"
        );

      });

    });

}


/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections =
  document.querySelectorAll("section[id]");

const navigationLinks =
  document.querySelectorAll(".nav-links a");


window.addEventListener(
  "scroll",
  () => {

    let currentSection = "";

    sections.forEach((section) => {

      const sectionTop =
        section.offsetTop - 200;

      if (
        window.scrollY >= sectionTop
      ) {

        currentSection =
          section.getAttribute("id");

      }

    });


    navigationLinks.forEach((link) => {

      link.classList.remove("active");

      if (
        link.getAttribute("href") ===
        `#${currentSection}`
      ) {

        link.classList.add("active");

      }

    });

  }
);


/* =====================================================
   HERO PHOTO PARALLAX
===================================================== */

const heroPhoto =
  document.querySelector(".hero-photo");


if (heroPhoto) {

  document.addEventListener(
    "mousemove",
    (event) => {

      if (window.innerWidth <= 800) {
        return;
      }


      const x =
        (event.clientX /
          window.innerWidth -
          0.5) * 8;


      const y =
        (event.clientY /
          window.innerHeight -
          0.5) * 8;


      heroPhoto.style.marginLeft =
        `${x}px`;

      heroPhoto.style.marginTop =
        `${y}px`;

    }
  );

}
