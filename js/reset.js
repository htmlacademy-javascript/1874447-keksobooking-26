import {resetMap} from './map.js';
import {resetSlider} from './slider.js';

const resetElement = document.querySelector('.ad-form__reset');

resetElement.addEventListener('click', () => {
  resetMap();
  resetSlider();
  // document.querySelector('#price').placeholder = 1000;
  // document.querySelector('.ad-form__slider').noUiSlider.reset();
});

