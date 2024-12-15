import { PreviewOffer } from '../../types';
import BookmarkButton from '../bookmark-button/bookmark-button';
import PlaceRating from '../rating-star/rating-star';

type PlaceCardProps = {
  placement: string;
  offer: PreviewOffer;
}

function PlaceCard({placement, offer}: PlaceCardProps): JSX.Element {
  return (
    <article className={`${placement}__card place-card`}>

      { offer.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}

      <div className={`${placement}__image-wrapper place-card__image-wrapper`}>
        <a href="#">
          <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

          <BookmarkButton placement="place-card" isActive={offer.isFavorite} />

        </div>

        <PlaceRating rating={offer.rating} />

        <h2 className="place-card__name">
          <a href="#">{offer.title}</a>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
