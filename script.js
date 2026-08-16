/* =====================================================
   EDUCATION DATA
===================================================== */

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
      "Completed my high school education at Bhashyam High School, Guntur, with a strong academic foundation and a focus on developing disciplined learning habits.",

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



/* =====================================================
   UPDATE EDUCATION
===================================================== */

function updateEducation(key) {

  const data = educationData[key];


  if (!data) {
    return;
  }


  /*
    Restart card animation
  */

  focusCard.classList.remove(
    "switching"
  );


  void focusCard.offsetWidth;


  focusCard.classList.add(
    "switching"
  );


  /*
    Update focus card
  */

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



  /*
    Update active timeline
  */

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


      /*
        On mobile/tablet,
        scroll to the focus card.
      */

      if (
        window.innerWidth <= 900 &&
        button.classList.contains(
          "timeline-item"
        )
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

        if (!entry.isIntersecting) {
          return;
        }


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

      });

    },

    {
      threshold: 0.35
    }

  );


sections.forEach((section) => {

  observer.observe(section);

});
