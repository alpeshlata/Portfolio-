// // let per=document.querySelector('#webdesign');
// let num=0;
// // let number=72;
// // let id=setInterval(
// //     (number)=>{
// //         if(num==72){
// //             clearInterval(id)
// //         }
// //         {
// //             num=num+1;
// //             per.style.animationTimeline=20+'20px';
// //             per.innerHTML=num;
            
// //             console.log(num)
// //         }
// //     },10);

// let target = document.getElementById("webdesign");


// if (!target) {
//     console.error("Element with ID 'targetSection' not found.");
// }
// let intervalID = null; // To keep track of the interval

// window.addEventListener("scroll", () => {
//   const targetPosition = target.getBoundingClientRect();
//   const isInViewport = targetPosition.top >= 0 && targetPosition.bottom <= window.innerHeight;

//   if (isInViewport && !intervalID) {
//     // Start the interval if the section is in view
//     intervalID = setInterval(()=>{
//               if(num==72){
//                   clearInterval(intervalID)
//               }
//               {
//                   num=num+1;
//                   target.innerHTML=num+"%";
//                   console.log(num)
//               }
//           },10);
//   } else if (!isInViewport && intervalID) {
//     // Clear the interval when the section is out of view
//     clearInterval(intervalID);
//     num=0;
//     intervalID = null;
//   }
// });



//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add('visible');
//       }
//     });
//   }, {
//     threshold: 0.1
//   });

//   document.querySelectorAll('.animate-on-scroll').forEach(el => {
//     observer.observe(el);
//   });


// // Form submission handling
// document.addEventListener("DOMContentLoaded", function () {
//   // 🔐 EmailJS Configuration Variables
//   const EMAILJS_PUBLIC_KEY = "D2f9lCRnrxlB-P5S5";
//   const EMAILJS_SERVICE_ID = "service_q7jpfx9";
//   const EMAILJS_TEMPLATE_ID = "template_ke1yku3";

//   // ✅ Initialize EmailJS
//   emailjs.init(EMAILJS_PUBLIC_KEY);

//   const form = document.getElementById("contact-form");
//   console.log(form)

//   if (form) {
//     form.addEventListener("submit", function (e) {
//       e.preventDefault();
//   const formData = new FormData(form);
//   for (const [key, value] of formData.entries()) {
//     console.log(`${key}: ${value}`);
//   }
//       emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, this).then(
//         function () {
//           alert("Message sent successfully!");
//           form.reset();
//         },
//         function (error) {
//           alert("Failed to send. Try again!");
//           console.error("EmailJS error:", error);
//         }
//       );
//     });
//   }
// });

document.addEventListener("DOMContentLoaded", function () { 
  const toggleBtn = document.getElementById("menu-toggle");
  const nav = document.getElementById("navbar");
  const navLinks = document.querySelectorAll(".nav-link");

  if (!toggleBtn || !nav) {
    console.error("Missing toggle button or navbar element.");
    return;
  }

  // Toggle menu on button click
  toggleBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    nav.classList.toggle("active");
  });

  // Hide menu if clicking outside
  document.addEventListener("click", (e) => {
    if (!nav.contains(e.target) && !toggleBtn.contains(e.target)) {
      nav.classList.remove("active");
    }
  });

  // Hide menu on nav-link click
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
    });
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav a.nav-link");
  const sections = document.querySelectorAll("section[id]");

  // Scroll-based active section detection
  function activateLinkOnScroll() {
    let scrollY = window.pageYOffset;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 120; // adjust based on header height
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        document.querySelectorAll("nav a.nav-link").forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  // On scroll
  window.addEventListener("scroll", activateLinkOnScroll);

  // On click
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navLinks.forEach((el) => el.classList.remove("active"));
      this.classList.add("active");
    });
  });
});


// Animate skill percentages
document.addEventListener("DOMContentLoaded", () => {
  const skills = document.querySelectorAll("[data-skill]");
  let hasAnimated = false;

  function animateSkills() {
    if (hasAnimated) return;

    skills.forEach((el) => {
      let endValue = parseInt(el.getAttribute("data-skill"), 10);
      let current = 0;

      let counter = setInterval(() => {
        if (current >= endValue) {
          clearInterval(counter);
        } else {
          current++;
          el.innerHTML = current + "%";
        }
      }, 20);
    });

    hasAnimated = true;
  }

  window.addEventListener("scroll", () => {
    const skillsSection = document.querySelector(".section_skills");
    const position = skillsSection.getBoundingClientRect();

    if (
      position.top >= 0 &&
      position.bottom <= window.innerHeight + 300
    ) {
      animateSkills();
    }
  });
});

// Scroll reveal animation for fade-ins
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll(".animate-on-scroll").forEach((el) => {
  observer.observe(el);
});

// EmailJS Form Submission
document.addEventListener("DOMContentLoaded", function () {
  const EMAILJS_PUBLIC_KEY = "D2f9lCRnrxlB-P5S5";
  const EMAILJS_SERVICE_ID = "service_q7jpfx9";
  const EMAILJS_TEMPLATE_ID = "template_ke1yku3";

  // Initialize EmailJS
  emailjs.init(EMAILJS_PUBLIC_KEY);

  const form = document.getElementById("contact-form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      // Debug: show form data in console
      const formData = new FormData(form);
      for (const [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
      }

      // Send email
      emailjs
        .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, this)
        .then(() => {
          alert("Message sent successfully!");
          form.reset();
        })
        .catch((error) => {
          alert("Failed to send. Try again!");
          console.error("EmailJS error:", error);
        });
    });
  }
  else{
     console.error("Form element not found!");
    return;
  }
});

const words = [
  "Web Developer",
  "Full Stack Dev",
  "React Expert",
  "Node.js Enthusiast",
  "UI/UX Designer"
];

let wordIndex = 0;
let charIndex = 0;
const typingElement = document.getElementById("typing");

function typeWord() {
  if (charIndex <= words[wordIndex].length) {
    typingElement.textContent = words[wordIndex].substring(0, charIndex);
    charIndex++;
    setTimeout(typeWord, 100);
  } else {
    setTimeout(eraseWord, 2000);
  }
}

function eraseWord() {
  if (charIndex > 0) {
    typingElement.textContent = words[wordIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseWord, 50);
  } else {
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(typeWord, 500);
  }
}

document.addEventListener("DOMContentLoaded", typeWord);


