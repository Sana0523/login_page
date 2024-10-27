// Get elements
const switchToSignup = document.getElementById('switchToSignup');
const switchToLogin = document.getElementById('switchToLogin');
const container = document.querySelector('.outer');

// Switch to Sign Up
switchToSignup.addEventListener('click', () => {
  container.classList.add('signup-mode');
});

// Switch to Login
switchToLogin.addEventListener('click', () => {
  container.classList.remove('signup-mode');
});
