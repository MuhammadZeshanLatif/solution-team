/* ============================================
   SOLUTION TEAM - Vanilla JS
============================================ */

document.addEventListener('DOMContentLoaded', function () {

  // ---- Active nav highlight on click ----
  const navLinks = document.querySelectorAll('.main-nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      navLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // ---- Smooth scroll for in-page anchors ----
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId.length > 1) {
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  // ---- Contact form submission ----
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const data = {
        name:    contactForm.name.value.trim(),
        email:   contactForm.email.value.trim(),
        phone:   contactForm.phone.value.trim(),
        message: contactForm.message.value.trim()
      };

      if (!data.name || !data.email || !data.message) {
        alert('Please fill in your name, email, and message.');
        return;
      }

      // Simple confirmation
      alert('Thank you, ' + data.name + '! Your message has been received. We will get back to you soon.');
      contactForm.reset();
    });
  }

  // ---- Subtle scroll reveal for cards ----
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.service-card, .project-card-wrap, .news-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

});
