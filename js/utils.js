'use strict';

(function () {
  window.utils = {
    /**
     * Функция получения рандомного элемента в заданном диапазоне.
     * @param {number} min - минимальный диапазон.
     * @param {number} max - максимальный диапазон.
     * @return {number} - рандомное число.
     */
    getRandomInt: function (min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    },

    /**
     * Функция нахождения рандомного элемента в массиве.
     * @param {Array} arr
     * @return {number}
     */
    getRandomElementArray: function (arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    },

    /**
     * Функция нахождения максимального элемента в массиве.
     * @param {Array} arr - исходный массив.
     * @return {number} maxElement - номер максимального элемента в массиве.
     */
    getMaxElement: function (arr) {
      var maxElement = arr[0];

      for (var i = 0; i < arr.length; i++) {
        if (arr[i] > maxElement) {
          maxElement = arr[i];
        }
      }

      return maxElement;
    },

    /**
     * Перетаскивание элемента.
     * @param {Object} evt - event.
     * @param {string} elem - элемент, который хотим перетащить.
     */
    dragElement: function (evt, elem) {
      evt.preventDefault();

      var startCoords = {
        x: evt.clientX,
        y: evt.clientY
      };

      var mousemoveHandler = function (moveEvt) {
        moveEvt.preventDefault();

        var shift = {
          x: startCoords.x - moveEvt.clientX,
          y: startCoords.y - moveEvt.clientY
        };

        startCoords = {
          x: moveEvt.clientX,
          y: moveEvt.clientY
        };

        elem.style.top = (elem.offsetTop - shift.y) + 'px';
        elem.style.left = (elem.offsetLeft - shift.x) + 'px';
      };

      var mouseupHandler = function (upEvt) {
        upEvt.preventDefault();

        document.removeEventListener('mousemove', mousemoveHandler);
        document.removeEventListener('mouseup', mouseupHandler);
      };

      document.addEventListener('mousemove', mousemoveHandler);
      document.addEventListener('mouseup', mouseupHandler);
    }
  };
})();
