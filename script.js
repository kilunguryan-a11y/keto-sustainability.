(() => {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#primary-nav');
  const contactLink = document.querySelector('#contact-link');
  const contactNote = document.querySelector('#contact-note');

  // Keton's current public contact inbox. Update this if the organisation adopts a domain email later.
  const CONTACT_EMAIL = 'ketonsustainability@gmail.com';

  document.querySelector('#year').textContent = new Date().getFullYear();

  if (CONTACT_EMAIL.trim()) {
    contactLink.href = `mailto:${CONTACT_EMAIL.trim()}?subject=${encodeURIComponent('Research or collaboration enquiry for Keton Sustainability')}`;
    contactNote.textContent = CONTACT_EMAIL.trim();
  } else {
    contactLink.href = '#contact-note';
    contactLink.addEventListener('click', (event) => {
      event.preventDefault();
      contactNote.textContent = 'Contact is not configured yet. Add a verified email in script.js before publishing.';
      contactNote.classList.add('contact-note-alert');
    });
  }

  menuToggle.addEventListener('click', () => {
    const open = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!open));
    menuToggle.setAttribute('aria-label', open ? 'Open navigation' : 'Close navigation');
    nav.classList.toggle('is-open', !open);
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Open navigation');
    });
  });

  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.research-card, .method-step, .project-card, .principle-list > div').forEach((item) => {
      item.classList.add('reveal');
      observer.observe(item);
    });
  }
})();
