const learnMoreButton = document.getElementById('learn-more');

learnMoreButton.addEventListener('click', () => {
  // Simulate some action on clicking the button (e.g., open a modal)
  alert('Thanks for your interest!');
});


// navigation bar
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('active');
});