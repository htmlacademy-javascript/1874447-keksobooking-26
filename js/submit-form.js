import {adForm} from './form.js';
import {sendRequest} from './fetch.js';

import {resetMap} from './map.js';
import {resetSlider} from './slider.js';


const pristine = new Pristine(adForm, {
  classTo: 'ad-form__element',
  errorTextParent: 'ad-form__element',
  errorTextClass: 'ad-form__element--error-text',
});

const main = document.querySelector('main');


const onDocumentEscClick = (evt) => {
  if(evt.key === 'Escape') {
    evt.preventDefault();

    const overlay = document.querySelector('.overlay');

    overlay.remove();

    document.removeEventListener('keydown', onDocumentEscClick);
  }
};

const onDocumentClick = () => {
  const overlay = document.querySelector('.overlay');

  if (overlay) {
    overlay.remove();

    document.removeEventListener('keydown', onDocumentEscClick);
  }
};

const onSuccess = () => {
  const successTemplate = document.querySelector('#success').content.querySelector('.success');
  const successMessage = successTemplate.cloneNode(true);

  main.appendChild(successMessage);

  const overlay = document.querySelector('.overlay');

  overlay.addEventListener('click', onDocumentClick);

  document.addEventListener('keydown', onDocumentEscClick);
};

const onError = () => {
  const errorTemplate = document.querySelector('#error').content.querySelector('.error');
  const errorMessage = errorTemplate.cloneNode(true);

  main.appendChild(errorMessage);

  const overlay = document.querySelector('.overlay');

  overlay.addEventListener('click', onDocumentClick);

  document.addEventListener('keydown', onDocumentEscClick);
};

adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  if (pristine.validate()) {
    sendRequest(onSuccess, onError, 'POST', new FormData(adForm));
    adForm.reset();
    resetMap();
    resetSlider();
  } else {
    onError();
  }
});
