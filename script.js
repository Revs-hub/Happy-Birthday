// Scroll Animation for Fade-In Effect
window.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('.section');
  const scrollPosition = window.scrollY + window.innerHeight;

  sections.forEach(function(section) {
      if (scrollPosition > section.offsetTop + 100) {
          section.classList.add('active');
      }
  });
});

// Scroll-to-Section Smooth Scroll
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Hover Effects for Interactive Animations
document.querySelectorAll('.gallery-grid img').forEach(item => {
  item.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.05)';
      this.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.4)';
  });
  
  item.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
      this.style.boxShadow = 'none';
  });
});
