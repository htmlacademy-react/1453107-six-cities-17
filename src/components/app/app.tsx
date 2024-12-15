import MainPage from '../../pages/main-page/main-page';

// import FavoritesPage from '../../pages/favorites-page/favorites-page';
// import OfferPage from '../../pages/offer-page/offer-page';
// import LoginPage from '../../pages/login-page/login-page';
import { LocationType, LoggedUser, PreviewOffer, SelectedOffer } from '../../types';


type AppProps = {
  selectedLocation: LocationType;
  offersCount: number;
  offersData: PreviewOffer[];
  selectedOffer: SelectedOffer;
  favorites: PreviewOffer[];
  user: LoggedUser;
};

function App({selectedLocation, offersCount, offersData, selectedOffer, favorites, user}: AppProps): JSX.Element {

  return(
    <MainPage
      selectedLocation={selectedLocation}
      offersCount={offersCount}
      offersData={offersData}
      isLogged
      user={user}
    />

  // <OfferPage selectedOffer={selectedOffer}/>
  // <LoginPage selectedLocation={selectedLocation}/>
  // <FavoritesPage favorites={favorites}/>
  );
}

export default App;
