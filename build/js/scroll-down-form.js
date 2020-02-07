'use strict';
var btnScrollDown =
document.querySelector('.promo__button');
var formSection = document.querySelector('.form')

btnScrollDown.addEventListener('click', function (evt) {
  evt.preventDefault();
  formSection.scrollIntoView({
    block: "start",
    behavior: 'smooth'
  });
});
