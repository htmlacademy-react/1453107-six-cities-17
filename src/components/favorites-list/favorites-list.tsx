import { PreviewOffer } from '../../types';
import PlaceCard from '../place-card/place-card';

type FavoritesListProps = {
  favorites: PreviewOffer[];
}

type FavoritesListItemProps = {
  city: string;
  locations: PreviewOffer[];
}

function FavoritesListItem({city, locations}: FavoritesListItemProps): JSX.Element {

  return(
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">

        {locations.map((location) => <PlaceCard key={location.id} placement='favorites' offer={location} />)}

      </div>
    </li>
  );
}

function FavoritesList({favorites}: FavoritesListProps): JSX.Element {

  const FavoritesByCities: {[propertyName: string]: PreviewOffer[]} = {};

  for (const favorite of favorites) {
    const cityName = favorite.city.name;

    if (FavoritesByCities[cityName]) {
      FavoritesByCities[cityName].push(favorite);
    } else {
      FavoritesByCities[cityName] = [favorite];
    }
  }

  return(
    <ul className="favorites__list">

      {Object.keys(FavoritesByCities).map((city) => <FavoritesListItem key={city} city={city} locations={FavoritesByCities[city]} />)}

    </ul>
  );
}

export default FavoritesList;
