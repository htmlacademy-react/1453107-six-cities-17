import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import FavoritesEmpty from '../../components/favorites-empty/favorites-empty';
import FavoritesList from '../../components/favorites-list/favorites-list';

import { LoggedUser, PreviewOffer } from '../../types';

type FavoritesPageProps = {
  favorites: PreviewOffer[];
  isLogged: boolean;
  user: LoggedUser;
}

function FavoritesPage({favorites, isLogged, user}: FavoritesPageProps): JSX.Element {

  const isEmpty = !favorites.length;

  return (
    <div className={`page ${isEmpty && 'page--favorites-empty'}`}>
      <Header isLogged={isLogged} user={user} />

      <main className={`page__main page__main--favorites ${isEmpty && 'page__main--favorites-empty'}`}>

        <div className="page__favorites-container container">

          {isEmpty ? < FavoritesEmpty /> : (
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>

              <FavoritesList favorites={favorites}/>

            </section>
          )}

        </div>
      </main>

      <Footer />

    </div>
  );
}

export default FavoritesPage;
