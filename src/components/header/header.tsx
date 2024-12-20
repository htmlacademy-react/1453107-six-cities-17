import Logo from '../logo/logo';
import HeaderNav from '../header-nav/header-nav';

import { LoggedUser } from '../../types';

type HeaderProps = {
  isLoginPage?: boolean;
  isMainPage?: boolean;
  isLogged?: boolean;
  user?: LoggedUser;
}

function Header({isLoginPage, isMainPage, isLogged, user}: HeaderProps): JSX.Element {
  return(
    <header className="header">
      <div className="container">
        <div className="header__wrapper">

          <div className="header__left">
            <Logo isMainPage={isMainPage} isHeader/>
          </div>

          {!isLoginPage && <HeaderNav isLogged={isLogged} user={user} />}

        </div>
      </div>
    </header>
  );
}

export default Header;
