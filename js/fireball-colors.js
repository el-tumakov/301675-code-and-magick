'use strict';

(function () {
  var FIREBALL_COLORS = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];
  var ENTER_KEYCODE = 13;

  var setupFireball = document.querySelector('.setup-fireball-wrap');
  var inputFireball = document.querySelector('input[name="fireball-color"]');
  var indexFireballColor = 1;

  /**
   * Изменение цвета фаерболла у волшебника.
   */
  var changeFireballColor = function () {
    setupFireball.setAttribute('style', 'background-color: ' + FIREBALL_COLORS[indexFireballColor]);
    inputFireball.value = FIREBALL_COLORS[indexFireballColor];

    if (indexFireballColor === FIREBALL_COLORS.length - 1) {
      indexFireballColor = 0;
    } else {
      indexFireballColor++;
    }
  };

  /**
   * Обработчик нажатия клавиши на фаерболл.
   * При нажатии на ENTER меняет цвет фаерболла.
   * @param {Object} evt - event.
   */
  var setupFireballKeydownHandler = function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      changeFireballColor();
    }
  };

  /**
   * Обработчик клика на фаерболл.
   * Меняет цвет фаерболла.
   */
  var setupFireballClickHandler = function () {
    changeFireballColor();
  };

  setupFireball.addEventListener('click', setupFireballClickHandler);
  setupFireball.addEventListener('keydown', setupFireballKeydownHandler);
})();
