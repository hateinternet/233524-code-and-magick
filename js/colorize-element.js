'use strict';

var changeColor = function (element, colors, property, currentValue) {
  currentValue = window.utils.getRandomElementExcept(colors, currentValue);
  element.style[property] = currentValue;
  return currentValue;
};

window.colorizeElement = function (element, colors, property) {
  var currentValue = element.style[property];
  element.addEventListener('click', function () {
    currentValue = changeColor(element, colors, property, currentValue);
  });
  element.addEventListener('keydown', function (evt) {
    if (window.isActivateEvent(evt)) {
      currentValue = changeColor(element, colors, property, currentValue);
    }
  });
};
