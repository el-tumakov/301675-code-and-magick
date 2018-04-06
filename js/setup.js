'use strict';

var setup = document.querySelector('.setup');
setup.classList.remove('hidden');

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

var getRandom = function (arr) {
  return Math.floor(Math.random() * arr.length)
};

var characters = [];
var COUNT_CHARACTERS = 4;

for (var i = 0; i < COUNT_CHARACTERS; i++) {
  characters[i] = [
  {
    name: firstNames[getRandom (firstNames)] + ' ' + lastNames[getRandom (lastNames)],
    coatColor: coatColors[getRandom (coatColors)],
    eyesColor: eyesColors[getRandom (eyesColors)]
  }
];
}

console.log(characters);

