/* =========================
   CUSTOM CURSOR
========================= */

const cursor = document.querySelector(".cursor");
const cursorRing = document.querySelector(".cursor-ring");

if (cursor && cursorRing) {

    document.addEventListener("mousemove", (e) => {

        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;

        cursorRing.animate(
            {
                left: `${e.clientX}px`,
                top: `${e.clientY}px`
            },
            {
                duration: 350,
                fill: "forwards"
            }
        );

    });


    const interactiveElements = document.querySelectorAll(
        "a, button, .outline-text, .education-item, .project-card, .profile-wrapper"
    );


    interactiveElements.forEach((element) => {

        element.addEventListener("mouseenter", () => {

            cursorRing.style.width = "60px";
            cursorRing.style.height = "60px";
            cursorRing.style.borderColor = "rgba(200, 255, 61, 0.8)";

        });


        element.addEventListener("mouseleave", () => {

            cursorRing.style.width = "38px";
            cursorRing.style.height = "38px";
            cursorRing.style.borderColor = "rgba(200, 255, 61, 0.45)";

        });

    });

}


/* =========================
   IMAGE 3D CURSOR MOVEMENT
========================= */

const profileWrapper = document.querySelector(".profile-wrapper");

if (profileWrapper) {

    profileWrapper.addEventListener("mousemove", (event) => {

        const rect = profileWrapper.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -3;
        const rotateY = ((x - centerX) / centerX) * 3;

        profileWrapper.style.transform =
            `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.015)`;

    });


    profileWrapper.addEventListener("mouseleave", () => {

        profileWrapper.style.transform =
            "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)";

    });

}


/* =========================
   EDUCATION FOCUS CARD
========================= */

const educationItems =
    document.querySelectorAll(".education-item");

const focusTitle =
    document.querySelector("#focus-title");

const focusInstitution =
    document.querySelector("#focus-institution");

const focusLocation =
    document.querySelector("#focus-location");

const focusPeriod =
    document.querySelector("#focus-period");

const focusScore =
    document.querySelector("#focus-score");

const focusDescription =
    document.querySelector("#focus-description");


educationItems.forEach((item) => {

    item.addEventListener("click", () => {

        educationItems.forEach((education) => {
            education.classList.remove("active");
        });

        item.classList.add("active");


        const title =
            item.dataset.title;

        const institution =
            item.dataset.institution;

        const location =
            item.dataset.location;

        const period =
            item.dataset.period;

        const score =
            item.dataset.score;

        const description =
            item.dataset.description;


        focusTitle.textContent = title;

        focusInstitution.textContent = institution;

        focusLocation.textContent = location;

        focusPeriod.textContent = period;

        focusScore.textContent = score;

        focusDescription.textContent = description;


        const focusCard =
            document.querySelector(".education-focus");

        focusCard.animate(
            [
                {
                    opacity: 0.5,
                    transform: "translateY(8px)"
                },
                {
                    opacity: 1,
                    transform: "translateY(0)"
                }
            ],
            {
                duration: 350,
                easing: "ease-out"
            }
        );

    });

});


/* =========================
   SMOOTH NAVIGATION
========================= */

document.querySelectorAll('a[href^="#"]').forEach((link) => {

    link.addEventListener("click", (event) => {

        const targetId =
            link.getAttribute("href");

        const target =
            document.querySelector(targetId);

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});


/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
    document.querySelectorAll(
        ".section-label, .about-content, .project-card, .education-item, .contact-content"
    );


const revealObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";

                    revealObserver.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach((element) => {

    element.style.opacity = "0";

    element.style.transform = "translateY(30px)";

    element.style.transition =
        "opacity 0.8s ease, transform 0.8s ease";

    revealObserver.observe(element);

});


/* =========================
   OUTLINE TEXT INTERACTION
========================= */

const outlineTexts =
    document.querySelectorAll(".outline-text");


outlineTexts.forEach((text) => {

    text.addEventListener("mouseenter", () => {

        text.style.color = "var(--accent)";

    });


    text.addEventListener("mouseleave", () => {

        text.style.color = "transparent";

    });

});
