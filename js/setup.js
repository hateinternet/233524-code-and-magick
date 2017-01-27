'use strict';

var setupOpen = document.querySelector('.setup-open');
var setupWindow = document.querySelector('.setup');
var setupClose = setupWindow.querySelector('.setup-close');
var fieldUserName = setupWindow.querySelector('.setup-user-name');
var wizardCoat = setupWindow.querySelector('#wizard-coat');
var wizardCoatColors = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
var colorsCoatCounter = 0;
var wizardEyes = setupWindow.querySelector('#wizard-eyes');
var wizardEyesColors = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];
var colorsEyesCounter = 0;
var wizardFireball = setupWindow.querySelector('.setup-fireball-wrap');
var wizardFireballColors = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

fieldUserName.required = true;
fieldUserName.maxLength = 50;

setupOpen.addEventListener('click', function () {
  setupWindow.classList.remove('invisible');
});

setupClose.addEventListener('click', function () {
  setupWindow.classList.add('invisible');
});

wizardCoat.addEventListener('click', function () {
  colorsCoatCounter = (colorsCoatCounter >= wizardCoatColors.length - 1) ? 0 : colorsCoatCounter + 1;
  wizardCoat.style.fill = wizardCoatColors[colorsCoatCounter];
});

wizardEyes.addEventListener('click', function () {
  colorsEyesCounter = (colorsEyesCounter >= wizardEyesColors.length - 1) ? 0 : colorsEyesCounter + 1;
  wizardEyes.style.fill = wizardEyesColors[colorsEyesCounter];
});

wizardFireball.addEventListener('click', function () {
  wizardFireball.style.backgroundColor = wizardFireballColors[Math.floor(Math.random() * wizardFireballColors.length - 1)];
});
