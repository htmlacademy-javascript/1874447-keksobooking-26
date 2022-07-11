import {adForm} from './form.js';

const pristine = new Pristine(adForm, {
  classTo: 'ad-form__element',
  errorTextParent: 'ad-form__element',
  errorTextClass: 'ad-form__element--error-text',
});

const successTemplate = document.querySelector('#success').content.querySelector('.success');
const successMessage = successTemplate.cloneNode(true);
const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const errorMessage = errorTemplate.cloneNode(true);
const main = document.querySelector('main');
const buttonClose = errorMessage.querySelector('.error__button');

const openSubmitMessage = (message) => {
  main.appendChild(message);
};

document.addEventListener('keydown', (evt) => {
  if(evt.key === 'Escape') {
    evt.preventDefault();
    successMessage.remove();
    errorMessage.remove();
  }
});

document.addEventListener('click', () => {
  successMessage.remove();
  errorMessage.remove();
});

buttonClose.addEventListener('click', () => {
  errorMessage.remove();
});


adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();
  if (isValid) {
    openSubmitMessage(successMessage);
  } else {
    openSubmitMessage(errorMessage);
  }

});
