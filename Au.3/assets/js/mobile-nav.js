(() => {
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('#primary-nav');

  if (!header || !toggle || !nav) {
    return;
  }

  const mobileBreakpoint = window.matchMedia('(max-width: 960px)');

  const setOpen = (isOpen) => {
    header.classList.toggle('is-nav-open', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Navigation schliessen' : 'Navigation öffnen');
  };

  const closeNav = () => setOpen(false);

  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    setOpen(!isOpen);
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeNav);
  });

  document.addEventListener('click', (event) => {
    if (!mobileBreakpoint.matches) {
      return;
    }

    if (!header.contains(event.target)) {
      closeNav();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeNav();
    }
  });

  const handleViewportChange = (event) => {
    if (!event.matches) {
      closeNav();
    }
  };

  if (typeof mobileBreakpoint.addEventListener === 'function') {
    mobileBreakpoint.addEventListener('change', handleViewportChange);
  } else if (typeof mobileBreakpoint.addListener === 'function') {
    mobileBreakpoint.addListener(handleViewportChange);
  }

  closeNav();
})();
