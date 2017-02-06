'use strict';

var setupOpen = document.querySelector('.setup-open');
var setupOpenBtn = setupOpen.querySelector('.setup-open-icon');
var setupWindow = document.querySelector('.setup');
var setupClose = setupWindow.querySelector('.setup-close');
var fieldUserName = setupWindow.querySelector('.setup-user-name');
var btnSubmit = setupWindow.querySelector('.setup-submit');
var wizardCoat = setupWindow.querySelector('#wizard-coat');
var wizardCoatColors = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
var wizardEyes = setupWindow.querySelector('#wizard-eyes');
var wizardEyesColors = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];
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

var showDialog = function () {
  document.addEventListener('keydown', escapePressHandler);
  setupWindow.classList.remove('invisible');
  setupOpenBtn.setAttribute('aria-pressed', true);
  setupClose.setAttribute('aria-pressed', false);
};

var hideDialog = function () {
  setupWindow.classList.add('invisible');
  setupOpenBtn.setAttribute('aria-pressed', false);
  setupClose.setAttribute('aria-pressed', true);
  document.removeEventListener('keydown', escapePressHandler);
};

var escapePressHandler = function (evt) {
  if (window.isDeactivateEvent(evt)) {
    hideDialog();
  }
};

setupOpen.addEventListener('click', showDialog);
setupOpen.addEventListener('keydown', function (evt) {
  if (window.isActivateEvent(evt)) {
    showDialog();
  }
});

setupClose.addEventListener('click', hideDialog);
setupClose.addEventListener('keydown', function (evt) {
  if (window.isActivateEvent(evt)) {
    hideDialog();
  }
});

btnSubmit.addEventListener('click', hideDialog);
btnSubmit.addEventListener('keydown', function (evt) {
  if (window.isActivateEvent(evt)) {
    hideDialog();
  }
});

window.colorizeElement(wizardCoat, wizardCoatColors, 'fill');
window.colorizeElement(wizardEyes, wizardEyesColors, 'fill');
window.colorizeElement(wizardFireball, wizardFireballColors, 'backgroundColor');
