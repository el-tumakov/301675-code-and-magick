'use strict';

(function () {

  var COUNT_CHARACTERS = 4; // Количество похожих персонажей.
  var URL = 'https://js.dump.academy/code-and-magick/data';

  var wizards = [];
  var coatColor;
  var eyesColor;
  var setupList = document.querySelector('.setup-similar-list'); // Блок, внутрь которого будем добавлять шаблон.
  var template = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item'); // Шаблон блока похожего персонажа.

  /**
   * Добавление рейтинга похожести других персонажей.
   * @param {string} wizard - один волшебник из массива, по которому будет сравнение по нашему волшебнику.
   * @return {number} rank - рейтинг похожести волшебника.
   */
  var getRank = function (wizard) {
    var rank = 0;

    if (wizard.colorCoat === coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === eyesColor) {
      rank += 1;
    }

    return rank;
  };

  /**
   * Сортировка по имени волшебника.
   * @param {string} left - волшебник в массиве слева.
   * @param {string} right - волшебник в массиве справа.
   * @return {number}
   * 1 - поставит левый элемент перед правым.
   * -1 - поставит правый элемент перед левым.
   * 0 - элементы равны.
   */
  var namesComparator = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };

  /**
   * Функция отрисовки блока с похожими персонажами.
   */
  var renderWizard = function () {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < COUNT_CHARACTERS; i++) {
      var wizard = template.cloneNode(true);
      fragment.appendChild(wizard);
    }

    setupList.appendChild(fragment);
  };

  /**
   * Функция добавления данных о похожих персонажах.
   * @param {array} characters - массив с данными о волшебниках.
   */
  var renderWizardData = function (characters) {
    var wizardCoat = setupList.querySelectorAll('.wizard-coat');
    var wizardEyes = setupList.querySelectorAll('.wizard-eyes');
    var wizardName = setupList.querySelectorAll('.setup-similar-label');

    for (var i = 0; i < COUNT_CHARACTERS; i++) {
      wizardCoat[i].setAttribute('fill', characters[i].colorCoat);
      wizardEyes[i].setAttribute('fill', characters[i].colorEyes);
      wizardName[i].textContent = characters[i].name;
    }
  };

  /**
   * Функция обновления данных о похожих персонажах.
   * Сортирует массив с волшебниками.
   * В начало массива ставит наиболее похожих на нашего персонажей.
   */
  var updateWizards = function () {
    renderWizardData(wizards.sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);

      if (rankDiff === 0) {
        rankDiff = namesComparator(left.name, right.name);
      }

      return rankDiff;
    }));
  };

  /**
   * Функция получения текущего цвета куртки у волшебника.
   * Устанавливает дебаунс обновления блока с похожими персонажеми.
   * @param {string} color - цвет куртки.
   */
  window.changeColors.coatChange = function (color) {
    coatColor = color;
    window.utils.debounce(updateWizards);
  };

  /**
   * Функция получения текущего цвета глаз у волшебника.
   * Устанавливает дебаунс обновления блока с похожими персонажами.
   * @param {string} color - цвет глаз.
   */
  window.changeColors.eyesChange = function (color) {
    eyesColor = color;
    window.utils.debounce(updateWizards);
  };

  /**
   * Загрузка данных с сервера.
   * Генерирование волшебников с этими данными.
   * Отрисовка волшебников на странице.
   * @param {Object} data - данные с сервера.
   */
  var successLoad = function (data) {
    wizards = data;
    renderWizard();
    updateWizards();

    /**
     * Убираем скрытие блока с похожими персонажами
     */
    var setupSimilar = document.querySelector('.setup-similar');
    setupSimilar.classList.remove('hidden');
  };

  window.backend(URL, successLoad, window.utils.errorLoad, 'GET');
})();
