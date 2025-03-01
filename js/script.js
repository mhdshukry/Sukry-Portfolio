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

// Navigation Scroll
document.querySelectorAll('.nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
    updateNav(this);
  });
});

function updateNav(element) {
  document.querySelectorAll('.nav a').forEach(navLink => {
    navLink.classList.remove('active');
  });
  element.classList.add('active');
}

// For Hire me section
document.querySelector(".hire-me").addEventListener("click", function () {
  document.querySelector("#contact").scrollIntoView({
    behavior: "smooth",
  });
  updateNav(this);
});


function toggleMenu() {
  const nav = document.querySelector('.navbar .nav');
  const menuIcon = document.querySelector('.menu-icon');

  nav.classList.toggle('active');
  menuIcon.classList.toggle('active');
}
