import { LocationType } from '../../types';

type LocationsItemProps = {
  locationName: LocationType;
  isActive?: boolean;
};

function LocationsItem({locationName, isActive}: LocationsItemProps): JSX.Element {
  return(
    <li className="locations__item">
      <a className={`locations__item-link tabs__item ${isActive && 'tabs__item--active'}`} href="#">
        <span>{locationName}</span>
      </a>
    </li>
  );
}

export default LocationsItem;
