function header (){
// работа с определением типа устройства
    // const isMobile = {
    //     Android: function (){
    //         return navigator.userAgent.match(/Android/i);
    //     },
    //     BlackBerry: function (){
    //         return navigator.userAgent.match(/BlackBerry/i);
    //     },
    //     iOS: function (){
    //         return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    //     },
    //     Opera: function (){
    //         return navigator.userAgent.match(/Opera Mini/i);
    //     },
    //     Windows: function (){
    //         return navigator.userAgent.match(/IEMobile/i);
    //     },
    //     any: function(){
    //         return (
    //             isMobile.Android() ||
    //             isMobile.BlackBerry() ||
    //             isMobile.iOS() ||
    //             isMobile.Opera() ||
    //             isMobile.Windows()
    //         );
    //     } 
    // };

    // if(isMobile.any()){
    //     document.body.classList.add('_touch');
    // }else{
    //     document.body.classList.add('_pc');
    // }

    // крепим htader при прокрутки страницы разрешением выше 980px
    const header = document.querySelector('.header');

    const showHeader = () => {
        let contentHeight = document.documentElement.clientHeight;
        let pageBegin = document.documentElement.getBoundingClientRect().top;

        if (Math.abs(pageBegin) >= contentHeight){
            header.style.position = 'fixed';
            header.style.top = '0';
            header.style.background = '#fff';
        } else {
            header.style.position = 'absolute'
            header.style.top = '13vh';
            header.style.background = '';
        }
    };

    const mediaQuery = window.matchMedia('(min-width: 980px)');
    if(mediaQuery.matches){
    window.addEventListener('scroll', showHeader);
    }


    // работаем с гамбургер меню показываем скрываем контант / анимация
    const menuToggle = document.querySelector('.hamburger-menu');

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('hamburger-menu--active');
        document.querySelector('.header__body').classList.toggle('header__body--active');
        document.body.classList.toggle('lock');

        const menuLink = document.querySelectorAll('.header__link');
        menuLink.forEach(item => {
            item.addEventListener('click', () => {
                if (item.getAttribute('href')){
                    console.log(1);
                    document.querySelector('.header__body').classList.remove('header__body--active');
                    menuToggle.classList.remove('hamburger-menu--active');
                    document.body.classList.remove('lock');
                }
            });
        })
    });
};

export default header;