import { Link } from 'react-router-dom';

import { AppRoute } from '../../const';
import { LocationType } from '../../types';

type LocationsItemProps = {
  locationName: LocationType;
  isActive?: boolean;
};

function LocationsItem({locationName, isActive}: LocationsItemProps): JSX.Element {
  return(
    <li className="locations__item">
      <Link className={`locations__item-link tabs__item ${isActive && 'tabs__item--active'}`} to={AppRoute.Main}>
        <span>{locationName}</span>
      </Link>
    </li>
  );
}

export default LocationsItem;
