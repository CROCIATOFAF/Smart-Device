'use strict';
var btnScrollDown =
document.querySelector('.promo__scroll-link');
//добавить переменную блока и в window
var advantagesSecton = document.querySelector('.advantages');

btnScrollDown.addEventListener('click', function (evt) {
  evt.preventDefault();
  advantagesSecton.scrollIntoView({
    block: "start",
    behavior: 'smooth'
  });
});
