'use strict';

/**
  * Массивы с набором имен, фамилий, цвета плаща и цвета глаза для персонажа.
  */
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
var FIREBALL_COLORS = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;


/**
 * Функция нахождения рандомного элемента в массиве.
 * @param {Array} arr
 * @return {number}
 */
var getRandomElementArray = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var wizards = []; // Массив объектов со свойствами персонажей.
var COUNT_CHARACTERS = 4; // Количество похожих персонажей.

/**
 * Цикл создания объектов в массиве.
 * Присвоение свойствам объектов случайных значений.
 */
for (var i = 0; i < COUNT_CHARACTERS; i++) {
  wizards[i] = {
    name: getRandomElementArray(FIRST_NAMES) + ' ' + getRandomElementArray(LAST_NAMES),
    coatColor: getRandomElementArray(COAT_COLORS),
    eyesColor: getRandomElementArray(EYES_COLORS)
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


/**
  * Скрытие и закрытие блока с настрйоками персонажа.
  */
var setup = document.querySelector('.setup');
var setupButton = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');
var setupUserName = document.querySelector('.setup-user-name');


/**
 * Закрытие окна с настройками персонажа при нажатии на ESC.
 * @param {Object} evt - вызываем свойство keyCode объекта event.
 */
var onSetupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE && !(setupUserName === document.activeElement)) {
    setupCloseClickHandler();
  }
};
/**
 * Открытие окна с настройками персонажа при нажатии ENTER на кнопку setup-open.
 * @param {Object} evt - вызываем свойство keyCode объекта event.
 */
var onSetupButtonEnterPress = function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    setupButtonClickHandler();
  }
};
/**
 * Закрытие окна с настройками персонажа при нажатии ENTER на кнопку setup-close.
 * @param {Object} evt - вызываем свойство keyCode объекта event.
 */
var onSetupCloseEnterPress = function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    setupCloseClickHandler();
  }
};
/**
 * Показ окна с настройками персонажа.
 */
var setupButtonClickHandler = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onSetupEscPress);
};
/**
 * Скрытие окна с настройками персонажа.
 */
var setupCloseClickHandler = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onSetupEscPress);
};

setupButton.addEventListener('click', setupButtonClickHandler);
setupButton.addEventListener('keydown', onSetupButtonEnterPress);
setupClose.addEventListener('click', setupCloseClickHandler);
setupClose.addEventListener('keydown', onSetupCloseEnterPress);


/**
 * Валидация ввода имени персонажа.
 */
setupUserName.setAttribute('minlength', 2);


/**
 * Изменение цвета глаз волшебника.
 */
var setupWizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
var inputWizardEyes = document.querySelector('input[name="eyes-color"]');
/**
 * Изменение цвета глаз персонажа при нажатии на ENTER.
 * @param {Object} evt - вызываем свойство keyCode объекта event.
 */
var onSetupWizardEyesEnterPress = function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    setupWizardEyesClickHandler();
  }
};

var indexWizardEyesColor = 1;
var setupWizardEyesClickHandler = function () {
  setupWizardEyes.setAttribute('fill', EYES_COLORS[indexWizardEyesColor]);
  inputWizardEyes.value = EYES_COLORS[indexWizardEyesColor];

  if (indexWizardEyesColor === EYES_COLORS.length - 1) {
    indexWizardEyesColor = 0;
  } else {
    indexWizardEyesColor++;
  }
};

setupWizardEyes.addEventListener('click', setupWizardEyesClickHandler);
setupWizardEyes.addEventListener('keydown', onSetupWizardEyesEnterPress);


/**
 * Изменение цвета фаербола у волшебника.
 */
var setupFireball = document.querySelector('.setup-fireball-wrap');
var inputFireball = document.querySelector('input[name="fireball-color"]');

var onSetupFireballEnterPress = function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    setupFireballClickHandler();
  }
};

var indexFireballColor = 1;
var setupFireballClickHandler = function () {
  setupFireball.setAttribute('style', 'background-color: ' + FIREBALL_COLORS[indexFireballColor]);
  inputFireball.value = FIREBALL_COLORS[indexFireballColor];

  if (indexFireballColor === FIREBALL_COLORS.length - 1) {
    indexFireballColor = 0;
  } else {
    indexFireballColor++;
  }
};

setupFireball.addEventListener('click', setupFireballClickHandler);
setupFireball.addEventListener('keydown', onSetupFireballEnterPress);
