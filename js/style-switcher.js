const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

const moonIcon = document.querySelector('.moon-icon');
const sunIcon = document.querySelector('.sun-icon');
const dayEffect = document.querySelector('.day-effect');
const nightEffect = document.querySelector('.night-effect');

// Setup function to handle icon/effect visibility
function updateThemeState() {
  if (body.classList.contains('dark')) {

    moonIcon.style.transform = 'scale(1)';
    moonIcon.style.opacity = '1';
    // Night Mode (Dark)
    sunIcon.style.transform = 'scale(0)';
    sunIcon.style.opacity = '0';

    nightEffect.style.display = 'block';
    dayEffect.style.display = 'none';
  } else {
    // Day Mode (Light)
    moonIcon.style.transform = 'scale(0)';
    moonIcon.style.opacity = '0';

    sunIcon.style.transform = 'scale(1)';
    sunIcon.style.opacity = '1';

    nightEffect.style.display = 'none';
    dayEffect.style.display = 'block';
  }
}

// Initial check on page load
window.addEventListener('load', updateThemeState);

// Toggle theme on click
themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  updateThemeState();
});
