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

var ENTER_KEY_CODE = 13;
var ESCAPE_KEY_CODE = 27;

fieldUserName.required = true;
fieldUserName.maxLength = 50;

var isActivateEvent = function (evt) {
  return evt.keyCode && evt.keyCode === ENTER_KEY_CODE;
};

var isDeactivateEvent = function (evt) {
  return evt.keyCode && evt.keyCode === ESCAPE_KEY_CODE;
};

var showDialog = function () {
  setupWindow.classList.remove('invisible');
  setupOpenBtn.setAttribute('aria-pressed', true);
  setupClose.setAttribute('aria-pressed', false);
};

var hideDialog = function () {
  setupWindow.classList.add('invisible');
  setupOpenBtn.setAttribute('aria-pressed', false);
  setupClose.setAttribute('aria-pressed', true);
};

var setupOpenHandler = function () {
  showDialog();
  document.addEventListener('keydown', function (evnt) {
    if (isDeactivateEvent(evnt)) {
      hideDialog();
    }
  });
};

var setupCloseHandler = function (evt) {
  if (isActivateEvent(evt)) {
    hideDialog();
  }
};

setupOpen.addEventListener('click', setupOpenHandler);

setupOpen.addEventListener('keydown', function (evt) {
  if (isActivateEvent(evt)) {
    setupOpenHandler();
  }
});

setupClose.addEventListener('click', hideDialog);

setupClose.addEventListener('keydown', setupCloseHandler);

btnSubmit.addEventListener('click', hideDialog);

btnSubmit.addEventListener('keydown', setupCloseHandler);

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
