/* ── Loader ── */
window.addEventListener('load', () => {
  setTimeout(() => document.getElementById('loader').classList.add('hidden'), 600);
});

/* ── Navbar scroll ── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 10);
  const backTop = document.getElementById('backTop');
  if (backTop) backTop.style.opacity = window.scrollY > 400 ? '1' : '0';
});

/* ── Hamburger ── */
const hamBtn = document.getElementById('hamBtn');
const mobileNav = document.getElementById('mobileNav');
if (hamBtn && mobileNav) {
  hamBtn.addEventListener('click', () => {
    const open = mobileNav.classList.toggle('open');
    hamBtn.setAttribute('aria-expanded', open);
    const spans = hamBtn.querySelectorAll('span');
    if (open) {
      spans[0].style.transform = 'translateY(7px) rotate(45deg)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'translateY(-7px) rotate(-45deg)';
    } else {
      spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    }
  });
}
function closeMobile() {
  if (mobileNav) mobileNav.classList.remove('open');
  if (hamBtn) hamBtn.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
}

/* ── Scroll reveal ── */
const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .animate-on-scroll');
const revealIO = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      revealIO.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
revealEls.forEach(el => revealIO.observe(el));

/* ── Skill bars ── */
const barIO = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.skill-bar-fill').forEach(bar => {
        const width = bar.dataset.w;
        if (width) bar.style.width = width + '%';
      });
      barIO.unobserve(e.target);
    }
  });
}, { threshold: 0.3 });
document.querySelectorAll('.skill-card').forEach(c => barIO.observe(c));

/* ── Dark mode toggle (toggles .dark class on html) ── */
const darkToggle = document.getElementById('darkToggle');
if (darkToggle) {
  function applyTheme(isDark) {
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.style.setProperty('--bg', '#141210');
      document.documentElement.style.setProperty('--bg-card', '#1E1C18');
      document.documentElement.style.setProperty('--text', '#F0EDE8');
      document.documentElement.style.setProperty('--text-mid', '#9C978F');
      document.documentElement.style.setProperty('--text-light', '#6E6A64');
      document.documentElement.style.setProperty('--border', '#2E2B26');
      document.documentElement.style.setProperty('--border-strong', '#3E3B36');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.setProperty('--bg', '#F7F4EF');
      document.documentElement.style.setProperty('--bg-card', '#FFFFFF');
      document.documentElement.style.setProperty('--text', '#1A1714');
      document.documentElement.style.setProperty('--text-mid', '#5C5751');
      document.documentElement.style.setProperty('--text-light', '#9C978F');
      document.documentElement.style.setProperty('--border', '#E4DFD8');
      document.documentElement.style.setProperty('--border-strong', '#C8C1B8');
    }
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    darkToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
  }

  // Initial load
  const stored = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isDark = stored === 'dark' || (!stored && prefersDark);
  applyTheme(isDark);

  // Toggle on click
  darkToggle.addEventListener('click', () => {
    const currentlyDark = document.documentElement.classList.contains('dark');
    applyTheme(!currentlyDark);
  });
}

