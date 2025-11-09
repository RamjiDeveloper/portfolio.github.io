// navigation

// const { document } = require("pdfkit/js/page");

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

// Active nav link on scroll

window.addEventListener("scroll", () => {
  let current = "";
  const sections = document.querySelectorAll("section");

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("Active");

    if (link.getAttribute("href").slice(1) === current) {
      link.classList.add("Active");
    }
  });
});

//redering projects

function projectsRender() {
  const projectsGrid = document.getElementById("projects-grid");

  projects.forEach((project, index) => {
    const projectCard = document.createElement("div");
    projectCard.className = "project-card";
    projectCard.style.transitionDelay = `${index * 100}ms`;

    projectCard.innerHTML = `
    <div class="project-image">
      <img src="${project.image}" alt="${project.title}">
      <div class="project-overlay"></div>
    </div>
    <div class="project-content">
    <h3 class="project-title">${project.title}</h3>
    <p class="project-description">${project.description}</p>
    
    <div class="project-tech">${project.technologies
      .map((tech) => `<span class="tech-tag">${tech}</span>`)
      .join("")}
    </div>
    <div class="project-links"><a href="${
      project.liveUrl
    }" class="project-link">
    <i class="fa-solid fa-arrow-up-right-from-square"></i>Live Demo
    </a>

    <a href="${project.githubUrl}" class="git project-link">
    <i class="fa-brands fa-github"></i>Code</a>
    </div>
    </div>
    `;

    projectsGrid.appendChild(projectCard);
  });
}
projectsRender();

/// render skills

function renderSkills() {
  const skillsGrid = document.getElementById("skills-grid");

  skills.forEach((skill, index) => {
    const skillCard = document.createElement("div");
    skillCard.className = "skill-card";
    skillCard.style.transitionDelay = `${index * 100}ms`;

    skillCard.innerHTML = `
    <div class="skill-icon" style="color: ${skill.color}">
  ${skill.icon}
  </div>
  <h3 class="skill-category">${skill.category}</h3>
  <ul class="skill-item">
  ${skill.item.map((item) => `<li>${item}</li>`).join("")}
  </ul>
  `;
    skillsGrid.appendChild(skillCard);
  });
}

renderSkills();

// experience///

function renderExperience() {
  const timeline = document.getElementById("timeline");
  experinces.forEach((exp, index) => {
    const timelineItem = document.createElement("div");

    timelineItem.className = "timeline-item";

    timelineItem.style.transitionDelay = `${index * 100}ms`;

    timelineItem.innerHTML = `
    <div class="timeline-dot"></div>
    <div class="timeline-card">
      <div class="timeline-header">
        <div>
          <h3 class="timeline-position">${exp.position}</h3>
        </div>
      </div>
      <p class="timeline-description">${exp.description}</p>
      <div class="timeline-tech">
        ${exp.technologies
          .map((tech) => `<span class="tech-badge">${tech}</span>`)
          .join("")}
      </div>
    </div>
    `;
    timeline.appendChild(timelineItem);
  });
}
renderExperience();

// animation////////
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry =>{
    if (entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
}, observerOptions);

function observeElements(){
  const animatedElements = document.querySelectorAll('.animated-on-scroll, .project-card, .skill-card, .timeline-item');
  animatedElements.forEach(item => observer.observe(item));
}
observeElements();


// const timelineItems = document.querySelectorAll('.timeline-item');

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add('show');
//     }
//   });
// }, { threshold: 0.2 }); // 20% visible hone par trigger hoga

// timelineItems.forEach(item => observer.observe(item));



// contect-form//

const contectForm = document.getElementById('contectForm');
if(contectForm){
  contectForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Submitted form successfully! (This is demo no-actual submision)');
    contectForm.reset();
  });
}

// text typing///////////////////////////////

const words = [
  { text: "Full Stack Developer", color: "#61dafb" },
  { text: "UI/UX Designer", color: "#f87171" },
  { text: "Content Creator", color: "#34d399" },
  { text: "Youtuber", color: "#facc15" },
];

const typingEl = document.querySelector(".typing-text");

let i = 0; // word index
let j = 0; // character index
let isDeleting = false;

function type() {
  const currentWord = words[i];
  typingEl.style.color = currentWord.color; // har word ka color set karo
  typingEl.textContent = currentWord.text.substring(0, j);

  if (!isDeleting && j < currentWord.text.length) {
    j++;
    setTimeout(type, 150);
  } else if (isDeleting && j > 0) {
    j--;
    setTimeout(type, 60);
  } else {
    if (!isDeleting) {
      isDeleting = true;
      setTimeout(type, 1000); // poora likhne ke baad pause
    } else {
      isDeleting = false;
      i = (i + 1) % words.length; // next word par jao
      setTimeout(type, 1000);
    }
  }
}

type();

// text typing end////////////////////////
