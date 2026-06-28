const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
if (burger && menu) {
  burger.addEventListener('click', () => menu.classList.toggle('open'));
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => menu.classList.remove('open')));
}

const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: .12 });
reveals.forEach(el => observer.observe(el));

const form = document.querySelector('[data-form]');
const success = document.querySelector('.success');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (success) success.classList.add('show');
    form.reset();
  });
}

const filters = document.querySelectorAll('[data-filter]');
const cars = document.querySelectorAll('[data-car]');
filters.forEach(btn => {
  btn.addEventListener('click', () => {
    filters.forEach(item => item.classList.remove('active'));
    btn.classList.add('active');
    const value = btn.dataset.filter;
    cars.forEach(card => {
      card.style.display = value === 'all' || card.dataset.car === value ? '' : 'none';
    });
  });
});
