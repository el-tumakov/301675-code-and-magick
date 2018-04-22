'use strict';

(function () {

  var COUNT_CHARACTERS = 4; // Количество похожих персонажей.
  var URL = 'https://js.dump.academy/code-and-magick/data';

  var setupList = document.querySelector('.setup-similar-list'); // Блок, внутрь которого будем добавлять шаблон.
  var template = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item'); // Шаблон блока похожего персонажа.

  /**
   * Функция генерирования похожего персонажа
   * @param {Array} characters
   * @return {string}
   */
  var renderWizard = function (characters) {
    var wizard = template.cloneNode(true);

    var wizardCoat = wizard.querySelector('.wizard-coat');
    var wizardEyes = wizard.querySelector('.wizard-eyes');
    var wizardName = wizard.querySelector('.setup-similar-label');

    wizardCoat.setAttribute('fill', characters.colorCoat);
    wizardEyes.setAttribute('fill', characters.colorEyes);
    wizardName.textContent = characters.name;

    return wizard;
  };

  /**
   * Загрузка данных с сервера.
   * Генерирование волшебников с этими данными.
   * Отрисовка волшебников на странице.
   * @param {Object} data - данные с сервера.
   */
  var successLoad = function (data) {
    var wizards = data;
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < COUNT_CHARACTERS; i++) {
      fragment.appendChild(renderWizard(wizards[window.utils.getRandomInt(0, wizards.length)]));
    }

    setupList.appendChild(fragment);

    /**
     * Убираем скрытие блока с похожими персонажами
     */
    var setupSimilar = document.querySelector('.setup-similar');
    setupSimilar.classList.remove('hidden');
  };

  window.backend(URL, successLoad, window.utils.errorLoad, 'GET');
})();
