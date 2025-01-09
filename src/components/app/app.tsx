import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import MainPage from '../../pages/main-page/main-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import OfferPage from '../../pages/offer-page/offer-page';
import LoginPage from '../../pages/login-page/login-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';

import Layout from '../layout/layout';
import PrivateRoute from '../private-route.tsx/private-route';
import ScrollToTop from '../scroll-to-top/scroll-to-top';

import { AppRoute, AuthorizationStatus } from '../../const';
import { LocationType, LoggedUser, PreviewOffer, SelectedOffer } from '../../types';

type AppProps = {
  selectedLocation: LocationType;
  offersCount: number;
  offersData: PreviewOffer[];
  selectedOffer: SelectedOffer;
  offersNearData: PreviewOffer[];
  favorites: PreviewOffer[];
  user: LoggedUser;
};

function App({selectedLocation, offersCount, offersData, selectedOffer, offersNearData, favorites, user}: AppProps): JSX.Element {

  const userStatus = AuthorizationStatus.Auth;
  const isUserLogged = userStatus === AuthorizationStatus.Auth;

  return(
    <HelmetProvider>
      <BrowserRouter>

        <ScrollToTop />

        <Routes>

          <Route path={AppRoute.Main} element={
            <Layout
              isLogged={isUserLogged}
              user={user}
              favoritesCount={favorites.length}
            />
          }
          >

            <Route index element={
              <MainPage
                selectedLocation={selectedLocation}
                offersCount={offersCount}
                offersData={offersData}
              />
            }
            />

            <Route path={AppRoute.Login} element={
              <PrivateRoute
                isNeedNavigate={isUserLogged}
                navigateTo={AppRoute.Main}
              >
                <LoginPage
                  selectedLocation={selectedLocation}
                />
              </PrivateRoute>
            }
            />

            <Route path={AppRoute.Favorites} element={
              <PrivateRoute
                isNeedNavigate={!isUserLogged}
                navigateTo={AppRoute.Login}
              >
                <FavoritesPage
                  favorites={favorites}
                />
              </PrivateRoute>
            }
            />

            <Route path={AppRoute.Offer} element={
              <OfferPage
                selectedOffer={selectedOffer}
                offersNearData={offersNearData}
              />
            }
            />

            <Route path={AppRoute.NotFound} element={
              <NotFoundPage/>
            }
            />

          </Route>
        </Routes>
      </ BrowserRouter>
    </HelmetProvider>
  );
}


export default App;
