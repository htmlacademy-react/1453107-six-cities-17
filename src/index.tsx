import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/app/app';

import { Setting } from './const';

import MOCK_OFFERS from './mocks/mock-offers';
import MOCK_OFFER from './mocks/mock-offer';
import MOCK_FAVORITE from './mocks/mock-favorite';
import MOCK_OFFERS_NEAR from './mocks/mock-offers-near';
import MOCK_USER from './mocks/mock-user';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      selectedLocation = {Setting.DefaultLocation}
      offersCount = {Setting.OffersCount}
      offersData = {MOCK_OFFERS}
      selectedOffer= {MOCK_OFFER}
      offersNearData = {MOCK_OFFERS_NEAR}
      favorites = {MOCK_FAVORITE}
      user = {MOCK_USER}
    />
  </React.StrictMode>
);
