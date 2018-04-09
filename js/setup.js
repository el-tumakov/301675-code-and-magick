'use strict';

/**
  * Убираем скрытие блока с настрйоками персонажа.
  */
var setup = document.querySelector('.setup');
setup.classList.remove('hidden');
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
