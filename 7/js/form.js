const adForm = document.querySelector('.ad-form');
const mapFilter = document.querySelector('.map__filters');
const disabledField = document.querySelectorAll('select.map__filter, fieldset');

const roomNumber = adForm.querySelector('#room_number');
const capacity = adForm.querySelector('#capacity');
const guestNumber = capacity.querySelectorAll('option');

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

const toggleInteractive = () => {
  adForm.classList.toggle('ad-form--disabled');
  mapFilter.classList.toggle('map__filters--disabled');

  setDisabledState();
};

toggleInteractive();

export{adForm};
