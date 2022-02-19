(() => {
  const refs = {
    openMenuBtn: document.querySelector('.open-mob-menu'),
    closeMenuBtn: document.querySelector('.close-mob-menu'),
    menu: document.querySelector('.mobile-menu'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    // document.body.classList.toggle("menu-open")
    refs.menu.classList.toggle('is-hidden');
  }
})();



