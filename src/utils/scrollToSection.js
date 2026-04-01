export function scrollToSection(sectionId, offset = 88) {
  if (typeof window === 'undefined') return;

  if (sectionId === 'home') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    const section = document.getElementById(sectionId);
    if (!section) return;

    const targetTop = section.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({
      top: Math.max(targetTop, 0),
      behavior: 'smooth',
    });
  }

  const cleanUrl = `${window.location.pathname}${window.location.search}`;
  if (window.location.hash) {
    window.history.replaceState(null, '', cleanUrl);
  }
}
