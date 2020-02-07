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
