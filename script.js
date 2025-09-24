
var typed = new Typed("#typed", {
    strings: ["Hello, I'm Shahzaib Asif","I'm a Full Stack Developer", "I build responsive websites", "I like MERN Stack"],
    typeSpeed: 50,
    backSpeed: 25,
    loop: true
})

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
const links = document.querySelectorAll(".links");

hamburger.addEventListener("click",()=>{
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
});
 
document.addEventListener("click", (event) => {
  const isClickInside = navLinks.contains(event.target) || hamburger.contains(event.target);  
  
  if (!isClickInside) {
    navLinks.classList.remove("active");
    hamburger.classList.remove("active");
  }
});

links.forEach(link => {
link.addEventListener( "click", () => {
    navLinks.classList.remove("active");
    hamburger.classList.remove("active");
})

})


// ParticlesJS config
particlesJS("particles-js", {
    particles: {
        number: { value: 250 },
        color: { value: ["#4ea8de", "#ff4c60", "#3deabf", "#c084fc", "#facc15"] },
        shape: { type: "circle" },
        opacity: {
            value: 0.8,
            random: true,
            anim: {
                enable: true,
                speed: 10,
                opacity_min: 0.3,
                sync: false
            }
        },
        size: { value: 3 },
        line_linked: {
            enable: true,
            distance: 130,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
        },
        move: {
            enable: true,
            speed: 10,
        },
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "grab" // cool interactive effect
            },
            onclick: {
                enable: true,
                mode: "repulse"
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 200,
                line_linked: {
                    opacity: 0.4
                }
            },
            repulse: {
                distance: 100,
                duration: 0.4
            }
        }
    },
    retina_detect: true,
});

// theme mode 

let body = document.querySelector("body")
let theme_btn = document.querySelector(".toggle-checkbox");
let navbar2 = document.querySelector(".navbar")
let intro = document.querySelector(".intro-text");
let skills_list = document.querySelector(".skills-grid")
let projects_section = document.querySelector(".projects-section")
let contact_section = document.querySelector(".contact-section")

let mode = "dark";

theme_btn.addEventListener("click", () => {
    if(mode == "dark") {
    mode = "light";
    body.classList.add("light")
    navbar2.classList.add("navbar2");
    navbar2.classList.add("nav-links2");
    intro.classList.add("intro-text2")
    skills_list.classList.add("skills-list2");
    projects_section.classList.add("projects-section2")
    contact_section.classList.add("contact-section2")
    intro.classList.remove("intro-text")
    body.classList.remove("dark")

    }

    else {
        mode = "dark";
        body.classList.add("dark")
        intro.classList.add("intro-text")
        contact_section.classList.remove("contact-section2")
        projects_section.classList.remove("projects-section2")
        skills_list.classList.remove("skills-list2");
        intro.classList.remove("intro-text2")
        navbar2.classList.remove("navbar2")
        body.classList.remove("light")
    }

    
})
