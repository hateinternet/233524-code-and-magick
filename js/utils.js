'use strict';

window.utils = {};

window.utils.getRandomElement = function (array) {
  return array[Math.floor(Math.random() * (array.length - 1))];
};

window.utils.getRandomElementExcept = function (array, element) {
  var currentElement = element;
  while (currentElement === element) {
    currentElement = window.utils.getRandomElement(array);
  }
  return currentElement;
};
