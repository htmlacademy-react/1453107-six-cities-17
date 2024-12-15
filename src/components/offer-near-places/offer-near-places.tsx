import { PreviewOffer } from '../../types';
import PlaceCard from '../place-card/place-card';

type OfferNearPlacesProps = {
  offersNear: PreviewOffer[];
}

function OfferNearPlaces({offersNear}: OfferNearPlacesProps): JSX.Element {
  return(
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">

        {offersNear.map((offer) => <PlaceCard key={offer.id} placement='cities' offer={offer} />)}

      </div>
    </section>
  );
}


export default OfferNearPlaces;
