import { generatePath, Link } from 'react-router-dom';

import BookmarkButton from '../bookmark-button/bookmark-button';
import StarRating from '../star-rating/star-rating';

import { AppRoute } from '../../const';
import { PreviewOffer } from '../../types';

type PlaceCardProps = {
  placement: string;
  offer: PreviewOffer;
}

function PlaceCard({placement, offer}: PlaceCardProps): JSX.Element {

  const offerPage = generatePath(AppRoute.Offer, {offerId: offer.id});

  return (
    <article className={`${placement}__card place-card`}>

      { offer.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}

      <div className={`${placement}__image-wrapper place-card__image-wrapper`}>
        <Link to={offerPage}>
          <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

          <BookmarkButton placement="place-card" isActive={offer.isFavorite} />

        </div>

        <StarRating rating={offer.rating} placement={'place-card'}/>

        <h2 className="place-card__name">
          <Link to={offerPage}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
