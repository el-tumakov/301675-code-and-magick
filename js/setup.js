'use strict';

/**
  * Убираем скрытие блока с настрйоками персонажа.
  */
var setup = document.querySelector('.setup');
setup.classList.remove('hidden');
/**
  * Массивы с набором имен, фамилий, цвета плаща и цвета глаза для персонажа.
  */
var firstNames = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];
var lastNames = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];
var coatColors = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
var eyesColors = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

/**
 * Функция нахождения рандомного элемента в массиве.
 * @param {Object} arr
 * @return {number}
 */
var getRandom = function (arr) {
  return Math.floor(Math.random() * arr.length);
};

var characters = []; // Массив объектов со свойствами персонажей.
var COUNT_CHARACTERS = 4; // Количество похожих персонажей.

/**
 * Цикл создания объектов в массиве.
 * Присвоение свойствам объектов случайных значений.
 */
for (var i = 0; i < COUNT_CHARACTERS; i++) {
  characters[i] = [
    {
      name: firstNames[getRandom(firstNames)] + ' ' + lastNames[getRandom(lastNames)],
      coatColor: coatColors[getRandom(coatColors)],
      eyesColor: eyesColors[getRandom(eyesColors)]
    }
  ];
} // ТУТ Я НЕ УВЕРЕН в ПРАВИЛЬНОСТИ НАПИСАНИЯ ЦИКЛА, МОЖЕТ СТОИЛО ОБА ЦИКЛА ОБЪЕДИНИТЬ В ОДИН?
// ТОГДА ВООБЩЕ НЕ ПРИШЛОСЬ БЫ СОЗДАВАТЬ МАССИВ, А БЫЛ БЫ ПРОСТОЙ ОБЪЕКТ, У КОТОРОГО С КАЖДОЙ ИТЕРАЦИЕЙ МЕНЯЛИСЬ БЫ ЗНАЧЕНИЯ СВОЙСТВ.

var setupList = document.querySelector('.setup-similar-list'); // Блок, внутрь которого будем добавлять шаблон.
var template = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item'); // Шаблон блока похожего персонажа.

/**
 * Этот цикл добавляет блок похожего персонажа в DOM.
 * Для соответствующих элементов добавляет значения свойств из массива объектов для персонажа.
 */
for (i = 0; i < COUNT_CHARACTERS; i++) {
  var wizard = template.cloneNode(true);
  setupList.appendChild(wizard);

  var wizardCoat = document.querySelector('.setup-similar-item:nth-child(' + (i + 1) + ') .wizard-coat');
  var wizardEyes = document.querySelector('.setup-similar-item:nth-child(' + (i + 1) + ') .wizard-eyes');
  var wizardName = document.querySelector('.setup-similar-item:nth-child(' + (i + 1) + ') .setup-similar-label');

  wizardCoat.setAttribute('fill', characters[i][0].coatColor);
  wizardEyes.setAttribute('fill', characters[i][0].eyesColor);
  wizardName.textContent = characters[i][0].name;
  // 0 ЗДЕСЬ ПОЯВЛЯЕТСЯ, ПОТОМУ ЧТО У МЕНЯ В ПЕРВОМ ЦИКЛЕ ПОЛУЧАЕТСЯ ДВУМЕРНЫЙ МАССИВ.
  // Я НЕ ПРИДУМАЛ, КАК СДЕЛАТЬ ПО ДРУГОМУ, КРОМЕ ВАРИАНТА ВЫШЕ.
}

/**
 * Убираем скрытие блока с похожими персонажами
 */
var setupSimilar = document.querySelector('.setup-similar');
setupSimilar.classList.remove('hidden');
