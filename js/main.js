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

    const menuShow = () => {
        const categoriesSubmenuItemActive = document.querySelector('.categories__submenu-item--active');
        const categoriesSubmenuThree = document.querySelector('.categories__submenu--three');
        const navItem = document.querySelector('.nav__item');
        const categoriesSubmenu = document.querySelector('.categories__submenu');

        categoriesSubmenuItemActive.addEventListener('click', () => {
            categoriesSubmenuThree.classList.toggle('categories__submenu--three-active');
        });

        navItem.addEventListener('mouseenter', () => {
            categoriesSubmenu.style.display = 'block';
        });

        navItem.addEventListener('mouseover', () => {
            categoriesSubmenu.style.display = 'none';
        });
    };


    /* Инициализируем все функции скриптов */
    const init = () => {
        searchFunc();
        menuShow();
    };

    init();


});