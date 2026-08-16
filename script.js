/* =====================================================
   MOBILE MENU
===================================================== */

const menuButton =
  document.querySelector(".menu-button");

const navLinks =
  document.querySelector(".nav-links");


if (menuButton && navLinks) {

  menuButton.addEventListener(
    "click",
    () => {

      navLinks.classList.toggle("open");

    }
  );


  navLinks
    .querySelectorAll("a")
    .forEach((link) => {

      link.addEventListener(
        "click",
        () => {

          navLinks.classList.remove(
            "open"
          );

        }
      );

    });

}


/* =====================================================
   EDUCATION DATA
===================================================== */

const educationData = {

  btech: {

    number: "01",

    status: "CURRENT",

    statusClass: "current",

    period: "2025 — 2029",

    title: "B.Tech",

    institution:
      "Vignan University, Vadlamudi",

    location:
      "Guntur, Andhra Pradesh",

    description:
      "Currently pursuing my Bachelor of Technology at Vignan University, Vadlamudi, while developing my skills in engineering, technology, problem solving and practical development.",

    resultLabel: "CGPA",

    result: "8.55"

  },


  mpc: {

    number: "02",

    status: "COMPLETED",

    statusClass: "",

    period: "2023 — 2025",

    title: "MPC",

    institution:
      "Bhashyam Junior College",

    location:
      "Guntur, Andhra Pradesh",

    description:
      "Completed my MPC stream at Bhashyam Junior College, Guntur, with a strong academic foundation in Mathematics, Physics and Chemistry.",

    resultLabel: "PERCENTAGE",

    result: "97.5%"

  },


  school: {

    number: "03",

    status: "COMPLETED",

    statusClass: "",

    period: "2021 — 2023",

    title: "High School",

    institution:
      "Bhashyam High School",

    location:
      "Guntur, Andhra Pradesh",

    description:
      "Completed my high school education at Bhashyam High School, Guntur, building a strong academic foundation and disciplined learning habits.",

    resultLabel: "PERCENTAGE",

    result: "95.6%"

  }

};


/* =====================================================
   EDUCATION FOCUS CARD
===================================================== */

const educationButtons =
  document.querySelectorAll(
    "[data-education]"
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


const timelineItems =
  document.querySelectorAll(
    ".timeline-item"
  );


function updateEducation(key) {

  const data =
    educationData[key];


  if (!data) {

    return;

  }


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


  timelineItems.forEach(
    (item) => {

      item.classList.toggle(

        "active",

        item.dataset.education === key

      );

    }
  );

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


/* =====================================================
   INITIAL EDUCATION
===================================================== */

updateEducation("btech");


/* =====================================================
   NAVIGATION ACTIVE STATE
===================================================== */

const sections =
  document.querySelectorAll(
    "section[id]"
  );


const navigationLinks =
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


          navigationLinks.forEach(
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
