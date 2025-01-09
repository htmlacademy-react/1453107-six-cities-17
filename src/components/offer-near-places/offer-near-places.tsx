import PlaceCard from '../place-card/place-card';

import { Setting } from '../../const';
import { PreviewOffer } from '../../types';

type OfferNearPlacesProps = {
  offersNear: PreviewOffer[];
}

function OfferNearPlaces({offersNear}: OfferNearPlacesProps): JSX.Element {
  return(
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">

        {offersNear.slice(0, Setting.OffersNearCount).map((offer) => <PlaceCard key={offer.id} placement='cities' offer={offer} />)}

      </div>
    </section>
  );
}


export default OfferNearPlaces;
