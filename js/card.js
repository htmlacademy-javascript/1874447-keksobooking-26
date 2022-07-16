import {numDecline} from './util.js';

const cardTemplate = document.querySelector('#card').content.querySelector('.popup');

const renderFeatures = (features, container) => {
  const list = container.querySelectorAll('.popup__feature');

  if (list) {
    list.forEach((item) => {
      if (!features.includes(item.classList[1].replace('popup__feature--', ''))) {
        item.remove();
      }
    });
  }
};

const renderCard = (data) => {
  const cardElement = cardTemplate.cloneNode(true);

  const avatar = cardElement.querySelector('.popup__avatar');
  if (data.author.avatar) {
    avatar.src = data.author.avatar;
  } else {
    avatar.remove();
  }

  const title = cardElement.querySelector('.popup__title');

  if (data.offer.title) {
    title.textContent = data.offer.title;
  } else {
    title.remove();
  }

  const address = cardElement.querySelector('.popup__text--address');

  if (data.offer.address) {
    address.textContent = data.offer.address;
  } else {
    address.remove();
  }

  const price = cardElement.querySelector('.popup__text--price');

  if (data.offer.price) {
    price.textContent = `${data.offer.price} ₽/ночь`;
  } else {
    price.remove();
  }

  const type = cardElement.querySelector('.popup__type');

  switch (data.offer.type) {
    case 'flat':
      type.textContent = 'Квартира';
      break;
    case 'bungalow':
      type.textContent = 'Бунгало';
      break;
    case 'house':
      type.textContent = 'Дом';
      break;
    case 'palace':
      type.textContent = 'Дворец';
      break;
    case 'hotel':
      type.textContent = 'Отель';
      break;
  }
  if (!data.offer.type) {
    type.remove();
  }

  const capacity = cardElement.querySelector('.popup__text--capacity');

  capacity.textContent = `${data.offer.rooms} ${numDecline(data.offer.rooms, 'комната', 'комнаты', 'комнат')} для ${data.offer.guests} гостей`;

  if (data.offer.guests === 1) {
    capacity.textContent = capacity.textContent.replace('гостей', 'гостя');
  }

  const featuresList = cardElement.querySelector('.popup__features');
  if (data.offer.features.length > 0) {
    renderFeatures(data.offer.features, featuresList);
  } else {
    featuresList.remove();
  }

  const checkTime = cardElement.querySelector('.popup__text--time');
  checkTime.textContent = `Заезд после ${data.offer.checkin}, выезд до ${data.offer.checkout}`;

  const description = cardElement.querySelector('.popup__description');
  if (data.offer.description) {
    description.textContent = data.offer.description;
  } else {
    description.remove();
  }

  const photos = cardElement.querySelector('.popup__photos');

  const photo = cardElement.querySelector('.popup__photo');

  photo.remove();

  for (let i = 0; i < data.offer.photos.length; i++) {
    photo.src = data.offer.photos[i];
    const addedPhoto = photo.cloneNode(true);
    photos.appendChild(addedPhoto);
  }
  return cardElement;
};

export {renderCard};
