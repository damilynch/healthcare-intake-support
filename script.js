const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector(link.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');

  if (window.scrollY > 20) {
    navbar.style.boxShadow = '0 10px 30px rgba(15, 23, 42, 0.06)';
  } else {
    navbar.style.boxShadow = 'none';
  }
});
