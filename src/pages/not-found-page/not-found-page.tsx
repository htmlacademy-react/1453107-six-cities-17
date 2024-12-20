import styles from './style.module.css';

import { Link } from 'react-router-dom';

import HelmetTitle from '../../components/helmet-title/helmet-title';

import { AppRoute } from '../../const';

function NotFoundPage(): JSX.Element {
  return(
    <>
      <HelmetTitle pageTitle='Not Found Page' />

      <main className="page__main page__main--index">

        <section className={styles.notfound}>
          <h1 className={styles.notfound__title}>404 Not Found</h1>
          <Link to={AppRoute.Main} className={styles.notfound__link}>&larr; return to main page</Link>
        </section>

      </main>
    </>
  );
}

export default NotFoundPage;
