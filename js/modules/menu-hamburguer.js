export default function initMenuHamburguer() {
  const hamburger = document.querySelector('.js-hamburger');
  const menu = document.querySelector('.js-mobile-menu');
  const closeElements = document.querySelectorAll('.js-mobile-close');

  if (!hamburger || !menu) return;
  /* ensure menu starts hidden so it cannot block scroll */
  menu.style.display = 'none';

  function openMenu() {
    menu.classList.add('active');
    hamburger.classList.add('active');
    menu.style.display = 'flex';
  }

  function closeMenu() {
    menu.classList.remove('active');
    hamburger.classList.remove('active');
    menu.style.display = 'none';
  }

  function toggleMenu() {
    const isOpen = menu.classList.contains('active');

    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  hamburger.addEventListener('click', toggleMenu);

  closeElements.forEach((el) => {
    el.addEventListener('click', closeMenu);
  });
}
