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
      "Currently pursuing my Bachelor of Technology at Vignan University, Vadlamudi. Building a strong foundation in engineering, technology, problem solving and practical development.",

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
      "Completed my intermediate education in the MPC stream at Bhashyam Junior College, Guntur, with a strong academic performance and a solid foundation in Mathematics, Physics and Chemistry.",

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
      "Completed my high school education at Bhashyam High School, Guntur, developing a strong academic foundation and the discipline that continues to shape my learning journey.",

    resultLabel: "PERCENTAGE",

    result: "95.6%"

  }

};



/* =====================================================
   EDUCATION ELEMENTS
===================================================== */

const educationButtons =
  document.querySelectorAll(
    "[data-education]"
  );


const focusCard =
  document.querySelector(
    ".education-focus"
  );


const focusNumber =
  document.querySelector(
    "#focusNumber"
  );


const focusStatus =
  document.querySelector(
    "#focusStatus"
  );


const focusPeriod =
  document.querySelector(
    "#focusPeriod"
  );


const focusTitle =
  document.querySelector(
    "#focusTitle"
  );


const focusInstitution =
  document.querySelector(
    "#focusInstitution"
  );


const focusLocation =
  document.querySelector(
    "#focusLocation"
  );


const focusDescription =
  document.querySelector(
    "#focusDescription"
  );


const focusResultLabel =
  document.querySelector(
    "#focusResultLabel"
  );


const focusResult =
  document.querySelector(
    "#focusResult"
  );



/* =====================================================
   UPDATE EDUCATION
===================================================== */

function updateEducation(key) {

  const data =
    educationData[key];


  if (!data) {
    return;
  }


  /* Restart animation */

  focusCard.classList.remove(
    "switching"
  );


  void focusCard.offsetWidth;


  focusCard.classList.add(
    "switching"
  );


  /* Update content */

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



  /* Update active timeline */

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



/* =====================================================
   EDUCATION CLICK EVENTS
===================================================== */

educationButtons.forEach((button) => {

  button.addEventListener(
    "click",
    () => {

      const key =
        button.dataset.education;


      updateEducation(key);


      /* On smaller screens,
         bring the focus card into view */

      if (
        window.innerWidth <= 900
      ) {

        setTimeout(() => {

          focusCard.scrollIntoView({
            behavior: "smooth",
            block: "center"
          });

        }, 100);

      }

    }
  );

});



/* =====================================================
   NAVIGATION ACTIVE STATE
===================================================== */

const sections =
  document.querySelectorAll(
    "section[id]"
  );


const navLinks =
  document.querySelectorAll(
    ".nav-links a"
  );


const observer =
  new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          navLinks.forEach((link) => {

            link.classList.remove(
              "active"
            );

          });


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

      });

    },

    {
      threshold: 0.35
    }

  );


sections.forEach((section) => {

  observer.observe(section);

});
