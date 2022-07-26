import {TypeOfRoom} from './form.js';

const sliderElement = document.querySelector('.ad-form__slider');
const valueElement = document.querySelector('#price');
const specialElement = document.querySelector('#type');

valueElement.value = null;

noUiSlider.create(sliderElement, {
  range: {
    min: TypeOfRoom[specialElement.value],
    max: 100000,
  },
  start: TypeOfRoom[specialElement.value],
  step: 1,
  connect: 'lower',
  format: {
    to: function (value) {
      return value.toFixed(0);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

sliderElement.noUiSlider.on('update', () => {
  valueElement.value = sliderElement.noUiSlider.get();
});

specialElement.addEventListener('change', () => {
  const newValue = TypeOfRoom[specialElement.value];
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: newValue,
      max: 100000,
    },
    start: newValue,
  });
});

const resetSlider = () => {
  valueElement.placeholder = 1000;
  sliderElement.noUiSlider.reset();
};

export {resetSlider};
