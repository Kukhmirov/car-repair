function header (){
    const menuToggle = document.querySelector('.hamburger-menu');

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('menu-active');
    });
};

export default header;