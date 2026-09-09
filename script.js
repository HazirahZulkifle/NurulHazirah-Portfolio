const roles = [
    "Business Intelligence",
    "Data Analytics",
    "Web Development",
    "IT & Technology",
    "AI & Cloud"
];

let roleIndex = 0;
let characterIndex = 0;
let deleting = false;

const heroHeading = document.querySelector(".hero h2");

function typeRole() {

    const currentRole = roles[roleIndex];

    if (!deleting) {

        heroHeading.textContent =
            `I build things with ${currentRole}.`;

        roleIndex++;

        if (roleIndex >= roles.length) {
            roleIndex = 0;
        }

    }

    setTimeout(typeRole, 2500);
}

typeRole();


/* =========================
   SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(
    ".section-heading, .about-text, .stat-card, .timeline-item, .skill-card, .project-card, .cert-card"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach((element) => {

    element.classList.add("reveal");

    observer.observe(element);

});