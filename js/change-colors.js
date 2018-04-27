'use strict';

(function () {
  var COAT_COLORS = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];
  var FIREBALL_COLORS = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];
  var EYES_COLORS = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ];
  var ENTER_KEYCODE = 13;

  /**
 * Изменение цвета куртки волшебника.
 */
  var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
  var inputWizardCoat = document.querySelector('input[name="coat-color"]');
  var indexCoatColor = 1;

  var wizardFireball = document.querySelector('.setup-fireball-wrap');
  var inputWizardFireball = document.querySelector('input[name="fireball-color"]');
  var indexFireballColor = 1;

  var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
  var inputWizardEyes = document.querySelector('input[name="eyes-color"]');
  var indexEyesColor = 1;

  /**
   * Функция смены цвета элемента.
   * @param {string} item - элемент DOM.
   * @param {string} inputOfItem - инпут, соответствующий этому элементу.
   * @param {number} indexColor - индекс цвета в массиве, соотвествющему этому элементу.
   * @param {array} colors - массив цветов для этого элемента.
   * @param {string} style - значение атрубута style, котороый используется для смены цвета.
   * @return {number} indexColor - возвращает измененный индекс цвета.
   */
  var changeColor = function (item, inputOfItem, indexColor, colors, style) {
    item.setAttribute('style', style + colors[indexColor]);
    inputOfItem.value = colors[indexColor];

    if (indexColor === colors.length - 1) {
      indexColor = 0;
    } else {
      indexColor++;
    }

    return indexColor;
  };

  /**
   * Обработчик нажатия клавиши на куртку.
   * При нажатии на ENTER меняет цвет куртки.
   * @param {Object} evt - event.
   */
  var wizardCoatKeydownHandler = function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      indexCoatColor = changeColor(wizardCoat, inputWizardCoat, indexCoatColor, COAT_COLORS, 'fill: ');
    }
  };

  /**
   * Обработчик нажатия клавиши на фаерболл.
   * При нажатии на ENTER меняет цвет фаерболла.
   * @param {Object} evt - event.
   */
  var wizardFireballKeydownHandler = function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      indexFireballColor = changeColor(wizardFireball, inputWizardFireball, indexFireballColor, FIREBALL_COLORS, 'background-color: ');
    }
  };

  /**
   * Обработчик нажатия клавиши на глазах.
   * При нажатии на ENTER меняет цвет глаз.
   * @param {Object} evt - event.
   */
  var wizardEyesKeydownHandler = function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      indexEyesColor = changeColor(wizardEyes, inputWizardEyes, indexEyesColor, EYES_COLORS, 'fill: ');
    }
  };

  /**
   * Обработчик клика на куртку персонажа.
   * Меняет цвет куртки.
   */
  var wizardCoatClickHandler = function () {
    indexCoatColor = changeColor(wizardCoat, inputWizardCoat, indexCoatColor, COAT_COLORS, 'fill: ');
  };

  /**
   * Обработчик клика на куртку персонажа.
   * Меняет цвет куртки.
   */
  var wizardFireballClickHandler = function () {
    indexFireballColor = changeColor(wizardFireball, inputWizardFireball, indexFireballColor, FIREBALL_COLORS, 'background-color: ');
  };

  /**
   * Обработчик клика на куртку персонажа.
   * Меняет цвет куртки.
   */
  var wizardEyesClickHandler = function () {
    indexEyesColor = changeColor(wizardEyes, inputWizardEyes, indexEyesColor, EYES_COLORS, 'fill: ');
  };

  wizardCoat.addEventListener('click', wizardCoatClickHandler);
  wizardCoat.addEventListener('keydown', wizardCoatKeydownHandler);

  wizardFireball.addEventListener('click', wizardFireballClickHandler);
  wizardFireball.addEventListener('keydown', wizardFireballKeydownHandler);

  wizardEyes.addEventListener('click', wizardEyesClickHandler);
  wizardEyes.addEventListener('keydown', wizardEyesKeydownHandler);
})();
