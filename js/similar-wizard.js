'use strict';

(function () {

  var COUNT_CHARACTERS = 4; // Количество похожих персонажей.
  var URL = 'https://js.dump.academy/code-and-magick/data';

  var wizards = [];
  var coatColor;
  var eyesColor;
  var setupList = document.querySelector('.setup-similar-list'); // Блок, внутрь которого будем добавлять шаблон.
  var template = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item'); // Шаблон блока похожего персонажа.

  var getRank = function (wizard) {
    var rank = 0;

    if (wizard.colorCoat === coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === eyesColor) {
      rank += 1;
    }

    return rank;
  }

  var namesComparator = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  }

  /**
   * Функция генерирования похожего персонажа
   * @param {Array} characters
   * @return {string}
   */
  var renderWizard = function (characters) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < COUNT_CHARACTERS; i++) {
      var wizard = template.cloneNode(true);

      var wizardCoat = wizard.querySelector('.wizard-coat');
      var wizardEyes = wizard.querySelector('.wizard-eyes');
      var wizardName = wizard.querySelector('.setup-similar-label');

      wizardCoat.setAttribute('fill', characters[i].colorCoat);
      wizardEyes.setAttribute('fill', characters[i].colorEyes);
      wizardName.textContent = characters[i].name;

      fragment.appendChild(wizard);
    }

    setupList.appendChild(fragment);
  };

  var updateWizards = function () {
    console.log(
      wizards.sort(function (left, right) {
        var rankDiff = getRank(right) - getRank(left);

        if (rankDiff === 0) {
          rankDiff = namesComparator(left.name, right.name);
        }
      })
    );
    renderWizard(wizards.sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);

      if (rankDiff === 0) {
        rankDiff = namesComparator(left.name, right.name);
      }

      return rankDiff;
    }));
  };

  window.changeColors.coatChange = function (color) {
    coatColor = color;
    updateWizards();
    console.log(coatColor);
  };

  window.changeColors.eyesChange = function (color) {
    eyesColor = color;
    updateWizards();
  };

  /**
   * Загрузка данных с сервера.
   * Генерирование волшебников с этими данными.
   * Отрисовка волшебников на странице.
   * @param {Object} data - данные с сервера.
   */
  var successLoad = function (data) {
    wizards = data;
    updateWizards();

    /**
     * Убираем скрытие блока с похожими персонажами
     */
    var setupSimilar = document.querySelector('.setup-similar');
    setupSimilar.classList.remove('hidden');
  };

  window.backend(URL, successLoad, window.utils.errorLoad, 'GET');
})();
