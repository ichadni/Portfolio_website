// === Set current year in footer ===
document.addEventListener('DOMContentLoaded', () => {
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});

// === Highlight active navigation link ===
function setActiveNavLink() {
  const navLinks = document.querySelectorAll('nav a');
  // Get current page filename (e.g. "index.html", or "" for root)
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
setActiveNavLink();

// === Responsive menu toggle ===
const menuIcon = document.querySelector('.menu-icon');
const nav = document.querySelector('nav');

function toggleMenu() {
  if (nav) nav.classList.toggle('open');
  if (menuIcon) menuIcon.classList.toggle('open');
}

if (menuIcon) {
  menuIcon.addEventListener('click', toggleMenu);
}

// === Close menu on nav link click (mobile UX) ===
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (nav && nav.classList.contains('open')) {
      nav.classList.remove('open');
    }
    if (menuIcon && menuIcon.classList.contains('open')) {
      menuIcon.classList.remove('open');
    }
  });
});
// === EmailJS Contact Form Send ===
(function(){
  emailjs.init("zsx1MFrE9bvTSEmpJ"); //public key
})();

const contactForm = document.getElementById('contact-form');
if (contactForm) {
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

