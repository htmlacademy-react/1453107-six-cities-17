import PlaceCard from '../place-card/place-card';
import SortingForm from '../sorting-form/sorting-form';

import { PreviewOffer } from '../../types';
import { Setting } from '../../const';

type CitiesProps = {
  selectedLocation: string;
  offersCount: number;
  offersData: PreviewOffer[];
  onOfferChangeHandle: (offer: PreviewOffer | null) => void;
};

function Cities({selectedLocation, offersCount, offersData, onOfferChangeHandle}: CitiesProps): JSX.Element {

  const placesToStayCount = offersData.filter((offer) => offer.city.name === selectedLocation).length;

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{placesToStayCount} place{placesToStayCount > 1 ? 's' : ''} to stay in {selectedLocation}</b>

      <SortingForm />

      <div className="cities__places-list places__list tabs__content">

        { offersData.slice(0, Setting.OffersCount).map((offer, i) => {
          if (i < offersCount) {
            return (
              <PlaceCard
                key={offer.id}
                placement='cities'
                offer={offer}
                onMouseEnter={onOfferChangeHandle}
                onMouseLeave={onOfferChangeHandle}
              />);
          }
        })}

      </div>
    </section>
  );
}

export default Cities;
