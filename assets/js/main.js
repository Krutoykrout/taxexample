
const menuButton = document.querySelector('[data-menu-button]');
const mainNav = document.querySelector('[data-main-nav]');
if (menuButton && mainNav) {
  menuButton.addEventListener('click', () => mainNav.classList.toggle('is-open'));
}
const lightbox = document.createElement('div');
lightbox.className = 'lightbox';
lightbox.innerHTML = '<button aria-label="Закрыть">×</button><img alt="">';
document.body.appendChild(lightbox);
const lightboxImg = lightbox.querySelector('img');
const closeLightbox = () => lightbox.classList.remove('is-open');
lightbox.querySelector('button').addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (event) => { if (event.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeLightbox(); });
document.querySelectorAll('[data-lightbox]').forEach((img) => {
  img.addEventListener('click', () => { lightboxImg.src = img.getAttribute('src'); lightbox.classList.add('is-open'); });
});
document.querySelectorAll('[data-main-photo]').forEach((mainPhoto) => {
  const group = mainPhoto.closest('[data-car-gallery]');
  if (!group) return;
  group.querySelectorAll('[data-thumb]').forEach((button) => {
    button.addEventListener('click', () => {
      const src = button.querySelector('img')?.getAttribute('src');
      if (src) mainPhoto.setAttribute('src', src);
    });
  });
});
