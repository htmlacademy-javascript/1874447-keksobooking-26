import {sendRequest} from './fetch.js';
import {toggleInteractive} from './form.js';
import {renderCard} from './card.js';
import {showAlert} from './util.js';

const MAX_PINS = 10;

const map = L.map('map-canvas');

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const marker = L.marker(
  {
    lat: 35.71138,
    lng: 139.76797,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

marker.addTo(map);

const address = document.querySelector('#address');

address.value = '35.71138, 139.76797';

marker.on('moveend', (evt) => {
  const coordinates = evt.target.getLatLng();
  address.value = `${coordinates.lat.toFixed(5)}, ${coordinates.lng.toFixed(5)}`;
});

const icon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const renderPins = (data) => {
  data.forEach((offer) => {
    const similarMarker = L.marker({
      lat: offer.location.lat,
      lng: offer.location.lng,
    },
    {
      icon,
    });

    similarMarker.addTo(map).bindPopup(renderCard(offer));
  });
};

const resetMap = () => {
  marker.setLatLng({
    lat: 35.71138,
    lng: 139.76797,
  });

  map.setView({
    lat: 35.71138,
    lng: 139.76797,
  }, 10);

  map.closePopup();
};

let offers = [];

const onSuccess = (data) => {
  offers = data.slice();

  renderPins(offers.slice(0, MAX_PINS));
};

const onError = () => {
  toggleInteractive();
  showAlert('Ошибка загрузки данных');
};

map.on('load', () => {
  toggleInteractive();
  sendRequest(onSuccess, onError, 'GET');
}).setView({
  lat: 35.71138,
  lng: 139.76797,
}, 10);

export {address, resetMap};
