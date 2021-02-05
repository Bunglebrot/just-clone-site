'use strict';

let header = document.querySelector('.header');
let searchBtn = header.querySelector('.phone-contacts__search-btn');
let searchForm = header.querySelector('.search-form');

let mobileMenuBtn = header.querySelector('.mobile-menu__toggle-btn');
let mobileNavMenu = header.querySelector('.mobile-menu');


// скрытие и показ формы поиска по сайту
searchBtn.addEventListener('click', (e) => {
  searchForm.classList.toggle('search-form_hidden');
});

// toggle для показа мобильного меню
mobileMenuBtn.addEventListener('click', (e) => {
  mobileNavMenu.classList.toggle('mobile-menu_hidden');
});