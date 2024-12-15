import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/app/app';

import { Settings } from './const';

import MOCK_OFFERS from './mock-data/mock-offers';
import MOCK_OFFER from './mock-data/mock-offer';
import MOCK_FAVORITE from './mock-data/mock-favorite';
import MOCK_USER from './mock-data/mock-user';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      selectedLocation = {Settings.DefaultLocation}
      offersCount = {Settings.OffersCount}
      offersData = {MOCK_OFFERS}
      selectedOffer= {MOCK_OFFER}
      favorites = {MOCK_FAVORITE}
      user = {MOCK_USER}
    />
  </React.StrictMode>
);
