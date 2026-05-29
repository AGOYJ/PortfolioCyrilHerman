const themeToggle = document.querySelector('.theme-toggle');
const root = document.documentElement;

themeToggle?.addEventListener('click', () => {
  const currentTheme = root.getAttribute('data-theme');
  const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', nextTheme);
  themeToggle.setAttribute(
    'aria-label',
    nextTheme === 'dark' ? 'Activer le thème clair' : 'Activer le thème sombre'
  );
});

const burgerBtn = document.querySelector('.burger-btn');
const mobileNav = document.querySelector('.mobile-nav');
const mobileLinks = document.querySelectorAll('.mobile-nav a');

if (burgerBtn && mobileNav) {
  burgerBtn.addEventListener('click', () => {
    const isOpen = burgerBtn.getAttribute('aria-expanded') === 'true';

    burgerBtn.setAttribute('aria-expanded', String(!isOpen));
    burgerBtn.setAttribute(
      'aria-label',
      !isOpen ? 'Fermer le menu' : 'Ouvrir le menu'
    );

    mobileNav.hidden = isOpen;
    mobileNav.classList.toggle('is-open', !isOpen);
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      burgerBtn.setAttribute('aria-expanded', 'false');
      burgerBtn.setAttribute('aria-label', 'Ouvrir le menu');
      mobileNav.hidden = true;
      mobileNav.classList.remove('is-open');
    });
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 960) {
      burgerBtn.setAttribute('aria-expanded', 'false');
      burgerBtn.setAttribute('aria-label', 'Ouvrir le menu');
      mobileNav.hidden = true;
      mobileNav.classList.remove('is-open');
    }
  });
}

