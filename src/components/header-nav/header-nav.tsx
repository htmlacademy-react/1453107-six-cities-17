import { Link } from 'react-router-dom';

import { AppRoute } from '../../const';
import { LoggedUser } from '../../types';

type HeaderNavProps = {
  isLogged?: boolean;
  user?: LoggedUser;
}

function HeaderNav({isLogged, user}: HeaderNavProps): JSX.Element {
  return(
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
            <div className="header__avatar-wrapper user__avatar-wrapper">
            </div>

            {isLogged && user
              ? (
                <>
                  <span className="header__user-name user__name">{user.email}</span>
                  <span className="header__favorite-count">3</span>
                </>
              )
              : (
                <span className="header__login">Sign in</span>
              )}
          </Link>
        </li>

        {isLogged && (
          <li className="header__nav-item">
            <Link className="header__nav-link" to={AppRoute.Login}>
              <span className="header__signout">Sign out</span>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default HeaderNav;
