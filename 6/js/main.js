import {makeAds} from './data.js';
import {renderCard} from './card.js';
import './form.js';

const MAX_COUNT_AD = 10;

const offers = makeAds(MAX_COUNT_AD);

renderCard(offers[7]);


