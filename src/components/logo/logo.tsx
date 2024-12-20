import { Link } from 'react-router-dom';

import { AppRoute, LogoData } from '../../const';

type LogoProps = {
  isMainPage?: boolean;
  isHeader?: boolean;
}

function Logo({isMainPage, isHeader}: LogoProps): JSX.Element {

  const placement = isHeader ? 'header' : 'footer';

  return(
    <Link className={`header__logo-link ${isMainPage && 'header__logo-link--active'}`} to={AppRoute.Main}>
      <img
        className={`${placement}__logo`}
        src="img/logo.svg"
        alt="6 cities logo"
        width={LogoData[placement].width}
        height={LogoData[placement].height}
      />
    </Link>
  );
}

export default Logo;
