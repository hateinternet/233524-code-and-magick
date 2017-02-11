'use strict';

window.utils = (function () {
  return {
    getRandomElement: function (array) {
      return array[Math.floor(Math.random() * array.length)];
    },
    getRandomElementExcept: function (array, element) {
      var currentElement = element;
      while (currentElement === element) {
        currentElement = window.utils.getRandomElement(array);
      }
      return currentElement;
    }
  };
})();
