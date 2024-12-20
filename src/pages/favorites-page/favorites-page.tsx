import styles from './style.module.css';

import HelmetTitle from '../../components/helmet-title/helmet-title';

import Footer from '../../components/footer/footer';
import FavoritesEmpty from '../../components/favorites-empty/favorites-empty';
import FavoritesList from '../../components/favorites-list/favorites-list';

import { PreviewOffer } from '../../types';

type FavoritesPageProps = {
  favorites: PreviewOffer[];
}

function FavoritesPage({favorites}: FavoritesPageProps): JSX.Element {

  const isEmpty = !favorites.length;

  return (
    <>
      <HelmetTitle pageTitle='Favorites Page' />

      <main className={`page__main page__main--favorites ${isEmpty ? 'page__main--favorites-empty' : styles['page__main--full']}`} >

        <div className="page__favorites-container container">

          {isEmpty ? < FavoritesEmpty /> : (
            <section className={`favorites ${styles['favorites--full']}`}>
              <h1 className="favorites__title">Saved listing</h1>

              <FavoritesList favorites={favorites}/>
            </section>
          )}

        </div>
      </main>

      <Footer />
    </>
  );
}

export default FavoritesPage;
