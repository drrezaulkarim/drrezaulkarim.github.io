document.body.classList.add('js');
if (window.lucide) window.lucide.createIcons();
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#site-nav');
function closeMenu() {
  navigation.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation');
}
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  navigation.classList.toggle('is-open', open);
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuButton.focus();
  }
});
document.addEventListener('click', event => {
  if (!event.target.closest('.site-header')) closeMenu();
});
window.matchMedia('(min-width: 641px)').addEventListener('change', closeMenu);
const papers = [...document.querySelectorAll('.publication')];
document.querySelectorAll('[data-filter]').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-filter]').forEach(other => {
      const active = other === button;
      other.classList.toggle('active', active);
      other.setAttribute('aria-pressed', String(active));
    });
    let count = 0;
    papers.forEach(paper => {
      paper.hidden = button.dataset.filter !== 'all' && paper.dataset.category !== button.dataset.filter;
      if (!paper.hidden) count += 1;
    });
    document.querySelector('#publication-status').textContent = `${count} publications shown.`;
    const empty = document.querySelector('.publication-empty');
    empty.hidden = count !== 0;
    if (count === 0) {
      empty.querySelector('span').textContent = button.dataset.filter === 'agents'
        ? 'This theme is a research vision; no papers are listed yet.'
        : 'Supporting work in this theme is included in the research section.';
      empty.querySelector('a').href = `#${button.dataset.themeTarget}`;
    }
  });
});
if ('IntersectionObserver' in window) {
  const navLinks = [...navigation.querySelectorAll('a')];
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navLinks.forEach(link => {
        if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-15% 0px -70% 0px' });
  navLinks.forEach(link => {
    const section = document.querySelector(link.hash);
    if (section) observer.observe(section);
  });
}
