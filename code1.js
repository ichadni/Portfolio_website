document.addEventListener('DOMContentLoaded', () => {
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Highlight active navigation link
  setActiveNavLink();
});

function setActiveNavLink() {
  const navLinks = document.querySelectorAll('nav a');
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Responsive menu toggle
const menuIcon = document.querySelector('.menu-icon');
const nav = document.querySelector('nav');

function toggleMenu() {
  if (nav) nav.classList.toggle('open');
  if (menuIcon) menuIcon.classList.toggle('open');
}

if (menuIcon) {
  menuIcon.addEventListener('click', toggleMenu);
}

// Close menu on nav link click (mobile)
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (nav && nav.classList.contains('open')) nav.classList.remove('open');
    if (menuIcon && menuIcon.classList.contains('open')) menuIcon.classList.remove('open');
  });
});

// EmailJS contact form
(function(){
  if (typeof emailjs !== "undefined") {
    emailjs.init("zsx1MFrE9bvTSEmpJ"); // public key
  }
})();

const contactForm = document.getElementById('contact-form');
if (contactForm && typeof emailjs !== "undefined") {
  contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm('service_chadni', 'template_zecv3vb', this)
      .then(() => {
        alert('Message sent successfully!');
        contactForm.reset();
      }, (error) => {
        alert('Oops! Something went wrong.');
        console.error(error);
      });
  });
}

//  GSAP Animations (excluding nav links)

if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);

  
  gsap.from("header .logo", { y: -50, opacity: 0, duration: 1, ease: "power3.out" });

  
  gsap.from(".contact-btn", { scale: 0.5, opacity: 0, duration: 0.8, ease: "back.out(1.7)" });

  // Animate hero image and text
  gsap.from(".hero img", {
    x: -100,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
  });
  gsap.from(".hero-text", {
    x: 100,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    delay: 0.3
  });

  // Animate sections on scroll
  document.querySelectorAll("section").forEach((section) => {
    gsap.from(section, {
      scrollTrigger: {
        trigger: section,
        start: "top 85%",
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out"
    });
  });
} else {
  console.warn("GSAP or ScrollTrigger not found — animations disabled.");
}

// Auto-hide header on scroll down, show on scroll up

(() => {
  let lastScrollY = window.scrollY;
  const header = document.querySelector('header');

  window.addEventListener('scroll', () => {
    if (!header) return;

    if (window.scrollY > lastScrollY) {
      
      header.style.transform = 'translateY(-100%)';
    } else {
      header.style.transform = 'translateY(0)';
    }
    lastScrollY = window.scrollY;
  });
})(); 