'use strict';

window.renderWizard = function (data) {
  var newWizard = document.querySelector('.setup-wizard-wrap').cloneNode(true);
  var name = document.createElement('span');
  name.textContent = data.name;
  newWizard.appendChild(name);
  var wizardElement = newWizard.children[0];
  window.utils.changeIdToClass(wizardElement.querySelectorAll('*'));
  wizardElement.querySelector('.wizard-coat').style.fill = data.colorEyes;
  wizardElement.querySelector('.wizard-eyes').style.fill = data.colorCoat;
  return newWizard;
};
