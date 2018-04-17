'use strict';

(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;
  var SETUP_TOP = '80px';
  var SETUP_LEFT = '50%';

  /**
  * Скрытие и закрытие блока с настрйоками персонажа.
  */
  var setup = document.querySelector('.setup');
  var setupButton = document.querySelector('.setup-open');
  var setupClose = document.querySelector('.setup-close');
  var setupUserName = document.querySelector('.setup-user-name');

  /**
   * Показ окна с настройками персонажа.
   */
  var openSetup = function () {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', setupKeydownHandler);
  };

  /**
   * Скрытие окна с настройками персонажа.
   */
  var closeSetup = function () {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', setupKeydownHandler);

    setup.style.top = SETUP_TOP;
    setup.style.left = SETUP_LEFT;
  };

  /**
   * Закрытие окна с настройками персонажа при нажатии на ESC.
   * @param {Object} evt - вызываем свойство keyCode объекта event.
   */
  var setupKeydownHandler = function (evt) {
    if (evt.keyCode === ESC_KEYCODE && !(setupUserName === document.activeElement)) {
      closeSetup();
    }
  };

  /**
   * Открытие окна с настройками персонажа при нажатии ENTER на кнопку setup-open.
   * @param {Object} evt - вызываем свойство keyCode объекта event.
   */
  var setupButtonKeydownHandler = function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      openSetup();
    }
  };

  /**
   * Закрытие окна с настройками персонажа при нажатии ENTER на кнопку setup-close.
   * @param {Object} evt - вызываем свойство keyCode объекта event.
   */
  var setupCloseKeydownHandler = function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      closeSetup();
    }
  };

  /**
   * Обработчик клика на кнопку с настройками.
   * Открывает окно настроек.
   */
  var setupButtonClickHandler = function () {
    openSetup();
  };

  /**
   * Обработчик клика на кнопку закрытия настроек.
   * Закрывает окно настроек.
   */
  var setupCloseClickHandler = function () {
    closeSetup();
  };

  setupButton.addEventListener('click', setupButtonClickHandler);
  setupButton.addEventListener('keydown', setupButtonKeydownHandler);
  setupClose.addEventListener('click', setupCloseClickHandler);
  setupClose.addEventListener('keydown', setupCloseKeydownHandler);
})();
