import HelmetTitle from '../../components/helmet-title/helmet-title';

import OfferGallery from '../../components/offer-gallery/offer-gallery';
import OfferFeatures from '../../components/offer-features/offer-feature';
import OfferInside from '../../components/offer-inside/offer-inside';
import OfferHostInfo from '../../components/offer-host-info/offer-host-info';
import OfferReviews from '../../components/offer-reviews/offer-reviews';
import OfferNearPlaces from '../../components/offer-near-places/offer-near-places';
import StarRating from '../../components/star-rating/star-rating';
import BookmarkButton from '../../components/bookmark-button/bookmark-button';
import Map from '../../components/map/map';

import MOCK_COMMENTS from '../../mocks/mock-comments';

import { PreviewOffer, SelectedOffer } from '../../types';

type OfferPageProps = {
  selectedOffer: SelectedOffer;
  offersNearData: PreviewOffer[];
};

function OfferPage({selectedOffer, offersNearData}: OfferPageProps): JSX.Element {
  return(
    <>
      <HelmetTitle pageTitle='Offer Page' />

      <main className="page__main page__main--offer">
        <section className="offer">

          <OfferGallery />

          <div className="offer__container container">
            <div className="offer__wrapper">

              {selectedOffer.isPremium && (
                <div className="offer__mark">
                  <span>Premium</span>
                </div>
              )}

              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {selectedOffer.title}
                </h1>

                <BookmarkButton placement="offer-page"/>

              </div>

              <StarRating rating={selectedOffer.rating} placement={'offer'} />

              <OfferFeatures
                type={selectedOffer.type}
                bedrooms={selectedOffer.bedrooms}
                maxAdults={selectedOffer.maxAdults}
              />

              <div className="offer__price">
                <b className="offer__price-value">&euro;{selectedOffer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>

              <OfferInside goods={selectedOffer.goods}/>

              <OfferHostInfo host={selectedOffer.host} description={selectedOffer.description}/>

              <OfferReviews comments={MOCK_COMMENTS} isLogged/>

            </div>
          </div>

          <Map placement='offer'/>
        </section>

        <div className="container">
          <OfferNearPlaces offersNear={offersNearData}/>
        </div>

      </main>
    </>
  );
}

export default OfferPage;
