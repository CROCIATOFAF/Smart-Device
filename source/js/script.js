'use strict';
var footerHeaderSections = document.querySelector('.footer__section--site-sections');
var footerHeaderContacts = document.querySelector('.footer__section--contacts');

// var footerToggleId = document.querySelector('#section-button');
// var footerTogglePlusId = document.querySelector('#section-button-two');

var footerToggle = document.querySelector('.footer__button-mobile-toggle');
var footerPlusToggle = document.querySelector('.footer__button-mobile-plus');
var footerList = document.querySelector('.footer__list');

footerHeaderSections.classList.remove('footer__section--nojs');
footerHeaderContacts.classList.remove('footer__section--nojs');

footerToggle.addEventListener('click', function () {
  if (footerList.classList.contains('footer__section--closed')) {
    footerList.classList.remove('footer__section--closed');
    footerList.classList.add('footer__section--opened');
  } else {
    footerList.classList.add('footer__section--closed');
    footerList.classList.remove('footer__section--opened');
  }
});


// 1) функция инициализации init. изначально стоит закрытие всех аккордеонов и навешевание обработчиков (addEventClick и тд).
// 2) функция переключения аккордеона. передаю аккордеон, который нужно закрыть.
// 3) циклом прохожу через все аккордеоны.(придумать общий класс для всех блоков с аккордеонами(accordeon)) и выполняю на всех блоках функию init.
// 4) в обработчике событие клика по кнопке +/- проверяю после срабатывния функции toggle проверяю закрыт или открыт аккордеон.
// 5) прохожу циклом все аккордеоны и должны закрыться аккордеоны все, кроме выбранного мной.
//
//
