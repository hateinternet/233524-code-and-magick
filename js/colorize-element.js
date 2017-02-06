'use strict';

window.colorizeElement = function (element, colors, property) {
  var changeColor = function () {
    currentValue = window.utils.getRandomElementExcept(colors, currentValue);
    element.style[property] = currentValue;
  };
  var currentValue = element.style[property];
  element.addEventListener('click', function () {
    changeColor();
  });
  element.addEventListener('keydown', function (evt) {
    if (window.checkPressedEnter(evt)) {
      changeColor();
    }
  });
};
