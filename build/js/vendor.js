'use strict';

var element = document.getElementById('tel');
var modalPhoneInput = document.getElementById('phone');

if (element && modalPhoneInput) {
  var maskOptions = {
    mask: '+{7}(000)000-00-00'
  };
  var mask = IMask(element, maskOptions);
  var maskTwo = IMask(modalPhoneInput, maskOptions);
}
