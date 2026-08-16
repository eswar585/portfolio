/* =========================
   CURSOR GLOW
========================= */

const cursorGlow = document.createElement("div");

cursorGlow.className = "cursor-glow";

document.body.appendChild(cursorGlow);

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

window.addEventListener("mousemove", (event) => {

  mouseX = event.clientX;
  mouseY = event.clientY;

  cursorGlow.style.left = `${mouseX}px`;
  cursorGlow.style.top = `${mouseY}px`;

});


/* =========================
   NAVBAR SCROLL
========================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

  if (window.scrollY > 40) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

});


/* =========================
   HERO 3D PARALLAX
========================= */

const heroContent =
  document.querySelector(".hero-content");

const heroImage =
  document.querySelector(".hero-image");

const heroImageWrap =
  document.querySelector(".hero-image-wrap");

let targetX = 0;
let targetY = 0;

let currentX = 0;
let currentY = 0;

if (window.innerWidth > 700) {

  heroImageWrap.addEventListener(
    "mousemove",
    (event) => {

      const rect =
        heroImageWrap.getBoundingClientRect();

      const x =
        (event.clientX - rect.left) /
        rect.width;

      const y =
        (event.clientY - rect.top) /
        rect.height;

      targetX = (x - 0.5) * 12;
      targetY = (y - 0.5) * -12;

    }
  );


  heroImageWrap.addEventListener(
    "mouseleave",
    () => {

      targetX = 0;
      targetY = 0;

    }
  );


  function animateHero() {

    currentX +=
      (targetX - currentX) * 0.08;

    currentY +=
      (targetY - currentY) * 0.08;


    heroImage.style.transform =
      `rotateY(${currentX}deg)
       rotateX(${currentY}deg)`;


    requestAnimationFrame(
      animateHero
    );

  }

  animateHero();

}


/* =========================
   HERO SCROLL DEPTH
========================= */

window.addEventListener("scroll", () => {

  const scroll =
    window.scrollY;

  if (heroContent) {

    const move =
      Math.min(scroll * 0.18, 100);

    const rotate =
      Math.min(scroll * 0.025, 8);

    heroContent.style.transform =
      `translate3d(0, ${move}px, 0)
       rotateX(${rotate}deg)`;

  }

  if (heroImageWrap) {

    const move =
      Math.min(scroll * 0.08, 50);

    heroImageWrap.style.transform =
      `translateY(${move}px)`;

  }

});


/* =========================
   EDUCATION DATA
========================= */

const educationData = {

  school: {
    number: "03",
    status: "COMPLETED",
    statusClass: "",
    period: "2021 — 2023",
    title: "High School",
    institution: "Bhashyam High School",
    location: "Guntur",

    description:
      "Completed my high school education at Bhashyam High School, Guntur, building a strong academic foundation and developing disciplined learning habits.",

    resultLabel: "PERCENTAGE",
    result: "95.6%"
  },


  mpc: {
    number: "02",
    status: "COMPLETED",
    statusClass: "",
    period: "2023 — 2025",
    title: "MPC",
    institution: "Bhashyam Junior College",
    location: "Guntur",

    description:
      "Completed my MPC stream at Bhashyam Junior College, Guntur, with a strong foundation in Mathematics, Physics and Chemistry.",

    resultLabel: "PERCENTAGE",
    result: "97.5%"
  },


  btech: {
    number: "01",
    status: "CURRENT",
    statusClass: "current",
    period: "2025 — 2029",
    title: "B.Tech",
    institution: "Vignan University, Vadlamudi",
    location: "Guntur",

    description:
      "Currently pursuing my Bachelor of Technology at Vignan University, Vadlamudi, while developing my skills in engineering, technology, problem solving and practical development.",

    resultLabel: "CGPA",
    result: "8.55"
  }

};


/* =========================
   EDUCATION INTERACTION
========================= */

const educationButtons =
  document.querySelectorAll(
    "[data-education]"
  );

const focusCard =
  document.querySelector(
    ".education-focus"
  );

const focusNumber =
  document.getElementById(
    "focusNumber"
  );

const focusStatus =
  document.getElementById(
    "focusStatus"
  );

const focusPeriod =
  document.getElementById(
    "focusPeriod"
  );

const focusTitle =
  document.getElementById(
    "focusTitle"
  );

const focusInstitution =
  document.getElementById(
    "focusInstitution"
  );

const focusLocation =
  document.getElementById(
    "focusLocation"
  );

const focusDescription =
  document.getElementById(
    "focusDescription"
  );

const focusResultLabel =
  document.getElementById(
    "focusResultLabel"
  );

const focusResult =
  document.getElementById(
    "focusResult"
  );


function updateEducation(key) {

  const data =
    educationData[key];

  if (!data) {
    return;
  }


  focusCard.classList.remove(
    "switching"
  );

  void focusCard.offsetWidth;

  focusCard.classList.add(
    "switching"
  );


  focusNumber.textContent =
    data.number;

  focusStatus.textContent =
    data.status;

  focusStatus.className =
    "focus-status " +
    data.statusClass;

  focusPeriod.textContent =
    data.period;

  focusTitle.textContent =
    data.title;

  focusInstitution.textContent =
    data.institution;

  focusLocation.textContent =
    data.location;

  focusDescription.textContent =
    data.description;

  focusResultLabel.textContent =
    data.resultLabel;

  focusResult.textContent =
    data.result;


  document
    .querySelectorAll(
      ".timeline-item"
    )
    .forEach((item) => {

      item.classList.toggle(
        "active",
        item.dataset.education === key
      );

    });

}


