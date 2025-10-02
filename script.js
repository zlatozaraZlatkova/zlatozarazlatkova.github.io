const themeToggle = document.getElementById('theme-switch');

themeToggle.addEventListener('change', function() {
  document.body.classList.toggle('light-mode');
});