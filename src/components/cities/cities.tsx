import PlaceCard from '../place-card/place-card';
import SortingForm from '../sorting-form/sorting-form';

import { PreviewOffer } from '../../types';

type CitiesProps = {
  selectedLocation: string;
  offersCount: number;
  offersData: PreviewOffer[];
};

function Cities({selectedLocation, offersCount, offersData}: CitiesProps): JSX.Element {

  const placesToStayCount = offersData.filter((offer) => offer.city.name === selectedLocation).length;

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{placesToStayCount} places to stay in {selectedLocation}</b>

      <SortingForm />

      <div className="cities__places-list places__list tabs__content">

        { offersData.map((offer, i) => {
          if (i < offersCount) {
            return (<PlaceCard key={offer.id} placement='cities' offer={offer} />);
          }
        })}

      </div>
    </section>
  );
}

export default Cities;
