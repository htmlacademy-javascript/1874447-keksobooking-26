const adForm = document.querySelector('.ad-form');
const mapFilter = document.querySelector('.map__filters');
const disabledField = document.querySelectorAll('select.map__filter, fieldset');

const roomNumber = adForm.querySelector('#room_number');
const capacity = adForm.querySelector('#capacity');
const guestNumber = capacity.querySelectorAll('option');

const type = adForm.querySelector('#type');
const price = adForm.querySelector('#price');

const timeIn = adForm.querySelector('#timein');
const timeOut = adForm.querySelector('#timeout');
const formTime = adForm.querySelector('.ad-form__element--time');

const TypeOfRoom  = {
  bungalow: '0',
  flat: '1000',
  hotel: '3000',
  house: '5000',
  palace: '10000',
};

const NumberOfGuests = {
  1: ['1'],
  2: ['1', '2'],
  3: ['1', '2', '3'],
  100: ['0'],
};

const validateRoom = () => {
  const roomValue = roomNumber.value;

  guestNumber.forEach((guest) => {
    const isDisabled = (NumberOfGuests[roomValue].indexOf(guest.value) === -1);
    guest.selected = NumberOfGuests[roomValue][0] === guest.value;
    guest.disabled = isDisabled;
    guest.hidden = isDisabled;
  });
};

validateRoom();

const onRoomNumberChange = () => {
  validateRoom();
};

roomNumber.addEventListener('change', onRoomNumberChange);

const setDisabledState = () => {
  disabledField.forEach((item) => {
    item.disabled = !item.disabled;
  });
};

const onTypeOfRoomChange = () => {
  const minPrice = TypeOfRoom[type.value];
  price.placeholder = minPrice;
  price.min = minPrice;
};
onTypeOfRoomChange();

type.addEventListener('change', onTypeOfRoomChange);

const onTimeChange = (evt) => {
  timeIn.value = evt.target.value;
  timeOut.value = evt.target.value;
};

formTime.addEventListener('change', onTimeChange);

const toggleInteractive = () => {
  adForm.classList.toggle('ad-form--disabled');
  mapFilter.classList.toggle('map__filters--disabled');

  setDisabledState();
};

toggleInteractive();

export{adForm};
