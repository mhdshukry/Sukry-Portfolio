// Typing animation
var typed = new Typed(".typing", {
  strings: [
    "",
    "Web",
    "Web Designer",
    "Full Stack Developer",
    "Graphic Designer",
  ],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav a');

// Add scroll event listener
window.addEventListener('scroll', () => {
  let currentSection = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100; // Offset for better accuracy
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      currentSection = section.getAttribute('id');
    }
  });

  // Update nav links
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').substring(1) === currentSection) {
      link.classList.add('active');
    }
  });
});



function toggleMenu() {
  const nav = document.querySelector('.navbar .nav');
  const menuIcon = document.querySelector('.menu-icon');

  nav.classList.toggle('active');
  menuIcon.classList.toggle('active');
}
