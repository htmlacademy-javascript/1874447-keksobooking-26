const adForm = document.querySelector('.ad-form');
const mapFilter = document.querySelector('.map__filters');
const disabledField = document.querySelectorAll('select.map__filter, fieldset');

const setDisabledState = () => {
  disabledField.forEach((item) => {
    item.disabled = !item.disabled;
  });
};

const toggleInteractive = () => {
  adForm.classList.toggle('ad-form--disabled');
  mapFilter.classList.toggle('map__filters--disabled');

  setDisabledState();
};

toggleInteractive();