educationButtons.forEach(
  (button) => {

    button.addEventListener(
      "click",
      () => {

        updateEducation(
          button.dataset.education
        );

      }
    );

  }
);


/* =========================
   EDUCATION CARD 3D
========================= */

if (
  focusCard &&
  window.innerWidth > 700
) {

  focusCard.addEventListener(
    "mousemove",
    (event) => {

      const rect =
        focusCard.getBoundingClientRect();

      const x =
        (event.clientX - rect.left) /
        rect.width;

      const y =
        (event.clientY - rect.top) /
        rect.height;

      const rotateY =
        (x - 0.5) * 4;

      const rotateX =
        (y - 0.5) * -4;

      focusCard.style.transform =
        `perspective(1400px)
         rotateX(${rotateX}deg)
         rotateY(${rotateY}deg)
         translateY(-3px)`;

    }
  );


  focusCard.addEventListener(
    "mouseleave",
    () => {

      focusCard.style.transform =
        "perspective(1400px) rotateX(0) rotateY(0)";

    }
  );

}


/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
  document.querySelectorAll(
    ".about-section > *, " +
    ".about-grid > *, " +
    ".education-section > *, " +
    ".education-focus, " +
    ".education-preview-card, " +
    ".projects-section > *, " +
    ".project-card, " +
    ".contact-section > *"
  );


revealElements.forEach(
  (element) => {

    element.classList.add(
      "reveal"
    );

  }
);


const revealObserver =
  new IntersectionObserver(
    (entries) => {

      entries.forEach(
        (entry) => {

          if (
            entry.isIntersecting
          ) {

            entry.target.classList.add(
              "visible"
            );

            revealObserver.unobserve(
              entry.target
            );

          }

        }
      );

    },
    {
      threshold: 0.12
    }
  );


revealElements.forEach(
  (element) => {

    revealObserver.observe(
      element
    );

  }
);


/* =========================
   NAV ACTIVE STATE
========================= */

const sections =
  document.querySelectorAll(
    "section[id]"
  );

const navLinks =
  document.querySelectorAll(
    ".nav-links a"
  );


const sectionObserver =
  new IntersectionObserver(
    (entries) => {

      entries.forEach(
        (entry) => {

          if (
            !entry.isIntersecting
          ) {
            return;
          }

          navLinks.forEach(
            (link) => {

              link.classList.remove(
                "active"
              );

            }
          );


          const activeLink =
            document.querySelector(
              `.nav-links a[href="#${entry.target.id}"]`
            );


          if (activeLink) {

            activeLink.classList.add(
              "active"
            );

          }

        }
      );

    },
    {
      threshold: 0.35
    }
  );


sections.forEach(
  (section) => {

    sectionObserver.observe(
      section
    );

  }
);


/* =========================
   MAGNETIC BUTTONS
========================= */

const magneticElements =
  document.querySelectorAll(
    ".button, .nav-contact, .contact-email"
  );


if (window.innerWidth > 800) {

  magneticElements.forEach(
    (element) => {

      element.addEventListener(
        "mousemove",
        (event) => {

          const rect =
            element.getBoundingClientRect();

          const x =
            event.clientX -
            rect.left -
            rect.width / 2;

          const y =
            event.clientY -
            rect.top -
            rect.height / 2;

          element.style.transform =
            `translate(${x * 0.12}px, ${y * 0.12}px)`;

        }
      );


      element.addEventListener(
        "mouseleave",
        () => {

          element.style.transform =
            "";

        }
      );

    }
  );

}


/* =========================
   PROJECT CARD MOUSE DEPTH
========================= */

const projectCards =
  document.querySelectorAll(
    ".project-card"
  );


if (window.innerWidth > 800) {

  projectCards.forEach(
    (card) => {

      card.addEventListener(
        "mousemove",
        (event) => {

          const rect =
            card.getBoundingClientRect();

          const x =
            (event.clientX - rect.left) /
            rect.width;

          const y =
            (event.clientY - rect.top) /
            rect.height;

          const rotateY =
            (x - 0.5) * 2;

          const rotateX =
            (y - 0.5) * -2;

          card.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateX(10px)`;

        }
      );


      card.addEventListener(
        "mouseleave",
        () => {

          card.style.transform =
            "";

        }
      );

    }
  );

}


/* =========================
   TEXT HOVER DEPTH
========================= */

const headings =
  document.querySelectorAll(
    "h1, h2, h3"
  );


headings.forEach(
  (heading) => {

    heading.addEventListener(
      "mousemove",
      (event) => {

        if (window.innerWidth < 800) {
          return;
        }

        const rect =
          heading.getBoundingClientRect();

        const x =
          (event.clientX - rect.left) /
          rect.width;

        const y =
          (event.clientY - rect.top) /
          rect.height;

        const moveX =
          (x - 0.5) * 5;

        const moveY =
          (y - 0.5) * -5;

        heading.style.transform =
          `translate3d(${moveX}px, ${moveY}px, 0)`;

      }
    );


    heading.addEventListener(
      "mouseleave",
      () => {

        heading.style.transform =
          "";

      }
    );

  }
);
