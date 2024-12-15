import Header from '../../components/header/header';
import LocationsList from '../../components/locations-list/locations-list';
import Cities from '../../components/cities/cities';
import Map from '../../components/map/map';
import MainEmpty from '../../components/main-empty/main-empty';

import { PreviewOffer, LocationType, LoggedUser } from '../../types';

type MainPageProps = {
  selectedLocation: LocationType;
  offersCount: number;
  offersData: PreviewOffer[];
  isLogged: boolean;
  user: LoggedUser;
};

function MainPage({selectedLocation, offersCount, offersData, isLogged, user}: MainPageProps): JSX.Element {

  const isEmpty = !offersData.length;

  return(
    <div className="page page--gray page--main">
      <Header isMainPage isLogged={isLogged} user={user} />

      <main className={`page__main page__main--index ${isEmpty && 'page__main--index-empty'}`}>

        <LocationsList selectedLocation={selectedLocation}/>

        <div className="cities">
          <div className={`cities__places-container container ${isEmpty && 'cities__places-container--empty'}`}>

            {isEmpty
              ? <MainEmpty selectedLocation={selectedLocation}/>
              : <Cities selectedLocation={selectedLocation} offersCount={offersCount} offersData={offersData} />}

            <div className="cities__right-section">
              {!isEmpty && <Map placement='cities'/>}
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
