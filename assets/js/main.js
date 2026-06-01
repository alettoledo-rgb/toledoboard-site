function showTab(index) {
  const tabs = document.querySelectorAll('.solucoes-tab');
  const panels = document.querySelectorAll('.solucoes-panel');
  tabs.forEach((t, i) => t.classList.toggle('active', i === index));
  panels.forEach((p, i) => p.classList.toggle('active', i === index));
}

function toggleMenu() {
  const links = document.querySelector('.nav-links');
  const btn = document.querySelector('.nav-hamburger');
  links.classList.toggle('open');
  btn.classList.toggle('open');
}

// Close menu on link click
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      document.querySelector('.nav-links').classList.remove('open');
      document.querySelector('.nav-hamburger').classList.remove('open');
    });
  });
});

// Intersection Observer for fade-up animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.mvv-card, .sinal-step, .servico-card, .gov-fw-item, .tec-card, .ma-phase, .insight-card, .pitch-card, .tl-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(16px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});

// Contact form feedback
const form = document.querySelector('.contato-form');

if (form) {
  form.addEventListener('submit', () => {
    const btn = form.querySelector('.form-submit');

    btn.textContent = 'Enviando...';
    btn.style.background = '#2D6A0F';
    btn.disabled = true;
  });
}