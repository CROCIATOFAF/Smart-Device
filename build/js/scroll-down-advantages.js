'use strict';
var btnScrollDown =
document.querySelector('.promo__scroll-link');

btnScrollDown.addEventListener('click', function (evt) {
  evt.preventDefault();
  window.scrollBy({
    top: 900,
    left: 0,
    behavior: 'smooth'
  });
});
