import styles from './style.module.css';

import { Outlet, useLocation } from 'react-router-dom';

import Header from '../header/header';

import { AppRoute } from '../../const';
import { LoggedUser } from '../../types';

type LayoutProps = {
  isLogged: boolean;
  user: LoggedUser;
  favoritesCount: number;
}

function Layout({isLogged, user, favoritesCount}: LayoutProps): JSX.Element {

  const { pathname } = useLocation();

  let pageClass = 'page';

  switch(pathname) {
    case AppRoute.Login:
      pageClass += ' page--gray page--login';
      break;

    case AppRoute.Favorites:
      pageClass += !favoritesCount ? ' page--favorites-empty' : ` ${styles['page--full']}`;
      break;

    default:
      pageClass += pathname.startsWith('/offer') ? '' : ' page--gray page--main';
      break;
  }

  return(
    <div className={pageClass}>
      <Header
        isLoginPage={pathname === AppRoute.Login}
        isMainPage={pathname === AppRoute.Main}
        isLogged={isLogged}
        user={user}
      />

      <Outlet />
    </div>
  );
}

export default Layout;
