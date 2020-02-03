'use strict';
var btnScrollDown =
document.querySelector('.promo__button');

btnScrollDown.addEventListener('click', function (evt) {
  evt.preventDefault();
  window.scrollBy({
    top: 3079,
    left: 0,
    behavior: 'smooth'
  });
});
