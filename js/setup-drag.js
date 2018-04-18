'use strict';

(function () {
  /**
   * Перетаскиевание окна с настройками.
   */
  var setup = document.querySelector('.setup');
  var setupUserPic = document.querySelector('.upload input');

  /**
   * Обработчик отпускания кливиши мыши на аватаре пользователя.
   * @param {Object} evt - event.
   */
  var setupUserPicMousedownHandler = function (evt) {
    window.utils.dragElement(evt, setup);
  };

  setupUserPic.addEventListener('mousedown', setupUserPicMousedownHandler);
})();
