function header (){
    const menuToggle = document.querySelector('.hamburger-menu'),
          menuOpen = document.querySelector('.menu-open');

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('menu-active');
        menuOpen.classList.toggle('menu-show');
    });
};

export default header;