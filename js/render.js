'use strict';

window.renderWizard = function (data) {
  var newWizard = document.querySelector('.setup-wizard-wrap').cloneNode(true);
  var name = document.createElement('span');
  name.style.fontSize = '10px';
  name.textContent = data.name;
  newWizard.appendChild(name);
  newWizard.style.display = 'flex';
  newWizard.style.flexDirection = 'column-reverse';
  var wizardElement = newWizard.children[0];
  window.utils.changeIdToClass(wizardElement.querySelectorAll('*'));
  wizardElement.style.position = 'static';
  wizardElement.style.width = 70;
  wizardElement.style.height = 70;
  wizardElement.querySelector('.wizard-coat').style.fill = data.colorEyes;
  wizardElement.querySelector('.wizard-eyes').style.fill = data.colorCoat;
  return newWizard;
};
