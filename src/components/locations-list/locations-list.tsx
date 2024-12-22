import LocationsItem from '../locations-item/locations-item';

import { Location } from '../../const';
import { LocationType } from '../../types';

type LocationsListProps = {
  selectedLocation: LocationType;
}

function LocationsList({selectedLocation}: LocationsListProps): JSX.Element {
  return(
    <>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {Object.values(Location).map((locationName) => <LocationsItem key={locationName} locationName={locationName} isActive={locationName === selectedLocation}/>)}
          </ul>
        </section>
      </div>
    </>
  );
}


export default LocationsList;
