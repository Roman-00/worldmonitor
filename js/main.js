document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    // Функция котора отвечает за скрытие и показ поиска
    const searchFunc = () => {
        const headerSearchBox = document.querySelector('.header__search--box'), 
            headerSearchBtn = document.querySelector('.header__search--btn'),
            headerSearchCancel = document.querySelector('.header__search--cancel'),
            headerSearchInput = document.querySelector('.header__search--input'); 

            headerSearchBtn.addEventListener('click', () => {
                headerSearchBox.classList.add('header__search--box-active');
                headerSearchInput.classList.add('header__search--input-active');
                headerSearchBtn.classList.add('header__search--btn-active');
                headerSearchCancel.style.display = 'block';
            });

            headerSearchCancel.addEventListener('click', () => {
                headerSearchBox.classList.remove('header__search--box-active');
                headerSearchInput.classList.remove('header__search--input-active');
                headerSearchBtn.classList.remove('header__search--btn-active');
                headerSearchCancel.style.display = 'none';
            });
    };

    const menuSubMenu = () => {

        const submenuItemSelect = document.querySelector('.submenu__item--select');
        const navItemSubmenu2 = document.querySelector('.nav__item--submenu-2');

        submenuItemSelect.addEventListener('click', () => {
            navItemSubmenu2.classList.toggle('nav__item--submenu-2--active');
        });

    };


    /* Инициализируем все функции скриптов */
    const init = () => {
        searchFunc();
        menuSubMenu();
    };

    init();


});