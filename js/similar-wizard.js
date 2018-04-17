'use strict';

(function () {

  var COUNT_CHARACTERS = 4; // Количество похожих персонажей.
  var FIRST_NAMES = [
    'Иван',
    'Хуан Себастьян',
    'Мария',
    'Кристоф',
    'Виктор',
    'Юлия',
    'Люпита',
    'Вашингтон'
  ];
  var LAST_NAMES = [
    'да Марья',
    'Верон',
    'Мирабелла',
    'Вальц',
    'Онопко',
    'Топольницкая',
    'Нионго',
    'Ирвинг'
  ];
  var COAT_COLORS = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];
  var EYES_COLORS = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ];

  var wizards = []; // Массив объектов со свойствами персонажей.
  /**
   * Цикл создания объектов в массиве.
   * Присвоение свойствам объектов случайных значений.
   */
  for (var i = 0; i < COUNT_CHARACTERS; i++) {
    wizards[i] = {
      name: window.utils.getRandomElementArray(FIRST_NAMES) + ' ' + window.utils.getRandomElementArray(LAST_NAMES),
      coatColor: window.utils.getRandomElementArray(COAT_COLORS),
      eyesColor: window.utils.getRandomElementArray(EYES_COLORS)
    };
  }

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

    wizardCoat.setAttribute('fill', characters.coatColor);
    wizardEyes.setAttribute('fill', characters.eyesColor);
    wizardName.textContent = characters.name;

    return wizard;
  };

  var fragment = document.createDocumentFragment();

  for (i = 0; i < COUNT_CHARACTERS; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }

  setupList.appendChild(fragment);

  /**
   * Убираем скрытие блока с похожими персонажами
   */
  var setupSimilar = document.querySelector('.setup-similar');
  setupSimilar.classList.remove('hidden');
})();
