'use strict';

var KEYCODE_ESC = 27;
var link = document.querySelector('.main-nav__button');
var popup = document.querySelector('.modal-window');
var close = popup.querySelector('.modal-window__close');
var form = popup.querySelector('.modal-window__filter');
var login = popup.querySelector('[name=name]');
var phone = popup.querySelector('[name=phone]');
var feedback = popup.querySelector('[name=question]');

var isStorageSupport = true;
var storage = '';
try {
  storage = localStorage.getItem('login');
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add('modal-show');
  if (storage && login.value && phone.value) {
    feedback.focus();
  } else {
    login.focus();
  }
});

close.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.remove('modal-show');
  popup.classList.remove('modal-error');
});

form.addEventListener('submit', function (evt) {
  if (!login.value || !phone.value) {
    evt.preventDefault();
    popup.classList.remove('modal-error');
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add('modal-error');
  } else {
    if (isStorageSupport) {
      localStorage.setItem('login', login.value);
    }
  }
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === KEYCODE_ESC) {
    evt.preventDefault();
    if (popup.classList.contains('modal-show')) {
      popup.classList.remove('modal-show');
      popup.classList.remove('modal-error');
    }
  }
});
