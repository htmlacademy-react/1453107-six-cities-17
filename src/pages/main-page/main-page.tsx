import { useState } from 'react';

import HelmetTitle from '../../components/helmet-title/helmet-title';

import LocationsList from '../../components/locations-list/locations-list';
import Cities from '../../components/cities/cities';
import Map from '../../components/map/map';
import MainEmpty from '../../components/main-empty/main-empty';

import { PreviewOffer, LocationType } from '../../types';


type MainPageProps = {
  selectedLocation: LocationType;
  offersCount: number;
  offersData: PreviewOffer[];
};

function MainPage({selectedLocation, offersCount, offersData }: MainPageProps): JSX.Element {

  const [activeOffer, setActiveOffer] = useState<PreviewOffer | null>(null);

  function handleOfferChange(offer: PreviewOffer | null): void {
    setActiveOffer(offer);
  }

  const isEmpty = !offersData.length;

  return(
    <>
      <HelmetTitle pageTitle='Main Page' />

      <main className={`page__main page__main--index ${isEmpty ? 'page__main--index-empty' : ''}`}>

        <LocationsList selectedLocation={selectedLocation}/>

        <div className="cities">
          <div className={`cities__places-container container ${isEmpty ? 'cities__places-container--empty' : ''}`}>

            {isEmpty
              ? <MainEmpty selectedLocation={selectedLocation}/>
              : <Cities selectedLocation={selectedLocation} offersCount={offersCount} offersData={offersData} onOfferChangeHandle={handleOfferChange}/>}

            <div className="cities__right-section">
              {!isEmpty && <Map placement='cities'/>}
            </div>

          </div>
        </div>
      </main>
    </>
  );
}

export default MainPage;
