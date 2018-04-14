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


/**
 * Валидация ввода имени персонажа.
 */
setupUserName.setAttribute('minlength', 2);


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
