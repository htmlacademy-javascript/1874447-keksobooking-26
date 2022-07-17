import {toggleInteractive} from './form.js';
import {offers} from './data.js';
import {renderCard} from './card.js';

const map = L.map('map-canvas')
  .on('load', () => {
    toggleInteractive();
  })
  .setView({
    lat: 35.71138,
    lng: 139.76797,
  }, 10);

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

offers.forEach((data) => {
  const similarMarker = L.marker({
    lat: data.location.lat,
    lng: data.location.lng,
  },
  {
    icon,
  });

  similarMarker.addTo(map).bindPopup(renderCard(data));
});
