const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

const sunIcon = document.querySelector('.sun-icon');
const moonIcon = document.querySelector('.moon-icon');
const dayEffect = document.querySelector('.day-effect');
const nightEffect = document.querySelector('.night-effect');

// Setup function to handle icon/effect visibility
function updateThemeState() {
  if (body.classList.contains('dark')) {
    // Night Mode (Dark)
    sunIcon.style.transform = 'scale(0)';
    sunIcon.style.opacity = '0';

    moonIcon.style.transform = 'scale(1)';
    moonIcon.style.opacity = '1';

    dayEffect.style.display = 'none';
    nightEffect.style.display = 'block';
  } else {
    // Day Mode (Light)
    sunIcon.style.transform = 'scale(1)';
    sunIcon.style.opacity = '1';

    moonIcon.style.transform = 'scale(0)';
    moonIcon.style.opacity = '0';

    dayEffect.style.display = 'block';
    nightEffect.style.display = 'none';
  }
}

// Initial check on page load
window.addEventListener('load', updateThemeState);

// Toggle theme on click
themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  updateThemeState();
});
