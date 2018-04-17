'use strict';

(function () {
  var EYES_COLORS = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ];
  var ENTER_KEYCODE = 13;

  /**
 * Изменение цвета глаз волшебника.
 */
  var setupWizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
  var inputWizardEyes = document.querySelector('input[name="eyes-color"]');
  var indexWizardEyesColor = 1;

  /**
   * Смена цвета глаза у персонажа.
   */
  var changeWizardEyes = function () {
    setupWizardEyes.setAttribute('fill', EYES_COLORS[indexWizardEyesColor]);
    inputWizardEyes.value = EYES_COLORS[indexWizardEyesColor];

    if (indexWizardEyesColor === EYES_COLORS.length - 1) {
      indexWizardEyesColor = 0;
    } else {
      indexWizardEyesColor++;
    }
  };

  /**
   * Изменение цвета глаз персонажа при нажатии на ENTER.
   * @param {Object} evt - вызываем свойство keyCode объекта event.
   */
  var setupWizardEyesKeydownHandler = function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      changeWizardEyes();
    }
  };

  /**
   * Обработчик клика на глаза персонажа.
   * Меняет цвет глаз.
   */
  var setupWizardEyesClickHandler = function () {
    changeWizardEyes();
  };

  setupWizardEyes.addEventListener('click', setupWizardEyesClickHandler);
  setupWizardEyes.addEventListener('keydown', setupWizardEyesKeydownHandler);
})();
